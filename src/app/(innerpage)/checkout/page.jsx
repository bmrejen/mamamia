"use client"
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import BreadCumb from '@/Components/Common/BreadCumb';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const [selectedDeck, setSelectedDeck] = useState('learning');
  const [quantities, setQuantities] = useState({ starter: 0, learning: 1, master: 0 });
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const flashcardDecks = {
    starter: { price: 24.99, name: 'Starter Deck', cards: '250 Cards', description: 'Perfect for beginners! Essential English vocabulary with colorful illustrations.' },
    learning: { price: 39.99, name: 'Learning Deck', cards: '500 Cards', description: 'Our most popular choice! Comprehensive vocabulary covering everyday English.' },
    master: { price: 59.99, name: 'Master Deck', cards: '1000 Cards', description: 'Complete English learning system! Advanced vocabulary, grammar, and conversation starters.' }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const increment = (key) => {
    setQuantities((prev) => ({ ...prev, [key]: (prev[key] || 0) + 1 }));
  };

  const decrement = (key) => {
    setQuantities((prev) => ({ ...prev, [key]: Math.max(0, (prev[key] || 0) - 1) }));
  };

  const handleQtyInput = (e, key) => {
    const raw = e.target.value.replace(/\D/g, '');
    const next = Math.max(0, parseInt(raw || '0', 10));
    setQuantities((prev) => ({ ...prev, [key]: next }));
  };

  const handleQtyKeyDown = (e, key) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      increment(key);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      decrement(key);
    }
  };

  const cartItems = Object.entries(quantities)
    .filter(([key, qty]) => qty > 0)
    .map(([key, qty]) => ({ key, qty }));

  const subtotal = cartItems.reduce((sum, item) => sum + flashcardDecks[item.key].price * item.qty, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart: cartItems,
          formData,
          // Send nothing price-related from client to avoid tampering
        }),
      });

      const { sessionId } = await response.json();

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe checkout error:', error);
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Checkout"
      />
      
      <section className="checkout-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-form">
                <h3>Complete Your Purchase</h3>
                <form onSubmit={handleSubmit}>
                  <h4>Shipping Information</h4>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Street Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="form-control"
                    />
                  </div>
                  
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>State/Province</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>ZIP/Postal Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <h4>Payment Information</h4>
                  
                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      required
                      className="form-control"
                    />
                  </div>
                  
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label>ZIP Code</label>
                        <input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <button type="submit" className="theme-btn" disabled={subtotal <= 0}>
                    {subtotal > 0 ? `Complete Purchase - $${subtotal.toFixed(2)}` : 'Select a deck to continue'}
                  </button>
                </form>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="order-summary">
                <h4>Order Summary</h4>
                
                <div className="deck-selection">
                  <h5>Select Flashcard Deck</h5>
                  
                  <div className="deck-options">
                    {Object.entries(flashcardDecks).map(([key, deck]) => (
                      <div 
                        key={key}
                        className={`deck-option ${selectedDeck === key ? 'selected' : ''}`}
                      >
                        <div className="deck-info" onClick={() => setSelectedDeck(key)}>
                          <h6>{deck.name}</h6>
                          <p className="deck-cards">{deck.cards}</p>
                          <p className="deck-description">{deck.description}</p>
                          <span className="price">${deck.price}</span>
                        </div>
                        <div
                          className="qty-controls"
                          role="group"
                          aria-label={`Quantity for ${deck.name}`}
                        >
                          <button
                            type="button"
                            className="qty-btn minus"
                            aria-label={`Decrease ${deck.name} quantity`}
                            onClick={() => decrement(key)}
                            disabled={(quantities[key] || 0) === 0}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </button>
                          <input
                            type="number"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            min="0"
                            value={quantities[key] || 0}
                            onChange={(e) => handleQtyInput(e, key)}
                            onKeyDown={(e) => handleQtyKeyDown(e, key)}
                            className="qty-input"
                            aria-live="polite"
                            aria-label={`${deck.name} quantity`}
                          />
                          <button
                            type="button"
                            className="qty-btn plus"
                            aria-label={`Increase ${deck.name} quantity`}
                            onClick={() => increment(key)}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="shipping-info">
                  <h5>Shipping</h5>
                  <p>✅ Free shipping worldwide</p>
                  <p>📦 Ships within 2-3 business days</p>
                  <p>📧 Tracking number provided</p>
                </div>
                
                <div className="total">
                  <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
                  <p>One-time purchase • Free shipping</p>
                </div>
                
                <div className="security-badges">
                  <p><i className="fas fa-lock"></i> Secure 256-bit SSL encryption</p>
                  <p><i className="fas fa-shield-alt"></i> 30-day money-back guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .checkout-section {
          padding: 60px 0;
        }
        
        .checkout-form {
          background: #fff;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 5px 30px rgba(0,0,0,0.1);
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #333;
        }
        
        .form-control {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s;
        }
        
        .form-control:focus {
          outline: none;
          border-color: #007bff;
        }
        
        .theme-btn {
          background: #007bff;
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: background 0.3s;
        }
        
        .theme-btn:hover {
          background: #0056b3;
        }
        
        .order-summary {
          background: #f8f9fa;
          padding: 30px;
          border-radius: 10px;
          position: sticky;
          top: 20px;
        }
        
        .billing-toggle {
          display: flex;
          margin-bottom: 20px;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid #e1e5e9;
        }
        
        .billing-toggle button {
          flex: 1;
          padding: 10px;
          border: none;
          background: white;
          cursor: pointer;
          transition: background 0.3s;
        }
        
        .billing-toggle button.active {
          background: #007bff;
          color: white;
        }
        
        .deck-options {
          margin-bottom: 20px;
        }
        
        .deck-option {
          padding: 15px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .deck-option.selected {
          border-color: #007bff;
          background: #f0f8ff;
        }
        
        .deck-info h6 {
          margin: 0 0 5px 0;
          font-size: 16px;
        }
        
        .deck-cards {
          margin: 5px 0;
          font-weight: 600;
          color: #007bff;
        }
        
        .deck-description {
          margin: 5px 0 10px 0;
          font-size: 14px;
          color: #666;
        }
        
        .shipping-info {
          margin-bottom: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
        }
        
        .shipping-info h5 {
          margin: 0 0 10px 0;
          font-size: 16px;
        }
        
        .shipping-info p {
          margin: 5px 0;
          font-size: 14px;
          color: #666;
        }
        
        .price {
          font-size: 24px;
          font-weight: bold;
          color: #007bff;
        }
        
        .total {
          border-top: 2px solid #e1e5e9;
          padding-top: 20px;
          margin-top: 20px;
        }
        
        .total h5 {
          font-size: 24px;
          color: #007bff;
          margin: 0;
        }
        
        .security-badges {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e1e5e9;
        }
        
        .security-badges p {
          margin: 5px 0;
          color: #666;
          font-size: 14px;
        }
        
        .security-badges i {
          color: #28a745;
          margin-right: 8px;
        }

        /* Deck option layout refresh */
        .deck-options {
          display: grid;
          gap: 14px;
        }
        .deck-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px;
          border: 1px solid #e8ecf1;
          border-radius: 14px;
          background: linear-gradient(180deg, #ffffff 0%, #fcfdff 100%);
          box-shadow: 0 6px 24px rgba(16, 24, 40, 0.06);
          transition: border-color 0.25s ease, transform 0.06s ease, box-shadow 0.25s ease, background 0.25s ease;
        }
        .deck-option:hover {
          border-color: #c9d7ee;
          box-shadow: 0 10px 30px rgba(16, 24, 40, 0.08);
        }
        .deck-option.selected {
          border-color: #007bff;
          background: linear-gradient(180deg, #f3f8ff 0%, #ffffff 100%);
          box-shadow: 0 8px 28px rgba(0, 123, 255, 0.15);
        }

        /* Quantity stepper */
        .qty-controls {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.65);
          border: 1px solid #e6ebf2;
          box-shadow: 0 1px 2px rgba(16,24,40,0.04), 0 6px 18px rgba(16,24,40,0.08);
          backdrop-filter: saturate(1.2) blur(6px);
        }
        .qty-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 0;
          background: #eef3fb;
          color: #0f172a;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.06s ease, box-shadow 0.2s ease, color 0.2s ease;
          box-shadow: inset 0 -1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(16,24,40,0.06);
        }
        .qty-btn:hover { background: #e4ecf9; box-shadow: inset 0 -1px 0 rgba(255,255,255,0.7), 0 4px 10px rgba(16,24,40,0.08); }
        .qty-btn:active { transform: scale(0.98); }
        .qty-btn.plus { background: #0b72e7; color: #fff; }
        .qty-btn.plus:hover { background: #085bb8; }
        .qty-btn.minus:disabled { opacity: 0.45; cursor: not-allowed; filter: grayscale(20%); }

        .qty-input {
          width: 64px;
          height: 40px;
          padding: 0 6px;
          text-align: center;
          font-weight: 800;
          font-size: 16px;
          letter-spacing: 0.02em;
          border: 0;
          border-radius: 10px;
          background: #ffffff;
          color: #0f172a;
          outline: none;
          box-shadow: inset 0 0 0 1px #edf1f7;
          transition: box-shadow 0.2s ease;
        }
        .qty-input:focus {
          box-shadow: inset 0 0 0 2px #0b72e7, 0 0 0 4px rgba(11,114,231,0.12);
        }

        /* Hide native number spinners */
        :global(input[type="number"]::-webkit-outer-spin-button),
        :global(input[type="number"]::-webkit-inner-spin-button) { -webkit-appearance: none; margin: 0; }
        :global(input[type="number"]) { -moz-appearance: textfield; }
      `}</style>
    </div>
  );
};

export default CheckoutPage;
