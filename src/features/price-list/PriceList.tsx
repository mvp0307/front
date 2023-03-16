import React from 'react';

import styles from './priceList.module.scss';

const PriceList = () => {
  return (
    <section className={styles.priceListSectin}>
      <div className="container">
        <div className={styles.titleBlock}>
          <p className="title_prefix">You Haven’t Investments</p>
          {/* <h2 className="title_section">Invest Money And Earn % </h2> */}
        </div>
        <div className={styles.pricelistRow}>
          <div className="col_">
            <div className={styles.pricelistItem}>
              <h2 className={styles.itemTitle}>Minor</h2>
              <p className={styles.itemPrice}>$ 100 ~ $ 300</p>
              <ul className={styles.percentList}>
                <li>
                  <span>Daily Profit:</span>
                  <span> 5 %</span>
                </li>
                <li>
                  <span>Invite User:</span>
                  <span> + 1 %</span>
                </li>
              </ul>
              <div className={styles.itemButtons}>
                <button className={styles.outlinedButton}>Show More</button>
                <button className={styles.filledButton}>Buy</button>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={`${styles.pricelistItem} ${styles.pricelistItemSelected}`}>
              <h2 className={styles.itemTitle}>Minor</h2>
              <p className={styles.itemPrice}>$ 100 ~ $ 300</p>
              <ul className={styles.percentList}>
                <li>
                  <span>Daily Profit:</span>
                  <span> 5 %</span>
                </li>
                <li>
                  <span>Invite User:</span>
                  <span> + 1 %</span>
                </li>
              </ul>
              <div className={styles.itemButtons}>
                <button className={styles.outlinedButton}>Show More</button>
                <button className={styles.filledButton}>Buy</button>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.pricelistItem}>
              <h2 className={styles.itemTitle}>Minor</h2>
              <p className={styles.itemPrice}>$ 100 ~ $ 300</p>
              <ul className={styles.percentList}>
                <li>
                  <span>Daily Profit:</span>
                  <span> 5 %</span>
                </li>
                <li>
                  <span>Invite User:</span>
                  <span> + 1 %</span>
                </li>
              </ul>
              <div className={styles.itemButtons}>
                <button className={styles.outlinedButton}>Show More</button>
                <button className={styles.filledButton}>Buy</button>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.pricelistItem}>
              <h2 className={styles.itemTitle}>Minor</h2>
              <p className={styles.itemPrice}>$ 100 ~ $ 300</p>
              <ul className={styles.percentList}>
                <li>
                  <span>Daily Profit:</span>
                  <span> 5 %</span>
                </li>
                <li>
                  <span>Invite User:</span>
                  <span> + 1 %</span>
                </li>
              </ul>
              <div className={styles.itemButtons}>
                <button className={styles.outlinedButton}>Show More</button>
                <button className={styles.filledButton}>Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
