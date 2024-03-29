import React, { useContext } from 'react';

import RejectedIconSvg from '../../assets/svgs/RejectedIconSvg';
import { MainContext } from '../../context/mainContext';
import styles from './errorModal.module.scss';

const ErrorModal: React.FC = () => {
  const { setModal } = useContext(MainContext);
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>Verification Error</h2>
        <div className={styles.modaltext}>
          <p>Your account is not verified, please verify email address in settings</p>
        </div>
        <div className={styles.modalIcon}>
          <RejectedIconSvg />
        </div>
        <div className={styles.modalBtn}>
          <button className={styles.outlineBtn} type="button" onClick={() => setModal('')}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
