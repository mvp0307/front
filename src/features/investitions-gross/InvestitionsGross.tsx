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
                You can withdraw money every minute or you can choose not to withdraw it from your
                balance and become a <strong> GROSS </strong> investor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestitionsGross;
