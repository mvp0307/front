import React, { useContext } from 'react';

import heroImg from '../../assets/images/hero-section/hero-img.png';
import MetamaskSvg from '../../assets/svgs/MetamaskSvg';
import { Web3Context } from '../../context/web3Context';
import styles from './heroSection.module.scss';

const HeroSection = () => {
  const { user } = useContext(Web3Context);
  const simulateConnectButton = () => {
    const connectButton = document.getElementById('connect_button');
    if (connectButton) {
      connectButton.click();
    }
  };
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroRow}>
          <div className="col_">
            <div className={styles.heroLeftSide}>
              <h1 className={styles.heroTitle}>
                Бот Крипто Трейдер Стабильный Процент и <p>Ежедневний Доход</p>
              </h1>
              {!user && (
                <button className={styles.heroBtn} onClick={simulateConnectButton}>
                  <MetamaskSvg /> CONNECT METAMSK
                </button>
              )}
            </div>
          </div>
          <div className="col_">
            <img src={heroImg} alt="Hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
