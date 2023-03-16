import React, { useContext } from 'react';

// import { useHistory } from 'react-router-dom';
import { Web3Context } from '../../context/web3Context';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  const { user } = useContext(Web3Context);
  // const history = useHistory();
  // const homePageContact = () => {
  //   history.push('/');
  // };
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerRow}>
          <p> &#169; Copyright MVP,INC. All Rights reserved</p>

          <div className={styles.linksWrapper}>
            {user && <a href="/">Contact US</a>}
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default React.memo(Footer);
