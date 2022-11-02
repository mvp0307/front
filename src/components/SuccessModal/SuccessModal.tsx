import React from 'react';

import SuccessIconSvg from '../../assets/svgs/SuccessIconSvg';
import styles from './successModal.module.scss';

const SuccessModal: React.FC = () => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>Investment Confirmed</h2>
        <div className={styles.modaltext}>
          <p>Investment successfully confirmed</p>
        </div>
        <div className={styles.modalIcon}>
          <SuccessIconSvg />
        </div>
        <div className={styles.modalBtn}>
          <button className={styles.outlineBtn} type="button">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
