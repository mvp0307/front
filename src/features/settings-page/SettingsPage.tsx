/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import CopySvg from '../../assets/svgs/CopySvg';
import UsersSvg from '../../assets/svgs/UsersSvg';
import WarningIcon from '../../assets/svgs/WarningIcon';
import styles from './settingsPage.module.scss';

const SettingsPage = () => {
  const [copyText, setCopyText] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const regex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

  const hendleEmail = (e: any) => {
    console.log(regex.test(email));
    setEmail(e.target.value);
    if (regex.test(email) === false) {
      setError('Error text here');
    } else {
      setError('');
    }
  };

  const hendleCopy = () => {
    navigator.clipboard.writeText(copyText);
    console.log('uhfuk');
  };
  const history = useHistory();
  const coursesPage = () => {
    history.push('/gross');
  };
  return (
    <section className={styles.settingsPageSection}>
      <div className="container">
        <div className={styles.settingsPageItem}>
          <h1>Settings</h1>
        </div>
        <div className={styles.settingsPageeSubTitle}>
          <div> Auto generated Avatar:</div>
          <div className={styles.settingsPageeChangeAvatar}>
            <div>You can change it when become a </div>
            <div className={styles.settingsPageeGrossLink} onClick={coursesPage}>
              Gross
            </div>
          </div>
        </div>
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
        <div className={styles.waarningVerifyEmailcontainer}>
          {' '}
          <div>
            <WarningIcon />
          </div>{' '}
          <div>You need to verify your email</div>
        </div>
        <label htmlFor="emailId">Email</label>
        <div className={styles.buttonWrapper}>
          <input type="email" name="Email" onChange={hendleEmail} />
          <button className={styles.settingsPageButn}>Confirm</button>
        </div>
        <span className={styles.errorText}>{error}</span>
      </div>
    </section>
  );
};

export default SettingsPage;
