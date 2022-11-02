import React from 'react';

import gronssImage from '../../assets/images/investitions-images/gross.png';
import styles from './investitionsGross.module.scss';

const InvestitionsGross = () => {
  return (
    <section className={styles.investitionsGrossSection}>
      <div className="container">
        <div className={styles.grossRow}>
          <div className="col_">
            <div className={styles.grossImage}>
              <img src={gronssImage} alt="" />
            </div>
          </div>
          <div className="col_">
            <div className={styles.grossTexts}>
              <h2 className={styles.grossTitle}>Become a Gross</h2>
              <p className={styles.grossText}>
                У вас будет возможность вывода средст в каждую минуту, или же вы можете не снимать
                деньги с баланса и стать <strong>ГРОСС</strong> инвестором.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestitionsGross;
