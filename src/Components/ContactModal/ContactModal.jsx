import React from 'react';
import './ContactModal.css'; // Optional: create this file for styling
import call_icon from '../../assets/call_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'
import message_icon from '../../assets/message_icon.png'
import Gmail_icon from '../../assets/Gmail_icon.png'

const ContactModal = ({ onClose }) => {
  return (
    <div className="contact-overlay">
      <div className="contact-box">
        <h2>Contact </h2>
       
      <div className="contact-button-group">
  <a href="tel:+917875419861" className="call-now-box vibrate">
    <img src={call_icon} alt="Call Icon" className="call-icon" />
    Call Now
  </a>

  <a href="https://wa.me/917875419861" target="_blank" rel="noopener noreferrer" className="call-now-box vibrate">
    <img src={whatsapp_icon} alt="WhatsApp Icon" className="call-icon" />
    WhatsApp
  </a>

  <a href="sms:+917875419861" className="call-now-box vibrate">
    <img src={message_icon} alt="Message Icon" className="call-icon" />
    Message
  </a>

  <a href="mailto:JayVeer@Gmail.com" className="call-now-box vibrate">
    <img src={Gmail_icon} alt="Gmail Icon" className="call-icon" />
    Gmail
  </a>
</div>


        <button onClick={onClose} className="close-btn">Close</button>
      </div>
    </div>
  );
};

export default ContactModal;
