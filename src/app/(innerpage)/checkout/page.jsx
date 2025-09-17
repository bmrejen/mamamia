"use client"
import React, { useState } from 'react';
import BreadCumb from '@/app/Components/Common/BreadCumb';

const CheckoutPage = () => {
  const [selectedDeck, setSelectedDeck] = useState('learning');
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your payment processor (Stripe, PayPal, etc.)
    alert(`Thank you! You've ordered ${flashcardDecks[selectedDeck].name} for $${flashcardDecks[selectedDeck].price}. Your flashcards will be shipped within 2-3 business days!`);
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
                  
                  <button type="submit" className="theme-btn">
                    Complete Purchase - ${flashcardDecks[selectedDeck].price}
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
                        onClick={() => setSelectedDeck(key)}
                      >
                        <div className="deck-info">
                          <h6>{deck.name}</h6>
                          <p className="deck-cards">{deck.cards}</p>
                          <p className="deck-description">{deck.description}</p>
                          <span className="price">${deck.price}</span>
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
                  <h5>Total: ${flashcardDecks[selectedDeck].price}</h5>
                  <p>One-time purchase</p>
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
        
        .plan-options {
          margin-bottom: 20px;
        }
        
        .plan-option {
          padding: 15px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .plan-option.selected {
          border-color: #007bff;
          background: #f0f8ff;
        }
        
        .plan-info h6 {
          margin: 0 0 5px 0;
          font-size: 16px;
        }
        
        .price {
          font-size: 24px;
          font-weight: bold;
          color: #007bff;
        }
        
        .period {
          color: #666;
          font-size: 14px;
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
      `}</style>
    </div>
  );
};

export default CheckoutPage;
