import React from "react";
import "./footer.css";
import phone_icon1 from '../../assets/phone_icon.png';
import gmail_icon1 from '../../assets/gmail_icon1.png';
import message_icon1 from '../../assets/message_icon1.png';
import logo from '../../assets/logo1.png';
import map_icon from '../../assets/map_icon.png';

const Footer = ({ setActivePage, setShowModal }) => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ✅ Contact & Logo Section */}
        <div className="footer-section contact">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>
            <img src={phone_icon1} alt="Phone Icon" className="footer-icon" />
            <strong>Phone:</strong>
            <a href="tel:+917875419861" className="footer-link">+91 7875419861</a>
          </p>
          <p>
            <img src={message_icon1} alt="Message Icon" className="footer-icon" />
            <strong>Message:</strong>
            <a href="sms:+917875419861" className="footer-link">+91 7875419861</a>
          </p>
          <p>
            <img src={gmail_icon1} alt="Gmail Icon" className="footer-icon" />
            <strong>Email:</strong>
            <a href="mailto:JayVeer@gmail.com" className="footer-link">JayVeer@gmail.com</a>
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* ✅ Navigation Links */}
        <div className="footer-section">
          <h3>Explore</h3>
          <p onClick={() => setActivePage('home')} className="footer-link">Home</p>
          <p onClick={() => {
            setActivePage('contact');
            setShowModal(true);
          }} className="footer-link">Contact Us</p>
          <p onClick={() => setActivePage('products')} className="footer-link">Product Information</p>
          <p className="footer-link">Company Information</p>
        </div>

        {/* ✅ Company Address */}
        <div className="footer-section">
          <h3>
            <img src={map_icon} alt="Map Icon" className="map-pin-icon" />
            JayVeer Oil Industry
          </h3>
          <p>Pandharwadi Phata, Tal. Patoda</p>
          <p>Dist. Beed, Ahilyanagar – Beed Hwy</p>
          <p>Maharashtra 413207</p>
        </div>

        {/* ✅ Get Directions Map */}
        <div className="footer-section">
          <h3>
            <img src={map_icon} alt="Map Icon" className="map-pin-icon" />
            Get Directions
          </h3>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Pandharwadi+Phata,+Beed,+Maharashtra+413207"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=Pandharwadi+Phata+Beed+Maharashtra&zoom=15&size=600x300&markers=color:red%7Clabel:J%7CPandharwadi+Phata+Beed+Maharashtra"
              alt="JayVeer Oil Industry Location Map"
              className="footer-map"
            />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 <strong>JayVeer Oil Industry</strong>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
