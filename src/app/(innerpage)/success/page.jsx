"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import BreadCumb from '@/Components/Common/BreadCumb';

const SuccessPage = () => {
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');
    
    if (sessionId) {
      // In a real app, you'd fetch the session details from your backend
      // For now, we'll just show a success message
      setSessionData({ id: sessionId });
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="success-page">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p>Processing your order...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Order Successful!"
      />
      
      <section className="success-section section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="success-content text-center">
                <div className="success-icon">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#28a745"/>
                    <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <h2 className="success-title">🎉 Order Successful!</h2>
                <p className="success-message">
                  Thank you for your purchase! Your English flashcards are being prepared and will be shipped within 2-3 business days.
                </p>
                
                {sessionData && (
                  <div className="order-details">
                    <p><strong>Order ID:</strong> {sessionData.id}</p>
                    <p><strong>Confirmation Email:</strong> Sent to your email address</p>
                  </div>
                )}
                
                <div className="next-steps">
                  <h4>What happens next?</h4>
                  <div className="steps-list">
                    <div className="step">
                      <span className="step-number">1</span>
                      <span className="step-text">We'll prepare your flashcards</span>
                    </div>
                    <div className="step">
                      <span className="step-number">2</span>
                      <span className="step-text">Package and ship within 2-3 days</span>
                    </div>
                    <div className="step">
                      <span className="step-number">3</span>
                      <span className="step-text">You'll receive tracking information</span>
                    </div>
                    <div className="step">
                      <span className="step-number">4</span>
                      <span className="step-text">Enjoy learning with your flashcards!</span>
                    </div>
                  </div>
                </div>
                
                <div className="action-buttons">
                  <Link href="/" className="btn btn-primary">
                    Continue Shopping
                  </Link>
                  <Link href="/contact" className="btn btn-outline-primary">
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .success-section {
          padding: 60px 0;
        }
        
        .success-content {
          background: #fff;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .success-icon {
          margin-bottom: 30px;
        }
        
        .success-title {
          color: #28a745;
          margin-bottom: 20px;
          font-size: 2.5rem;
        }
        
        .success-message {
          font-size: 1.2rem;
          color: #666;
          margin-bottom: 30px;
        }
        
        .order-details {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 30px;
        }
        
        .next-steps h4 {
          margin-bottom: 20px;
          color: #333;
        }
        
        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .step {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        
        .step-number {
          background: #007bff;
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        
        .step-text {
          font-size: 1.1rem;
        }
        
        .action-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn {
          padding: 12px 30px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }
        
        .btn-primary {
          background: #007bff;
          color: white;
          border: 2px solid #007bff;
        }
        
        .btn-primary:hover {
          background: #0056b3;
          border-color: #0056b3;
          color: white;
        }
        
        .btn-outline-primary {
          background: transparent;
          color: #007bff;
          border: 2px solid #007bff;
        }
        
        .btn-outline-primary:hover {
          background: #007bff;
          color: white;
        }
        
        @media (max-width: 768px) {
          .success-content {
            padding: 20px;
          }
          
          .success-title {
            font-size: 2rem;
          }
          
          .action-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default SuccessPage;
