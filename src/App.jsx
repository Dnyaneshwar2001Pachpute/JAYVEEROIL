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
      {/* ✅ Only show Navbar when Contact is NOT active */}
      {activePage !== 'contact' && (
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
      )}

      {/* ✅ Render pages */}
      {activePage === 'home' && <Hero />}
      {activePage === 'products' && <ProductInfo />}
      {activePage === 'company' && <CompanyInfo />}

      {/* ✅ Show Contact Modal when active */}
      {showModal && activePage === 'contact' && (
        <ContactModal
          onClose={() => {
            setShowModal(false);
            setActivePage('home'); // return to home after closing
          }}
        />
      )}

      {/* ✅ Only show footer if not in contact modal */}
      {activePage !== 'contact' && (
        <Footer
          setActivePage={(page) => {
            setActivePage(page);
            if (page !== 'contact') setShowModal(false);
          }}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default App;
