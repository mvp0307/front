import React, { useContext } from 'react';

import MoneyStatisticSvg from '../../assets/svgs/MoneyStatisticSvg';
import StatisticSvg from '../../assets/svgs/StatisticSvg';
import WithDrawSvg from '../../assets/svgs/WithDrawSvg';
import { MainContext } from '../../context/mainContext';
import styles from './investmentState.module.scss';

const InvestmentState = () => {
  const { setModal } = useContext(MainContext);
  return (
    <section className={styles.investmentState}>
      <div className="container">
        <h2 className={styles.investmentTitle}>
          Investment State: <strong>Minor</strong>
        </h2>
        <p className={styles.investmentDate}>
          Start Date: <strong>25.04.1945</strong>
        </p>
        <div className={styles.investmentMainPanel}>
          <div className={styles.investmentRow}>
            <div className={`col_ ${styles.investmentLeft}`}>
              <div className={styles.leftSideContent}>
                <p className={styles.smallTitle}>Total Balance</p>
                <p className={styles.mainPrice}>$ 230</p>
                <p className={styles.dailyRate}>Daily Rate</p>
                <p className={styles.rateTotal}>5 %</p>
              </div>
            </div>
            <div className={`col_ ${styles.investmentRight}`}>
              <div className={styles.rightSideRow}>
                <div className="col_">
                  <div className={styles.rightSideContent}>
                    <div className={styles.innerRow}>
                      <div className={`col_ ${styles.leftLogo}`}>
                        <StatisticSvg />
                      </div>
                      <div className={`col_ ${styles.rightItems}`}>
                        <p className={styles.itemName}>Total Investment</p>
                        <p className={styles.itemTotal}>$ 130</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.rightSideContent}>
                    <div className={styles.innerRow}>
                      <div className={`col_ ${styles.leftLogo}`}>
                        <WithDrawSvg />
                      </div>
                      <div className={`col_ ${styles.rightItems}`}>
                        <p className={styles.itemName}>Withdraw</p>
                        <p className={styles.itemTotal}>$ 0.0</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.rightSideContent}>
                    <div className={styles.innerRow}>
                      <div className={`col_ ${styles.leftLogo}`}>
                        <MoneyStatisticSvg />
                      </div>
                      <div className={`col_ ${styles.rightItems}`}>
                        <p className={styles.itemName}>Total Earnings</p>
                        <p className={styles.itemTotal}>$ 100</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rightSideBottom}>
                <div className={styles.rightSideBottomRow}>
                  <div className="col_">
                    <div className={styles.rightSideBottomContent}>
                      <h3 className={styles.contentTitle}>You Have Invested</h3>
                      <ul className={styles.contentList}>
                        <li>
                          <p>25.04.1945</p>
                          <p>$ 80</p>
                        </li>
                        <li>
                          <p>25.04.1945</p>
                          <p>$ 50</p>
                        </li>
                      </ul>
                      <div className={styles.totalPrice}>
                        <p>Total:</p>
                        <p>$ 130</p>
                      </div>
                      <button onClick={() => setModal('add-money')}>Add</button>
                    </div>
                  </div>
                  <div className="col_">
                    <div className={`${styles.rightSideBottomContent} ${styles.emptyItem}`}>
                      <h3 className={styles.contentTitle}>You Have Withdrawed</h3>

                      <p className={styles.noResultItem}>No Result</p>
                      <button onClick={() => setModal('withdraw-money')}>Widraw</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentState;
