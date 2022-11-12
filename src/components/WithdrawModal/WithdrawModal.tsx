import React from 'react';

import styles from './withdrawModal.module.scss';

const WithdrawModal: React.FC = () => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>Withdraw</h2>
        <div className={styles.modalInvestItems}>
          <>
            <div className={styles.numbersWrapper}>
              <span>Amount</span>
              <p>
                Balance: <strong>$1500</strong>
              </p>
            </div>
            <div className={styles.inputWrapper}>
              <span className={styles.dolarIcon}>$</span>
              <input type="text" className={styles.amountInput} />
              <button className={styles.maxButton}>MAX</button>
            </div>
            <div className={styles.numbersWrapperBottom}>
              <span>230$</span>
              <p>
                Daily Income: <span>5%</span>
              </p>
            </div>
          </>
        </div>

        <p className={styles.infoText}>
          Инвестируйти еше <span className={styles.greenInfo}>$ 61</span> чтоб повысить ежедневний
          процент до <span className={styles.orangeInfo}>8%</span>
        </p>
        <button className="d_modal_primaryBtn">Инвестиорвать</button>
      </div>
    </div>
  );
};
export default WithdrawModal;
