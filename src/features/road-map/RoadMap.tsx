import React from 'react';

import styles from './roadMap.module.scss';

const RoadMap = () => {
  return (
    <section className={styles.roadMapSection}>
      <div className="container">
        <div className={styles.titleBlock}>
          <p className="title_prefix">RoadMap</p>
          <h2 className="title_section">Our export team do their best</h2>
          <p className={styles.titleDescription}>
            We have been trying for many years to make simple investment portal, below is our
            roadmap for the next years
          </p>
        </div>
        <div className={styles.roadMapArea}>
          <div className={styles.roadMapRow}>
            <div className={`col_ ${styles.roadMap_small}`}>
              <div className={styles.wrapItem}>
                <p>2023</p>
              </div>
            </div>
            <div className={`col_ ${styles.roadMap_normal}`}>
              <div className={styles.wrapItem}>
                <p>Accept payment in BTC. </p>
              </div>
            </div>
            <div className={`col_ ${styles.roadMap_normal}`}>
              <div className={styles.wrapItem}>
                <p>Double the percentage of monetization from invited users </p>
              </div>
            </div>
            <div className={`col_ ${styles.roadMap_small}`}>
              <div className={styles.wrapItem}>
                <p>2024</p>
              </div>
            </div>
            <div className={`col_ ${styles.roadMap_normal}`}>
              <div className={styles.wrapItem}>
                <p>Accept payment in USD </p>
              </div>
            </div>
            <div className={`col_ ${styles.roadMap_normal}`}>
              <div className={styles.wrapItem}>
                <p>Withdraw money instantly to the bank card </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
