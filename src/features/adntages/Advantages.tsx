import React from 'react';

import DuckSvg from '../../assets/svgs/DuckSvg';
import GhostSvg from '../../assets/svgs/GhostSvg';
import SharkSvg from '../../assets/svgs/SharkSvg';
import WatermelonSvg from '../../assets/svgs/WatermelonSvg';
import styles from './advatnages.module.scss';

const Advantages = () => {
  return (
    <section className={styles.advantagesSection}>
      <div className="container">
        <div className={styles.advantageWrapper}>
          <div className={styles.mainRow}>
            <div className={`${styles.leftCustomCol} col_`}>
              <div className={styles.advantageRow}>
                <div className="col_">
                  <div className={styles.advatnageItem}>
                    <div className={styles.advatnageCount}>1</div>
                    <div className={styles.advatnageBlock}>
                      <div className={styles.advatnageIcon}>
                        <WatermelonSvg />
                      </div>
                      <div className={styles.advantageText}>
                        <h3>Abovyan</h3>
                        <p>Income</p>
                        <p className={styles.advatnagePrice}>$ 20.000</p>
                      </div>
                      <div className={styles.advantageBtn}>Show Map</div>
                    </div>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.advatnageItem}>
                    <div className={styles.advatnageCount}>2</div>
                    <div className={styles.advatnageBlock}>
                      <div className={styles.advatnageIcon}>
                        <SharkSvg />
                      </div>
                      <div className={styles.advantageText}>
                        <h3>Abovyan</h3>
                        <p>Income</p>
                        <p className={styles.advatnagePrice}>$ 18.000</p>
                      </div>
                      <div className={styles.advantageBtn}>Show Map</div>
                    </div>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.advatnageItem}>
                    <div className={styles.advatnageCount}>3</div>
                    <div className={styles.advatnageBlock}>
                      <div className={styles.advatnageIcon}>
                        <DuckSvg />
                      </div>
                      <div className={styles.advantageText}>
                        <h3>Abovyan</h3>
                        <p>Income</p>
                        <p className={styles.advatnagePrice}>$ 16.000</p>
                      </div>
                      <div className={styles.advantageBtn}>Show Map</div>
                    </div>
                  </div>
                </div>
                <div className="col_">
                  <div className={styles.advatnageItem}>
                    <div className={styles.advatnageCount}>4</div>
                    <div className={styles.advatnageBlock}>
                      <div className={styles.advatnageIcon}>
                        <GhostSvg />
                      </div>
                      <div className={styles.advantageText}>
                        <h3>Abovyan</h3>
                        <p>Income</p>
                        <p className={styles.advatnagePrice}>$ 15.000</p>
                      </div>
                      <div className={styles.advantageBtn}>Show Map</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.rightCustomCol} col_`}>
              <div className={styles.advantageTexts}>
                <div className={styles.titleBlock}>
                  <p className="title_prefix">Top Grosses</p>
                  <h2 className="title_section">Become a Gross And Earn More Money</h2>
                </div>
                <p className="textitem">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa, ornare
                  tempus feugiat aliquet nec leo imperdiet. Dictum risus, mi scelerisque sagittis,
                  ultricies eu, odio platea congue.
                </p>
                <div className={styles.outlinedButton}>Gross</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
