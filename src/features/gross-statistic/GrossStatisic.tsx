import React from 'react';

import styles from './grossStatistic.module.scss';

const GrossStatisic = () => {
  return (
    <section className={styles.grossStatisticSection}>
      <div className="container">
        <h2 className={styles.grossTitle}>Инвестор / ГРОСС Инвестор</h2>
        <div className={styles.grossRow}>
          <div className="col_">
            <div className={styles.grossItem}>
              <div className={styles.grossHeader}>
                <h3 className={styles.smallTitlte}>Инвестор</h3>
                <p className={styles.subText}>
                  Получает статичную сумму ежедневно в зависимости от процента.
                </p>
                <p className={styles.withPercentText}>Процент считаеться от суммы инвестиции</p>
              </div>
              <div className={styles.grossBody}>
                <h3 className={styles.smallTitlte}>Examples</h3>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <li>
                      <span>Начальная инвестиция</span>
                      <span>$ 1500</span>
                    </li>
                    <li>
                      <span>Процент</span>
                      <span>8 %</span>
                    </li>
                    <li>
                      <span>Ежендневная сумма к получению</span>
                      <span>$ 120</span>
                    </li>
                    <li>
                      <span>Пригалшенных пользователей</span>
                      <span>0</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.listWrapper} ${styles.lastWrapper}`}>
                <h3 className={styles.smallTitlte}>Инвестиционная календарь за 5 дней </h3>
                <ul className={styles.list}>
                  <li>
                    <span>День 1</span>
                    <span>$ 120</span>
                  </li>
                  <li>
                    <span>День 2</span>
                    <span>$ 240</span>
                  </li>
                  <li>
                    <span>День 3</span>
                    <span>$ 360</span>
                  </li>
                  <li>
                    <span>День 4</span>
                    <span>$ 480</span>
                  </li>
                  <li>
                    <span>День 5</span>
                    <span>$ 600</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.grossItem}>
              <div className={styles.grossHeader}>
                <h3 className={styles.smallTitlte}>ГРОСС Инвестор </h3>
                <p className={styles.subText}>
                  Получает динамичную сумму ежедневно на следуюший день всегда больше чем на
                  предыдуший.
                </p>
                <p className={styles.withPercentText}>
                  Процент статичный <span className={styles.percentItem}>8 %</span>
                </p>
                <div className={styles.subTextWrapper}>
                  <p className={styles.withPercentText}>
                    Процент считатеться от
                    <p className={styles.subText}>СУММА НА БАЛАНСЕ + ОБШАЯ СУММА ИНВЕСТИЦИИ</p>
                  </p>
                </div>
              </div>
              <div className={styles.grossBody}>
                <h3 className={styles.smallTitlte}>Examples</h3>
                <div className={styles.listWrapper}>
                  <ul className={styles.list}>
                    <li>
                      <span>Сумма инвестиции</span>
                      <span>$ 10.000</span>
                    </li>
                    <li>
                      <span>Ежедневний фиксированный процент</span>
                      <span>8 %</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.listWrapper} ${styles.lastWrapper}`}>
                <h3 className={styles.smallTitlte}>Инвестиционная календарь за 5 дней </h3>
                <ul className={styles.list}>
                  <li>
                    <span>День 1</span>
                    <span>15,000$ + 1200$ = 16.200$</span>
                  </li>
                  <li>
                    <span>День 2</span>
                    <span>16.200$ + 1296$ = 17.496$</span>
                  </li>
                  <li>
                    <span>День 3</span>
                    <span>16.200$ + 1296$ = 17.496$</span>
                  </li>
                  <li>
                    <span>День 4</span>
                    <span>16.200$ + 1296$ = 17.496$</span>
                  </li>
                  <li>
                    <span>День 5</span>
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
