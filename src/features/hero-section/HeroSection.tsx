import React, { useContext } from 'react';

import heroImg from '../../assets/images/hero-section/hero-img.png';
import heroImgMobile from '../../assets/images/hero-section/hero-img-mobile.png';
import MetamaskSvg from '../../assets/svgs/MetamaskSvg';
import { SCREENS } from '../../constants/screens';
import { Web3Context } from '../../context/web3Context';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './heroSection.module.scss';

const HeroSection = () => {
  const { user } = useContext(Web3Context);
  const isMobile = useMediaQuery(SCREENS.mobile);
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
            <img src={!isMobile ? heroImg : heroImgMobile} alt="Hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
