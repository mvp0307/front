import React from 'react';

import styles from './howToBuyEthModal.module.scss';

const HowToBuyEthModal: React.FC = () => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>How to buy ETH ?</h2>
        <div className={styles.watchItems}>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>Как пополнить кошелек metamask ETH</h4>
            <a href="#" className={styles.watchButton}>
              Watch Video
            </a>
          </div>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>Телеграм боты для пукупки ETH</h4>
            <a href="#" className={styles.watchButton}>
              Show More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowToBuyEthModal;
