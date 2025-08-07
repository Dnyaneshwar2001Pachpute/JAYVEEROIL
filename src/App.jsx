import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import ContactModal from './Components/ContactModal/ContactModal';
import Footer from './Components/Footer/Footer';
import ProductInfo from "./Components/ProductInfo/ProductInfo";
import CompanyInfo from './Components/CompanyInfo/CompanyInfo';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="container">
      <Navbar
        onContactClick={() => {
          setShowModal(true);
          setActivePage('contact');
        }}
        activePage={activePage}
        setActivePage={(page) => {
          setActivePage(page);
          if (page !== 'contact') {
            setShowModal(false);
          }
        }}
      />

      {/* ✅ Render different components based on activePage */}
      {activePage === 'home' && <Hero />}
      {activePage === 'products' && <ProductInfo />}

      {/* ✅ Contact Modal only shows when clicked */}
      {showModal && (
        <ContactModal
          onClose={() => {
            setShowModal(false);
            setActivePage('home');
          }}
        />
      )}
      {activePage === 'company' && <CompanyInfo />}


      {/* ✅ Single Footer only */}
      <Footer
        setActivePage={(page) => {
          setActivePage(page);
          if (page !== 'contact') setShowModal(false);
        }}
        setShowModal={setShowModal}
      />


    </div>
  );
}

export default App;
