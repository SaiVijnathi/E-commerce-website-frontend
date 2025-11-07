import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>ONLINE SHOPPING</h4>
        <ul>
          <li>Kurthis</li>
          <li>Jeans</li>
          <li>T-shirts</li>
          <li>Lehangas</li>
          <li>Night dresses</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>CUSTOMER POLICIES</h4>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>T&C</li>
          <li>Terms Of Use</li>
          <li>Track Orders</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>KEEP IN TOUCH</h4>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      <div className="footer-section">
        <div className="guarantee" style={{paddingTop : "10px"}}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png"
            alt="Original Guarantee"
          />
          <p>
            <strong>100% ORIGINAL</strong> guarantee for all products
          </p>
        </div>

        <div className="return">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3524/3524659.png"
            alt="Return Icon"
          />
          <p>
            <strong>Return within 14 days</strong> of receiving your order
          </p>
        </div>
      </div>
    </footer>
  );
};
