/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid';
import CopySvg from '../../assets/svgs/CopySvg';
import UsersSvg from '../../assets/svgs/UsersSvg';
import WarningIcon from '../../assets/svgs/WarningIcon';
import { LOCAL_STORAGE_KEY } from '../../constants/localestorageKeys';
import styles from './settingsPage.module.scss';

const storageItem = localStorage.getItem(LOCAL_STORAGE_KEY);
const SettingsPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(true);

  const regex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

  const hendleEmail = (e: any) => {
    setEmail(e.target.value);
    setError('');
    if (regex.test(email) === false) {
      setError('Invalid email');
      setDisabled(true);
    } else {
      setError('');
      setDisabled(false);
    }
    if (!e.target.value) {
      setError('');
      setDisabled(true);
    }
  };

  const copy = () => {
    navigator.clipboard.writeText(storageItem as string);
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
              <p>{storageItem}</p>
              <button onClick={copy}>
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
          <button className={styles.settingsPageButn} disabled={disabled}>
            Confirm
          </button>
        </div>
        <span className={styles.errorText}>{error}</span>
      </div>
    </section>
  );
};

export default SettingsPage;
