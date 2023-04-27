import React, { useContext } from 'react';

import { Web3Context } from '../../context/web3Context';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const { user } = useContext(Web3Context);
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerRow}>
          <p> &#169; InvesTonus INC. All Rights reserved 22568 UE</p>

          <div className={styles.linksWrapper}>
            {/* {user && <p>Contact US</p>} */}
            {user && <a href="/">Contact US</a>}
            <a href="policy.pdf" download="Privacy Policy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
