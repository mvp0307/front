import React from 'react';

import heroImg from '../../assets/images/investitions-images/hero.png';
import LongArrowSvg from '../../assets/svgs/LongArrowSvg';
import styles from './investitionsHero.module.scss';

interface IProps {
  value: Record<string, string>;
}

const InvestitionsHero: React.FC<IProps> = ({ value }) => {
  return (
    <section className={styles.investitionsHeroSection}>
      <div className="container">
        <div className={styles.heroRow}>
          <div className="col_">
            <div className={styles.heroLeft}>
              <div className={styles.titleBlock}>
                <p className="title_prefix">Investment</p>
                <h2 className="title_section">{value.title}</h2>
              </div>
              <div className={styles.heroTexts}>
                <p>{value.text}</p>
                <p>
                  The investment amount is from <strong>{value.value}</strong>
                </p>
                <p>
                  {value.guarantie} <strong>daily investment.</strong>
                </p>
              </div>
              <div className={styles.fromToBlock}>
                <h3>Examples</h3>
                <div className={styles.fromToItem}>
                  <div className={styles.fromToRow}>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.leftSide}`}>
                        <p>Invest</p>
                        <p className={styles.sideNumber}>$ {value.invest}</p>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles.fromToArrow}>
                        <LongArrowSvg />
                      </div>
                    </div>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.rightSide}`}>
                        <p>Get</p>
                        <p className={styles.sideNumber}>$ {value.get} Every day!</p>
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
