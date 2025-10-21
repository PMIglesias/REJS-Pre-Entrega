import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__columns">
        <div>
          <h4>Customer Service</h4>
          <ul>
            <li>Contact</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h4>About Us</h4>
          <ul>
            <li>Our Story</li>
            <li>Stores</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="footer__social">
            <img src="/icons/facebook.svg" alt="fb" />
            <img src="/icons/instagram.svg" alt="ig" />
            <img src="/icons/youtube.svg" alt="yt" />
          </div>
        </div>
      </div>
      <p className="footer__copy">© 2025 Shoepassion Clone</p>
    </footer>
  );
}
