import React from 'react';

import styles from './PageLoader.module.scss';

const PageLoader: React.FC = () => {
  return <div className={styles.spinner}></div>;
};
export default React.memo(PageLoader);
