import React, { useContext } from 'react';

import CaretSvg from '../../assets/svgs/CaretSvg';
import Logo from '../../assets/svgs/Logo';
import PureAwardSvg from '../../assets/svgs/PureAwardSvg';
import { Settings } from '../../assets/svgs/Settings';
import ConnectWallet from '../../components/ConnectWallet/ConnectWallet';
import { SCREENS } from '../../constants/screens';
import { Web3Context } from '../../context/web3Context';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const { user } = useContext(Web3Context);
  const isMobile = useMediaQuery(SCREENS.mobile);
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="/" className={styles.headerLogo}>
            <Logo />
          </a>
          {/* button-ի քլքիք ժամանակ մենյուն բացվելու համար menu tag-ինա կլասս ավելանում ${styled.openedMenu} */}
          <menu className={`${styles.menu}`}>
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
            {!isMobile && <ConnectWallet />}
            {user && (
              <div className={styles.settings}>
                <Settings />
              </div>
            )}
          </menu>
          {isMobile && (
            <div className={styles.mobileHeaderRight}>
              <ConnectWallet />
              {/* onClick կապում ենք button-ին, սթեյթ փոխում ենք span-ին */}
              <button type="button" className={styles.burgerWrapper}>
                <span className={`${styles.burgerIcon} ${styles.burgerOpened}`}></span>
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
export default React.memo(Header);
