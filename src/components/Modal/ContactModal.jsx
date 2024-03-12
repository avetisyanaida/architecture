import React from 'react';
import './modal.css';
import AllForm from '../Form/Form';

const ContactModal = ({ isOpen, onClose }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal">
        <button className="modal-btn" onClick={onClose}>
          x
        </button>
        <AllForm/>
      </div>
    </div>
  );
};

export default ContactModal;
