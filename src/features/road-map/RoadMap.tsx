import React from 'react';

import styles from './roadMap.module.scss';

const RoadMap = () => {
  return (
    <section className={styles.roadMapSection}>
      <div className="container">
        <div className={styles.titleBlock}>
          <p className="title_prefix">Road Map</p>
          <h2 className="title_section">Our Team Of Export Do Their Best</h2>
          <p className={styles.titleDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa, ornare tempus
            feugiat aliquet nec leo imperdiet.
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={`col_ ${styles.roadMap_normal}`}>
              <div className={styles.wrapItem}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={`col_ ${styles.roadMap_small}`}>
              <div className={styles.wrapItem}>
                <p>2023</p>
              </div>
            </div>
            <div className={`col_ ${styles.roadMap_normal}`}>
              <div className={styles.wrapItem}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className={`col_ ${styles.roadMap_normal}`}>
              <div className={styles.wrapItem}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
