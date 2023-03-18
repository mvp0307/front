import React from 'react';

import styles from './createWalletModal.module.scss';

export const CreateWalletModal: React.FC = () => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>How to open MetaMask wallet</h2>
        <div className={styles.watchItems}>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>How to open MetaMask wallet</h4>
            <a
              href="https://www.youtube.com/watch?v=Af_lQ1zUnoM"
              target="_blank"
              className={styles.watchButton}
              rel="noreferrer"
            >
              Watch the video
            </a>
          </div>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>Instructions for opening a wallet</h4>
            <a
              href="https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-started-with-MetaMask"
              target="_blank"
              className={styles.watchButton}
              rel="noreferrer"
            >
              Instruction
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWalletModal;
