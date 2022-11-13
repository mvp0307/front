import React from 'react';

import AwardSvg from '../../assets/svgs/AwardSvg';
import styles from './grossLine.module.scss';

const GrossLine = () => {
  const mock = 100;
  return (
    <section className={styles.grossLineSection}>
      <div className="container">
        <div className={styles.grosslineItem}>
          <h2 className={styles.grossLineTitle}>Gross Line</h2>
          <p className={styles.grossLineSubTitle}>Earn $ 10.000 + and become a gross</p>
          <div className={styles.lineWrap}>
            <AwardSvg />
            <div
              className={`${styles.lineItem} ${styles.leftFill} ${
                mock === 100 ? styles.bothFill : ''
              }`}
            >
              <div className={styles.lineFill} style={{ width: `${mock}%` }}>
                {mock < 80 && (
                  <div className={styles.linePrice}>
                    <p>$230</p>
                  </div>
                )}
              </div>
            </div>
            <p>$ 10.000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrossLine;
