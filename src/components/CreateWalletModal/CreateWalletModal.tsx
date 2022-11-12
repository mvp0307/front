import React from 'react';

import styles from './createWalletModal.module.scss';

export const CreateWalletModal: React.FC = () => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>How to create a wallet ?</h2>
        <div className={styles.watchItems}>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>How to crate Metamask account</h4>
            <a href="#" className={styles.watchButton}>
              Watch Video
            </a>
          </div>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>Open Wallet</h4>
            <a href="#" className={styles.watchButton}>
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWalletModal;
