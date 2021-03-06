import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');



function Modal ({ src, alt, onClose }) {

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose(null, null);
    }
  };
 const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose(null, null);
    }
  };
 
    return createPortal(
      <div className={s.Overlay} onClick={handleBackdropClick}>
        <div className={s.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
  Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  export default Modal;