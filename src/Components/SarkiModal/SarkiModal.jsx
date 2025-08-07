// src/Components/SarkiModal/SarkiModal.jsx
import React from 'react';
import './SarkiModal.css';

const SarkiModal = ({ sarki, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{sarki.title}</h2>
        <img src={sarki.image} alt={sarki.title} className="modal-img" />
        <p><strong>Overview:</strong> {sarki.overview}</p>
        <p><strong>Quality:</strong> {sarki.quality}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SarkiModal;
