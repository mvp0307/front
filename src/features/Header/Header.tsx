import React, { useContext } from 'react';

import CaretSvg from '../../assets/svgs/CaretSvg';
import Logo from '../../assets/svgs/Logo';
import PureAwardSvg from '../../assets/svgs/PureAwardSvg';
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
            {/* ul-ին ավելանումա ${styles.opened} կլասսը, ու թաֆվող մենյուն երևումա */}
            <ul className={`${styles.headerDropDown} ${styles.menuItem}`}>
              <li>
                <div className={styles.dropdownControl}>
                  Investment <CaretSvg />
                </div>
                <ul className={styles.dropList}>
                  <li>
                    <a className={styles.dropDownItems} href="">
                      Minor
                    </a>
                  </li>
                  <li>
                    <a className={styles.dropDownItems} href="">
                      Major
                    </a>
                  </li>
                  <li>
                    <a className={styles.dropDownItems} href="">
                      Grand
                    </a>
                  </li>
                  <li>
                    <a className={styles.dropDownItems} href="">
                      <PureAwardSvg /> Gross
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
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
