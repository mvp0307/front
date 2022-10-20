import React from 'react';

import styles from './banner.module.scss';

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className="container">
        <div className={styles.banerRow}>
          <div className="col_">
            <div className={styles.banerLfet}>
              <h2 className={styles.bannerTitle}>More Income!</h2>
              <p className={styles.bannerSubTitle}>+ 1 %</p>
            </div>
          </div>
          <div className="col_">
            <div className={styles.bannerRight}>
              <p className={styles.bannerText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa, ornare tempus
                feugiat aliquet nec leo imperdiet. .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
