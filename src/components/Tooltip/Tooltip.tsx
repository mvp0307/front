import React from 'react';

import styles from './tooltip.module.scss';

const Tooltip = () => {
  return (
    <div className={styles.tooltipItem} style={{ top: '-150px', left: '-113px' }}>
      <p>
        При помоши личного реферального кода вы можете пригласить друзей и поднять ваш ежедневный
        процент.
      </p>
      <p>
        Скопируйте код и попросите вашего друга после регистрации, перед тем как инвестировать,
        добавить код в блок Реферальный код приглашения
      </p>
    </div>
  );
};

export default Tooltip;
