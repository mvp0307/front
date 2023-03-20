import React, { useContext } from 'react';

import RejectedIconSvg from '../../assets/svgs/RejectedIconSvg';
import { MainContext } from '../../context/mainContext';
import styles from './errorModal.module.scss';

const AuthError: React.FC = () => {
  const { setModal } = useContext(MainContext);
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>Technical error</h2>
        <div className={styles.modaltext}>
          <p>
            Our development team has already dealt with the problem, soon you will be able to verify
            your account
          </p>
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

export default AuthError;
