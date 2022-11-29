/* eslint-disable no-useless-escape */
import React, { useState } from 'react';

import CopySvg from '../../assets/svgs/CopySvg';
import UsersSvg from '../../assets/svgs/UsersSvg';
import styles from './settingsPage.module.scss';

const SettingsPage = () => {
  const [copyText, setCopyText] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const hendleEmail = (e: any) => {
    console.log(regex.test(email));
    if (regex.test(email) === false) {
      setError('Error text here');
    } else {
      setEmail(e.target.value);
      setError('');
    }
  };

  const hendleCopy = () => {
    navigator.clipboard.writeText(copyText);
    console.log('uhfuk');
  };
  return (
    <section className={styles.settingsPageSection}>
      <div className="container">
        <div className={styles.settingsPageItem}>
          <h1>Settings</h1>
        </div>
        <p className={styles.settingsPageeSubTitle}>
          Auto generated Avatar: You can change it when become a Gross
        </p>

        <div className={styles.settingsUserWrapper}>
          <UsersSvg />
          <div className={styles.copyReferralCodecontainer}>
            <p>Реферальный код</p>
            <div className={styles.copyReferralCode}>
              <input value={copyText} onChange={(e) => setCopyText(e.target.value)} />
              <button onClick={hendleCopy}>
                <CopySvg />
              </button>
            </div>
          </div>
        </div>
        <p>Email</p>
        <div className={styles.buttonWrapper}>
          <input type="email" name="Email" onChange={hendleEmail} />
          <button className={styles.settingsPageButn}>Confirm</button>
        </div>
        <p className={styles.errorText}>{error}</p>
      </div>
    </section>
  );
};

export default SettingsPage;
