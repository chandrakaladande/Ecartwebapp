import React from 'react';
import './Footer.css'; // Include the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            Customer Service: 1-800-123-4567<br />
            Email: support@example.com<br />
            Address: 123 E-commerce St., Suite 100, Hyderabad, India
          </p>
        </div>

        <div className="footer-section customer-service">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="/shipping">Shipping Policy</a></li>
            <li><a href="/returns">Returns Policy</a></li>
            <li><a href="/warranty">Warranty Information</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My E-Cart Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
