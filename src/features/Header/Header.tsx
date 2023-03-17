import React, { useContext, useState } from 'react';

import CaretSvg from '../../assets/svgs/CaretSvg';
import Logo from '../../assets/svgs/Logo';
import PureAwardSvg from '../../assets/svgs/PureAwardSvg';
import { Settings } from '../../assets/svgs/Settings';
import ConnectWallet from '../../components/ConnectWallet/ConnectWallet';
import { SCREENS } from '../../constants/screens';
import { Web3Context } from '../../context/web3Context';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useOutsideDetect } from '../../hooks/useOutsideDetect';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const { user } = useContext(Web3Context);
  const isMobile = useMediaQuery(SCREENS.mobile);
  const [drowpdown, setDropdown] = useState<boolean>(false);
  const ref = useOutsideDetect(setDropdown);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const mobileMenuRef = useOutsideDetect(setMobileMenu);
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="/" className={styles.headerLogo}>
            <Logo />
          </a>
          <menu
            ref={mobileMenuRef}
            className={`${styles.menu} ${mobileMenu ? styles.openedMenu : ''}`}
          >
            <a className={styles.menuItem} href="/gross">
              Gross
            </a>
            <ul
              ref={ref}
              className={`${styles.headerDropDown} ${styles.menuItem} ${
                drowpdown ? styles.opened : ''
              }`}
            >
              <li>
                <div className={styles.dropdownControl} onClick={() => setDropdown(!drowpdown)}>
                  Investment <CaretSvg />
                </div>
                <ul className={styles.dropList}>
                  <li>
                    <a className={styles.dropDownItems} href="/investitions/minor">
                      Minor
                    </a>
                  </li>
                  <li>
                    <a className={styles.dropDownItems} href="/investitions/major">
                      Major
                    </a>
                  </li>
                  <li>
                    <a className={styles.dropDownItems} href="/investitions/grand">
                      Grand
                    </a>
                  </li>
                  <li>
                    <a className={styles.dropDownItems} href="/gross">
                      <PureAwardSvg /> Gross
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {user && (
              <>
                <a className={styles.menuItem} href="/dashboard">
                  Dashboard
                </a>
              </>
            )}
            {!isMobile && <ConnectWallet />}
            {user && (
              <div className={styles.settings} onClick={() => (window.location.href = '/settings')}>
                <Settings />
              </div>
            )}
          </menu>
          {isMobile && (
            <div className={styles.mobileHeaderRight}>
              <ConnectWallet />
              <button
                onClick={() => {
                  setMobileMenu((v) => !v);
                }}
                type="button"
                className={styles.burgerWrapper}
              >
                <span
                  className={`${styles.burgerIcon} ${mobileMenu ? styles.burgerOpened : ''}`}
                ></span>
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
export default React.memo(Header);
