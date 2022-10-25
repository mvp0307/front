import React, { useContext } from 'react';

import { Web3Context } from '../../context/web3Context';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const { user } = useContext(Web3Context);
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerRow}>
          <p> &#169; Copyright MVP,INC. All Rights reserved</p>

          <p className={styles.linksWrapper}>
            {user && <p>Contact US</p>}
            <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
