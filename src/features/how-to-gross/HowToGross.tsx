import React from 'react';

import howToGross from '../../assets/images/how-to-gross/how-to-gross.png';
import styles from './howToGross.module.scss';

const HowToGross = () => {
  return (
    <section className={styles.howToGrossSection}>
      <div className="container">
        <div className={styles.howToGrossRow}>
          <div className="col_">
            <div className={styles.grossLeftBlock}>
              <div className={styles.titleBlock}>
                <p className="title_prefix">Investment</p>
                <h2 className="title_section">How to become Gross?</h2>
              </div>
              <p className={styles.howtoGrossText}>
                Investor receives GROSS status if the total investment amount is more than 10,000$.
                Once you have the required amount of money on your balance, you will automatically
                receive GROSS status and the mechanism of calculation daily percentage will be
                changed.
              </p>
            </div>
          </div>
          <div className="col_">
            <div className={styles.heroImage}>
              <img src={howToGross} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGross;
