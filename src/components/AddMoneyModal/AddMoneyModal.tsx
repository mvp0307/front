import React, { useContext, useMemo, useState } from 'react';

import WarningIcon from '../../assets/svgs/WarningIcon';
import { MainContext } from '../../context/mainContext';
import styles from './addMoneyModal.module.scss';
import { checkMoney } from './checkMoney';

const AddMoneyModal: React.FC = () => {
  const [investMoney, setInvestMoney] = useState('');
  const [error, setError] = useState<boolean>(false);
  const [price, setPrice] = useState('');
  const { setModal } = useContext(MainContext);
  const handalChange = (e: any) => {
    setInvestMoney(e.target.value);
    setPrice(e.target.value);
  };
  const handelInputValue = (e: any, number?: string) => {
    if (number) {
      setInvestMoney(number);
      setPrice(number);
    }
  };
  const properties = useMemo(() => {
    return checkMoney(investMoney);
  }, [investMoney]);
  // console.log(properties);
  return (
    <div className={styles.modalContent}>
      <div className={styles.modalBody}>
        <h2 className={styles.modalTitle}>Add Money</h2>
        {error && (
          <p className={styles.warningMessage}>
            <WarningIcon /> Please enter your amount
          </p>
        )}
        <div className={styles.modalInvestItems}>
          <h3 className={styles.itemsTitle}>Your Invest </h3>
          <>
            <div className={styles.itemsWrap}>
              <div className={styles.item}>
                <input type="radio" name="modal_radios" id="modal_item-1" />
                <label htmlFor="modal_item-1" onClick={(e) => handelInputValue(e, '100')}>
                  $ 100
                </label>
              </div>
              <div className={styles.item}>
                <input type="radio" name="modal_radios" id="modal_item-2" />
                <label
                  htmlFor="modal_item-2"
                  onClick={(e) => {
                    handelInputValue(e, '300');
                  }}
                >
                  $ 300
                </label>
              </div>
              <div className={styles.item}>
                <input type="radio" name="modal_radios" id="modal_item-3" />
                <label htmlFor="modal_item-3" onClick={(e) => handelInputValue(e, '500')}>
                  $ 500
                </label>
              </div>
              <div className={styles.item}>
                <input type="radio" name="modal_radios" id="modal_item-4" />
                <label htmlFor="modal_item-4" onClick={(e) => handelInputValue(e, '1000')}>
                  $ 1000
                </label>
              </div>
            </div>
            <input
              type="number"
              value={price}
              className={styles.amountInput}
              onChange={handalChange}
            />
          </>
        </div>
        {properties && properties.dailyIncome > 0 && (
          <div className={styles.numbersWrapper}>
            <p>
              Daily Income:{' '}
              <span>
                {properties.dailyIncome}% - {properties.dailyRate.toFixed(2)}${' '}
              </span>
            </p>
          </div>
        )}
        <p className={styles.infoText}>
          {properties && properties.remainderPrice > 0 && (
            <div>
              Инвестируйти еше
              <span className={styles.greenInfo}> {properties.remainderPrice}$ </span>
              чтоб повысить ежедневний процент до{' '}
              <span className={styles.orangeInfo}>{properties.needDailyRate}%</span>
            </div>
          )}{' '}
        </p>
        <button
          className="d_modal_primaryBtn"
          onClick={() => {
            if (!investMoney) {
              setError(true);
            } else {
              setError(false);
              setModal('error');
            }
          }}
        >
          Invest money
        </button>
      </div>
    </div>
  );
};

export default AddMoneyModal;
