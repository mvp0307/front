import React from 'react';

import styles from './howToBuyEthModal.module.scss';

const HowToBuyEthModal: React.FC = () => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>Как купить ETH ?</h2>
        <div className={styles.watchItems}>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>Как пополнить кошелек metamask ETH</h4>
            <a
              href="https://www.youtube.com/watch?v=HkNU1x8bUZM"
              target="_blank"
              className={styles.watchButton}
              rel="noreferrer"
            >
              Подробнее
            </a>
          </div>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>Как купить (Ethereum, ETH) с КАРТЫ?</h4>
            <a
              href="https://www.youtube.com/watch?v=ra4KBCRzvSY"
              target="_blank"
              className={styles.watchButton}
              rel="noreferrer"
            >
              Подробнее
            </a>
          </div>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>Мониторинг обменников BestChange</h4>
            <a
              href="https://www.bestchange.ru/mir-to-ethereum.html"
              target="_blank"
              className={styles.watchButton}
              rel="noreferrer"
            >
              Подробнее
            </a>
          </div>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>Инструкция покупки через BestChange</h4>
            <a
              href="https://aivia.io/blog/ru/kak-kupit-eth/"
              target="_blank"
              className={styles.watchButton}
              rel="noreferrer"
            >
              Подробнее
            </a>
          </div>
          <div className={styles.watchItem}>
            <h4 className={styles.itemTitle}>Телеграмм боты для пукупки ETH</h4>
            <a
              href="https://profinvestment.com/telegram-bots-bitcoin-cryptocurrencies/"
              target="_blank"
              className={styles.watchButton}
              rel="noreferrer"
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowToBuyEthModal;
