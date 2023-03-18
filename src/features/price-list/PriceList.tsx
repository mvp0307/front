import React from 'react';
import { useHistory } from 'react-router-dom';

import PureAwardSvg from '../../assets/svgs/PureAwardSvg';
import styles from './priceList.module.scss';

const PriceList = () => {
  const history = useHistory();
  return (
    <section className={styles.priceListSectin}>
      <div className="container">
        <div className={styles.titleBlock}>
          <p className="title_prefix">You Haven’t Investments</p>
          <h2 className="title_section">Invest Money And Earn %</h2>
        </div>
        <div className={styles.pricelistRow}>
          <div className="col_">
            <div className={styles.pricelistItem}>
              <div>
                <h2 className={styles.itemTitle}>Minor</h2>
                <div className={styles.priceInfo}>
                  <p className={styles.itemPrice}>$ 100 ~ $ 300</p>
                </div>
              </div>
              <div>
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
                  <button
                    className={styles.outlinedButton}
                    onClick={() => history.push('/investitions/minor')}
                  >
                    Show More
                  </button>
                  <button className={styles.filledButton}>Buy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={`${styles.pricelistItem} ${styles.pricelistItemSelected}`}>
              <div>
                <h2 className={styles.itemTitle}>Major</h2>
                <div className={styles.priceInfo}>
                  <p className={styles.itemPrice}>$ 301 ~ $ 1000</p>
                </div>
              </div>
              <div>
                <ul className={styles.percentList}>
                  <li>
                    <span>Daily Profit:</span>
                    <span> 6.5 %</span>
                  </li>
                  <li>
                    <span>Invite User:</span>
                    <span> + 1.5 %</span>
                  </li>
                </ul>
                <div className={styles.itemButtons}>
                  <button
                    className={styles.outlinedButton}
                    onClick={() => history.push('/investitions/major')}
                  >
                    Show More
                  </button>
                  <button className={styles.filledButton}>Buy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.pricelistItem}>
              <div>
                <h2 className={styles.itemTitle}>Grand</h2>
                <div className={styles.priceInfo}>
                  <p className={styles.itemPrice}>$ 1001 ~ $ 5000</p>
                </div>
              </div>
              <div>
                <ul className={styles.percentList}>
                  <li>
                    <span>Daily Profit:</span>
                    <span> 8 %</span>
                  </li>
                  <li>
                    <span>Invite User:</span>
                    <span> + 2 %</span>
                  </li>
                </ul>
                <div className={styles.itemButtons}>
                  <button
                    className={styles.outlinedButton}
                    onClick={() => history.push('/investitions/grand')}
                  >
                    Show More
                  </button>
                  <button className={styles.filledButton}>Buy</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.pricelistItem}>
              <div>
                <h2 className={styles.itemTitle}>
                  {' '}
                  <PureAwardSvg />
                  Gross
                </h2>
                <div className={styles.priceInfo}>
                  <p className={styles.itemPrice}>$ 10.000 +</p>
                  <p className={styles.dailyIncome}>+ daily income</p>
                </div>
              </div>
              <div>
                <ul className={styles.percentList}>
                  <li>
                    <span>Daily Profit:</span>
                    <span> 8 %</span>
                  </li>
                  <li>
                    <span>Invite User:</span>
                    <span> +2 %</span>
                  </li>
                </ul>
                <div className={styles.itemButtons}>
                  <button className={styles.outlinedButton} onClick={() => history.push('/gross')}>
                    Show More
                  </button>
                  <button className={styles.filledButton}>Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
