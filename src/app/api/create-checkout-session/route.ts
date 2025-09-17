import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
import { catalog, type CatalogKey } from '@/lib/catalog'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cart, formData } = body as { cart: Array<{ key: CatalogKey; qty: number }>; formData: any };

    // Use centralized server-side catalog (authoritative)

    if (!Array.isArray(cart) || cart.length === 0) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // Build Stripe line items
    const line_items = cart
      .filter((item) => item.qty > 0 && catalog[item.key])
      .map((item) => {
        const deck = catalog[item.key];
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: deck.name,
              description: `${deck.cards} - ${deck.description}`,
              images: ['https://via.placeholder.com/300x200/007bff/ffffff?text=Flashcards'],
            },
            unit_amount: Math.round(deck.price * 100),
          },
          quantity: item.qty,
        } as Stripe.Checkout.SessionCreateParams.LineItem;
      });

    if (line_items.length === 0) {
      return NextResponse.json({ error: 'No valid items in cart' }, { status: 400 });
    }

    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout`,
      customer_email: formData.email,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'BE', 'AT', 'CH', 'SE', 'NO', 'DK', 'FI'],
      },
      metadata: {
        customer_name: formData.name,
        customer_email: formData.email,
        cart: JSON.stringify(cart),
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
