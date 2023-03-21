import React, { useContext } from 'react';

import SuccessIconSvg from '../../assets/svgs/SuccessIconSvg';
import { MainContext } from '../../context/mainContext';
import styles from './successModal.module.scss';

const SuccessModal: React.FC = () => {
  const { setModal } = useContext(MainContext);

  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>Your request has been sent</h2>
        <div className={styles.modaltext}>
          <p>Our support team will contact you shortly</p>
        </div>
        <div className={styles.modalIcon}>
          <SuccessIconSvg />
        </div>
        <div className={styles.modalBtn}>
          <button className={styles.outlineBtn} type="button" onClick={() => setModal('')}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
