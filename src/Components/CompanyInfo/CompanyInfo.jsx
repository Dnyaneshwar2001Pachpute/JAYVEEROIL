import React from 'react';
import './CompanyInfo.css';
import mealPhoto from '../../assets/meal_photo1.jpeg'; // adjust path if needed

const CompanyInfo = () => {
  return (
    <div className="company-info-page-split">
      {/* LEFT: Company Info */}
      <div className="company-info-content">
        <h1>Company Information</h1>
        <h2>JayVeer Oil Industry Beed</h2>

        <p className="company-description">
          JayVeer Oil Industry has been proudly serving farmers for over <strong>5 years</strong>.
          We specialize in high-quality Khamgaon sarki products that help <strong>increase animal milk production</strong>.
          Our feed is ideal for <strong>cows, buffaloes, bulls, goats, and even horses</strong>.
          Known for its <strong>rich protein and oil content</strong>, our product ensures better health and productivity of your cattle.
        </p>

        <div className="info-card">
          <h3>👨‍💼 Company Owner: Rajindra Pachpute</h3>
          <a className="call-btn" href="tel:+917875419861">📞 Call Now</a>
        </div>

        <div className="info-card">
          <h3>📈 Sales Manager: Sharad Pachpute</h3>
          <a className="call-btn" href="tel:+917066948994">📞 Call Now</a>
        </div>

        <div className="info-card">
          <h3>🚛 Supplier Manager: Bhikaji Pachpute</h3>
          <a className="call-btn" href="tel:+919763125516">📞 Call Now</a>
        </div>
      </div>

      {/* RIGHT: Google Map */}
      <div className="company-map">
          <h2 className="map-heading">🗺️ Find the Best Route</h2> {/* 🟨 Add this line */}
        <iframe
          title="JayVeer Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.642945979593!2d75.75893617496394!3d18.501116469156997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd022a66b56b52b%3A0x8a92b9e7e0dc6cb7!2sPandharwadi%20Phata%2C%20Beed%2C%20Maharashtra%20413207!5e0!3m2!1sen!2sin!4v1690375429701!5m2!1sen!2sin"
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <a
          className="get-direction-btn"
          href="https://www.google.com/maps/dir/?api=1&destination=Pandharwadi+Phata,+Beed,+Maharashtra+413207"
          target="_blank"
          rel="noopener noreferrer"
        >
          🗺️ Get Directions
        </a>

         {/* ✅ Add Company Image */}
      <div className="company-image-wrapper">
        <img src={mealPhoto} alt="JayVeer Oil Meal" className="company-image" />
      </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
