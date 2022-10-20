import React from 'react';

import heroImg from '../../assets/images/hero-section/hero-img.png';
import styles from './heroSection.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroRow}>
          <div className="col_">
            <div className={styles.heroLeftSide}>
              <h1 className={styles.heroTitle}>
                Бот Крипто Трейдер Стабильный Процент и <p>Ежедневний Доход</p>
              </h1>
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
