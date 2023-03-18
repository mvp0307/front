import React from 'react';

import styles from './grossBonusActions.module.scss';

const GrossBonusActions = () => {
  return (
    <section className={styles.bonsuSection}>
      <div className="container">
        <h2 className={styles.bonusTitle}>Cash withdrawals, bonuses and promotions </h2>
        <div className={styles.bonusRow}>
          <div className="col_">
            <div className={styles.bonusInnerLeft}>
              <p>
                For GROSS users, a support manager is provided that is available 24/7.
                <br />
                <br />
                Discusses all issues related to cash withdrawals. GROSS Investor is provided Bonuses
                and Promotions in the form of percentage and is raised to the top list.
              </p>
            </div>
          </div>
          <div className="col_">
            <div className={styles.bonusRight}>
              <p>
                For GROSS investors, cash withdrawals format is not supported at any time.
                <br /> <span>IMPORTANT </span> - For cash withdrawal needs time for verification the
                transaction and investment flow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrossBonusActions;
