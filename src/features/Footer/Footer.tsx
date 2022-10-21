import React from 'react';

import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerRow}>
          <p> &#169; Copyright MVP,INC. All Rights reserved</p>
          <p>
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
