import React from 'react';

import AwardSvg from '../../assets/svgs/AwardSvg';
import MoneyStatisticSvg from '../../assets/svgs/MoneyStatisticSvg';
import StatisticSvg from '../../assets/svgs/StatisticSvg';
import WalletSvg from '../../assets/svgs/WalletSvg';
import styles from './howItWorks.module.scss';

const HowItWorks = () => {
  return (
    <section className={styles.howItWorksSection}>
      <div className="container">
        <div className={styles.titleBlock}>
          <p className="title_prefix">How It Works</p>
          <h2 className="title_section">Save Time And Manage The Profit Of Investment</h2>
        </div>
        <div className={styles.itemsBlock}>
          <div className={styles.itemsRow}>
            <div className="col_">
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <WalletSvg />
                </div>
                <div className={styles.itemText}>
                  <h3>Connect Wallet</h3>
                  <p>Turn on MetaMask wallet, you can read guide for wallet below </p>
                </div>
              </div>
            </div>
            <div className="col_">
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <StatisticSvg />
                </div>
                <div className={styles.itemText}>
                  <h3>Invest</h3>
                  <p>
                    You do not understand Crypto market? Not a problem - our bot knows where and
                    when to invest.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col_">
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <MoneyStatisticSvg />
                </div>
                <div className={styles.itemText}>
                  <h3>Income</h3>
                  <p>Get and cash out income every day </p>
                </div>
              </div>
            </div>
            <div className="col_">
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <AwardSvg />
                </div>
                <div className={styles.itemText}>
                  <h3>Become a Gross</h3>
                  <p>Invest more and become GROSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
