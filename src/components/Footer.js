import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './../styles/footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3 className="footer__heading">Contact Us</h3>
          <p className="footer__text">123 Main Street</p>
          <p className="footer__text"> Yerevan 12345</p>
          <p className="footer__text">Email: info@example.com</p>
          <p className="footer__text">Phone: 010 123-456</p>
        </div>
        <div className="footer__section">
          <h3 className="footer__heading">Follow Us</h3>
          <div className="footer__social-icons">
            <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare size={32} color="blue" />
            </a>
            <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={32} color = 'red' />
            </a>
          </div>
        </div>
        <div className="footer__section">
          <h3 className="footer__heading">Links</h3>
          <ul className="footer__links">
            <li>
              <Link to="/" className="footer__link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="footer__link">About</Link>
            </li>
            <li>
              <Link to="/products" className="footer__link">Products</Link>
            </li>
            <li>
              <Link to="/contact" className="footer__link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
