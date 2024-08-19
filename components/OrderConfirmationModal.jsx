import React from 'react'
import styles from '../styles/Modal.module.css'; 
const OrderConfirmationModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {children}
      </div>
    </div>  
    )
}

export default OrderConfirmationModal