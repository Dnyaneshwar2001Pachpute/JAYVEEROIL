import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';
import cowImage from '../../assets/background.jpg';
import sarki1 from '../../assets/sarki1.jpg';
import sarki2 from '../../assets/sarki2.jpg';
import sarki3 from '../../assets/sarki3.jpg';
import callIcon from '../../assets/call_icon_green.png'; // ✅ correct import
import mapIcon from '../../assets/map_icon.png'; // ✅ Map icon


const captions = [
  {
    en: { title: "JayVeer Sarki Khamgaon Quality 1", desc: "High-protein cattle feed made from selected cottonseed for better milk yield." },
    hi: { title: "जयवीर सरकी खामगांव गुणवत्ता 1", desc: "बेहतर दूध उत्पादन के लिए चयनित कपास बीज से बनी उच्च प्रोटीन पशु आहार।" },
    mr: { title: "जयवीर सरकी खामगांव गुणवत्ता 1", desc: "चांगल्या दूध उत्पादनासाठी निवडक कापसाच्या बियाण्यांपासून बनवलेला उच्च प्रथिने पशुखाद्य." },
    quality: "best",
  },
  {
    en: { title: "JayVeer Sarki Khamgaon Quality 2", desc: "High-protein cattle feed made from selected cottonseed for better milk yield." },
    hi: { title: "जयवीर सरकी खामगांव गुणवत्ता 2", desc: "बेहतर दूध उत्पादन के लिए चयनित कपास बीज से बनी उच्च प्रोटीन पशु आहार।" },
    mr: { title: "जयवीर सरकी खामगांव गुणवत्ता 2", desc: "चांगल्या दूध उत्पादनासाठी निवडक कापसाच्या बियाण्यांपासून बनवलेला उच्च प्रथिने पशुखाद्य." },
  },
  {
    en: { title: "JayVeer Sarki Khamgaon Quality 3", desc: "Premium quality feed ideal for all types of cattle and dairy animals." },
    hi: { title: "जयवीर सरकी खामगांव गुणवत्ता 3", desc: "सभी प्रकार के मवेशियों और डेयरी पशुओं के लिए आदर्श प्रीमियम गुणवत्ता वाला चारा।" },
    mr: { title: "जयवीर सरकी खामगांव गुणवत्ता 3", desc: "सर्व प्रकारच्या जनावरांसाठी आणि डेअरी जनावरांसाठी आदर्श दर्जेदार चारा." },
  },
];

const images = [sarki1, sarki2, sarki3];

const Hero = () => {
  const [lang, setLang] = useState("en");

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${cowImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <div className="hero-text">
        <h1>
          <TypeAnimation
            sequence={[
              'Welcome To JAYVEER Oil  Industries...',
              2000,
              'Best Sarki 100% Quality Khamgaon...',
              2000
            ]}
            speed={30}
            repeat={Infinity}
            wrapper="span"
          />
        </h1>

        {/* Language Switch Buttons */}
        <div className="language-buttons" style={{ marginBottom: '30px' }}>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("hi")}>हिंदी</button>
          <button onClick={() => setLang("mr")}>मराठी</button>
        </div>
<a href="tel:+917875419861" className="call-now-box">
  <img src={callIcon} alt="Call Icon" className="call-icon" />
  Call Now
</a>

      {/* 🗺️ Get Directions Button */}
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=Pandharwadi+Phata,+Beed,+Maharashtra+413207"
        target="_blank"
        rel="noopener noreferrer"
        className="call-now-box"
      >
        <img src={mapIcon} alt="Map Icon" className="call-icon" />
        Get Directions
      </a>


        {/* Programs Section */}
        <div className="programs">
          {images.map((img, index) => (
            <div className="program" key={index} style={{ position: 'relative' }}>
              {/* ✅ Best Quality Badge only for first item */}
              {captions[index]?.quality === "best" && (
                <div className="best-badge">⭐ Best Quality</div>
              )}
              <img src={img} alt={`Sarki ${index + 1}`} />
              <div className="caption">
                <p><strong>{captions[index][lang].title}</strong></p>
                <p>{captions[index][lang].desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
