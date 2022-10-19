import React from 'react';

import Logo from '../../assets/svgs/Logo';
import ConnectWallet from '../../components/ConnectWallet/ConnectWallet';
import styles from './header.module.scss';

const Header: React.FC = () => {
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
            <ConnectWallet />
          </menu>
        </nav>
      </div>
    </header>
  );
};
export default React.memo(Header);
