import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
});

// This endpoint handles successful payments
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId } = body;

    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer_details', 'shipping_details'],
    });
    const s = session as unknown as Stripe.Checkout.Session;

    if (s.payment_status === 'paid') {
      // Extract order information from session metadata
      const orderData = {
        orderId: s.id,
        customerName: session.metadata?.customer_name,
        customerEmail: session.metadata?.customer_email,
        deckType: session.metadata?.deck_type,
        deckName: session.metadata?.deck_name,
        deckCards: session.metadata?.deck_cards,
        deckPrice: session.metadata?.deck_price,
        shippingAddress: s.customer_details?.address,
        paymentStatus: s.payment_status,
        createdAt: new Date().toISOString(),
      };

      // Here you would typically:
      // 1. Save order to your database
      // 2. Send confirmation email to customer
      // 3. Send order details to your fulfillment team
      // 4. Update inventory

      console.log('New order received:', orderData);

      // For now, we'll just log the order
      // In production, you'd save this to a database like MongoDB, PostgreSQL, etc.
      
      return NextResponse.json({
        success: true,
        message: 'Order processed successfully',
        orderId: s.id
      });
    }

    return NextResponse.json({ 
      success: false, 
      message: 'Payment not completed' 
    }, { status: 400 });

  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { error: 'Failed to process order' },
      { status: 500 }
    );
  }
}

// This endpoint retrieves order details
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['customer_details', 'shipping_details'],
    });
    const s = session as unknown as Stripe.Checkout.Session;

    const orderDetails = {
      orderId: s.id,
      customerName: session.metadata?.customer_name,
      customerEmail: session.metadata?.customer_email,
      deckType: session.metadata?.deck_type,
      deckName: session.metadata?.deck_name,
      deckCards: session.metadata?.deck_cards,
      deckPrice: session.metadata?.deck_price,
      shippingAddress: (s as any).customer_details?.address || (s as any).shipping_details?.address,
      paymentStatus: s.payment_status,
      createdAt: new Date(s.created * 1000).toISOString(),
    };

    return NextResponse.json({ order: orderDetails });

  } catch (error) {
    console.error('Error retrieving order:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve order' },
      { status: 500 }
    );
  }
}
