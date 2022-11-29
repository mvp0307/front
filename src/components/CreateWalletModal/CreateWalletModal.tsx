import React from 'react';

import styles from './createWalletModal.module.scss';

export const CreateWalletModal: React.FC = () => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>Как открыть кошельек MetaMask</h2>
        <div className={styles.watchItems}>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>Как открыть кошельек MetaMask</h4>
            <a
              href="https://www.youtube.com/watch?v=8Wi-dOCfrTg"
              target="_blank"
              className={styles.watchButton}
              rel="noreferrer"
            >
              Смотреть видео
            </a>
          </div>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>Инструкция открытия кошелька</h4>
            <a
              href="https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-started-with-MetaMask"
              target="_blank"
              className={styles.watchButton}
              rel="noreferrer"
            >
              Инструкция
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWalletModal;
