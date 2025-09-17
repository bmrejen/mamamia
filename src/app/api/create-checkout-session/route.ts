import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cart, formData } = body as { cart: Array<{ key: string; qty: number }>; formData: any };

    // Server-side authoritative product catalog (prevents client tampering)
    const catalog: Record<string, { name: string; price: number; cards: string; description: string }> = {
      starter: { price: 24.99, name: 'Starter Deck', cards: '250 Cards', description: 'Perfect for beginners! Essential English vocabulary with colorful illustrations.' },
      learning: { price: 39.99, name: 'Learning Deck', cards: '500 Cards', description: 'Our most popular choice! Comprehensive vocabulary covering everyday English.' },
      master: { price: 59.99, name: 'Master Deck', cards: '1000 Cards', description: 'Complete English learning system! Advanced vocabulary, grammar, and conversation starters.' }
    };

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
