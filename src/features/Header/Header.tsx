import React, { useContext } from 'react';

import Logo from '../../assets/svgs/Logo';
import { Settings } from '../../assets/svgs/Settings';
import ConnectWallet from '../../components/ConnectWallet/ConnectWallet';
import { Web3Context } from '../../context/web3Context';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const { user } = useContext(Web3Context);
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="/">
            <Logo />
          </a>
          <menu className={styles.menu}>
            <a className={styles.menuItem} href="">
              Gross
            </a>
            <a className={styles.menuItem} href="">
              Investment
            </a>
            {user && (
              <>
                <a className={styles.menuItem} href="">
                  Map
                </a>
                <a className={styles.menuItem} href="/dashboard">
                  Dashboard
                </a>
              </>
            )}
            <ConnectWallet />
            {user && (
              <div className={styles.settings}>
                <Settings />
              </div>
            )}
          </menu>
        </nav>
      </div>
    </header>
  );
};
export default React.memo(Header);
