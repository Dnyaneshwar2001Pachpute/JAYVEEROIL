import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo1.png';

const translations = {
  en: {
    home: 'Home',
    contact: 'Contact',
    products: 'Product Information',
    company: 'Company Information',
  },
  hi: {
    home: 'होम',
    contact: 'संपर्क करें',
    products: 'उत्पाद जानकारी',
    company: 'कंपनी की जानकारी',
  },
  mr: {
    home: 'मुख्यपृष्ठ',
    contact: 'संपर्क',
    products: 'उत्पादन माहिती',
    company: 'कंपनी माहिती',
  },
};

const Navbar = ({ onContactClick, activePage, setActivePage }) => {
  const [lang, setLang] = useState('en');

  return (
    <nav className="container">
      <img src={logo} alt="logo" className="logo" />

      <ul>
        <li>
          <button
            className={`nav-button ${activePage === 'home' ? 'active' : ''}`}
            onClick={() => setActivePage('home')}
          >
            {translations[lang].home}
          </button>
        </li>
        <li>
          <button
            className={`nav-button ${activePage === 'contact' ? 'active' : ''}`}
            onClick={onContactClick}
          >
            {translations[lang].contact}
          </button>
        </li>
        <li>
          <button
            className={`nav-button ${activePage === 'products' ? 'active' : ''}`}
            onClick={() => setActivePage('products')}
          >
            {translations[lang].products}
          </button>
        </li>
        <li>
          <button
            className={`nav-button ${activePage === 'company' ? 'active' : ''}`}
            onClick={() => setActivePage('company')}
          >
            {translations[lang].company}
          </button>
        </li>
      </ul>

      <div className="lang-switch">
        <button onClick={() => setLang('en')}>EN</button>
        <button onClick={() => setLang('hi')}>हिंदी</button>
        <button onClick={() => setLang('mr')}>मराठी</button>
      </div>
    </nav>
  );
};

export default Navbar;
