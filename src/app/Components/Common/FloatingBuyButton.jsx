"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';

const FloatingBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="floating-buy-button">
      <Link href="/checkout" className="buy-now-btn">
        <span className="btn-text">Buy Now</span>
        <span className="btn-icon">🛒</span>
      </Link>
      
      <style jsx>{`
        .floating-buy-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 1000;
          animation: slideInUp 0.3s ease-out;
        }
        
        .buy-now-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          padding: 15px 25px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        
        .buy-now-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(0, 123, 255, 0.4);
          color: white;
          text-decoration: none;
        }
        
        .btn-text {
          font-size: 16px;
        }
        
        .btn-icon {
          font-size: 18px;
        }
        
        @keyframes slideInUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .floating-buy-button {
            bottom: 20px;
            right: 20px;
          }
          
          .buy-now-btn {
            padding: 12px 20px;
            font-size: 14px;
          }
          
          .btn-text {
            display: none;
          }
          
          .btn-icon {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingBuyButton;
