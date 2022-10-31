import React from 'react';

import howToGross from '../../assets/images/how-to-gross/how-to-gross.png';
import styles from './howToGross.module.scss';

const HowToGross = () => {
  return (
    <section className={styles.howToGrossSection}>
      <div className="container">
        <div className={styles.howToGrossRow}>
          <div className="col_">
            <div className={styles.grossLeftBlock}>
              <div className={styles.titleBlock}>
                <p className="title_prefix">Investment</p>
                <h2 className="title_section">Как стать ГРОСС - ом </h2>
              </div>
              <p className={styles.howtoGrossText}>
                Инвестор получает статус ГРОСС если обшая сумма инвестиции больше чем 10,000$. Полсе
                того как есть нужное количество средств на балансе автоматом вы получите статус
                ГРОСС и поменяться механизм расчета ежедневного процента.
              </p>
            </div>
          </div>
          <div className="col_">
            <div className={styles.heroImage}>
              <img src={howToGross} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGross;
