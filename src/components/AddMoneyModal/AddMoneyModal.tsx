import React from 'react';

import WarningIcon from '../../assets/svgs/WarningIcon';
import styles from './addMoneyModal.module.scss';

const AddMoneyModal: React.FC = () => {
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>Add Money</h2>
        <p className={styles.warningMessage}>
          <WarningIcon /> Pls enter your amount
        </p>
        <div className={styles.modalInvestItems}>
          <h3 className={styles.itemsTitle}>Your Invest </h3>
          <>
            <div className={styles.itemsWrap}>
              <div className={styles.item}>
                <input type="radio" name="modal_radios" id="modal_item-1" />
                <label htmlFor="modal_item-1">$ 100</label>
              </div>
              <div className={styles.item}>
                <input type="radio" name="modal_radios" id="modal_item-2" />
                <label htmlFor="modal_item-2">$ 300</label>
              </div>
              <div className={styles.item}>
                <input type="radio" name="modal_radios" id="modal_item-3" />
                <label htmlFor="modal_item-3">$ 500</label>
              </div>
              <div className={styles.item}>
                <input type="radio" name="modal_radios" id="modal_item-4" />
                <label htmlFor="modal_item-4">$ 1000</label>
              </div>
            </div>
            <input type="text" className={styles.amountInput} />
          </>
        </div>
        <div className={styles.numbersWrapper}>
          <span>230$</span>
          <p>
            Daily Income: <span>5%</span>
          </p>
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

export default AddMoneyModal;
