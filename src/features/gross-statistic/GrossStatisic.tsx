import React from 'react';

import styles from './grossStatistic.module.scss';

const GrossStatisic = () => {
  return (
    <section className={styles.grossStatisticSection}>
      <div className="container">
        <h2 className={styles.grossTitle}>Investor / GROSS Investor </h2>
        <div className={styles.grossRow}>
          <div className="col_">
            <div className={styles.grossItem}>
              <div className={styles.grossHeader}>
                <h3 className={styles.smallTitlte}>Investor</h3>
                <p className={styles.subText}>
                  Receives static daily amount depending on the percentage.
                </p>
                <p className={styles.withPercentText}>
                  Interest is calculated from the investment amount{' '}
                </p>
              </div>
              <div className={styles.grossBody}>
                <h3 className={styles.smallTitlte}>Example</h3>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <li>
                      <span>Initial investment </span>
                      <span>$ 1500</span>
                    </li>
                    <li>
                      <span>Percentage</span>
                      <span>8 %</span>
                    </li>
                    <li>
                      <span>Daily amount to receive </span>
                      <span>$ 120</span>
                    </li>
                    <li>
                      <span>Invited Users </span>
                      <span>0</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.listWrapper} ${styles.lastWrapper}`}>
                <h3 className={styles.smallTitlte}>Investment calendar for 5 days </h3>
                <ul className={styles.list}>
                  <li>
                    <span>Day 1</span>
                    <span>$ 120</span>
                  </li>
                  <li>
                    <span>Day 2</span>
                    <span>$ 240</span>
                  </li>
                  <li>
                    <span>Day 3</span>
                    <span>$ 360</span>
                  </li>
                  <li>
                    <span>Day 4</span>
                    <span>$ 480</span>
                  </li>
                  <li>
                    <span>Day 5</span>
                    <span>$ 600</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.grossItem}>
              <div className={styles.grossHeader}>
                <h3 className={styles.smallTitlte}>GROSS Investor</h3>
                <p className={styles.subText}>
                  Getting daily dynamic amount on the next day is always more than on the previous
                  one.
                </p>
                <p className={styles.withPercentText}>
                  Interest is static <span className={styles.percentItem}>8 %</span>
                </p>
                <div className={styles.subTextWrapper}>
                  <p className={styles.withPercentText}>
                    Percentage is calculated from
                    <p className={styles.subText}>BALANCE AMOUNT + TOTAL INVESTMENT AMOUNT</p>
                  </p>
                </div>
              </div>
              <div className={styles.grossBody}>
                <h3 className={styles.smallTitlte}>Example</h3>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <li>
                      <span>Initial investment</span>
                      <span>$ 10.000</span>
                    </li>
                    <li>
                      <span>Daily fixed percentage </span>
                      <span>8 %</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.listWrapper} ${styles.lastWrapper}`}>
                <h3 className={styles.smallTitlte}>Investment calendar for 5 days</h3>
                <ul className={styles.list}>
                  <li>
                    <span>Day 1</span>
                    <span>15,000$ + 1200$ = 16.200$</span>
                  </li>
                  <li>
                    <span>Day 2</span>
                    <span>16.200$ + 1296$ = 17.496$</span>
                  </li>
                  <li>
                    <span>Day 3</span>
                    <span>16.200$ + 1296$ = 17.496$</span>
                  </li>
                  <li>
                    <span>Day 4</span>
                    <span>16.200$ + 1296$ = 17.496$</span>
                  </li>
                  <li>
                    <span>Day 5</span>
                    <span>20.407$ + 1632$ = 22.039$</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrossStatisic;
