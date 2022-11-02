import React from 'react';

import styles from './PageLoader.module.scss';

const PageLoader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};
export default React.memo(PageLoader);
