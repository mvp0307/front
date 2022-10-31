import React from 'react';

import styles from './grossBonusActions.module.scss';

const GrossBonusActions = () => {
  return (
    <section className={styles.bonsuSection}>
      <div className="container">
        <h2 className={styles.bonusTitle}>Обналичивание средств, бонусы и акции </h2>
        <div className={styles.bonusRow}>
          <div className="col_">
            <div className={styles.bonusInnerLeft}>
              <p>
                Для ГРОСС пользователея предоставляеться суппорт менеджер который доступен 24/7 .
                <br />
                Обсуждает все вопросы связанные с обналичиванием средств . ГРОСС Инвестором
                предоставляються Бонусы и Акции в в виде процента и поднятием в список топ
              </p>
            </div>
          </div>
          <div className="col_">
            <div className={styles.bonusRight}>
              <p>
                Для ГРОСС инвесторов не поддержиеваеться формат обналичивания средств в любой
                момент. <br /> <span>ВАЖНО</span> - Для обналичивания требуеться время для проверки
                транзакцией и инвестиционного флоу.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrossBonusActions;
