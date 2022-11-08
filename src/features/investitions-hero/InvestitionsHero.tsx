import React from 'react';

import heroImg from '../../assets/images/investitions-images/hero.png';
import LongArrowSvg from '../../assets/svgs/LongArrowSvg';
import styles from './investitionsHero.module.scss';

const InvestitionsHero = () => {
  return (
    <section className={styles.investitionsHeroSection}>
      <div className="container">
        <div className={styles.heroRow}>
          <div className="col_">
            <div className={styles.heroLeft}>
              <div className={styles.titleBlock}>
                <p className="title_prefix">Investment</p>
                <h2 className="title_section">Minor</h2>
              </div>
              <div className={styles.heroTexts}>
                <p>
                  Инвестиция МИНОР вам даст возможность использовать бот крипто-трейдер на
                  минимальном мошносте.
                </p>
                <p>
                  Сумма инвестиции состовляет от <strong>100$ до 300$ включительно.</strong>
                </p>
                <p>
                  Вы гарантированно получите 5% от суммы вашей инвестиции{' '}
                  <strong>ежедневно.</strong>
                </p>
              </div>
              <div className={styles.fromToBlock}>
                <h3>Examples</h3>
                <div className={styles.fromToItem}>
                  <div className={styles.fromToRow}>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.leftSide}`}>
                        <p>Инвестируйте</p>
                        <p className={styles.sideNumber}>$ 150</p>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles.fromToArrow}>
                        <LongArrowSvg />
                      </div>
                    </div>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.rightSide}`}>
                        <p>Получайте</p>
                        <p className={styles.sideNumber}>$ 7.5 Каждый день!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.heroImage}>
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestitionsHero;
