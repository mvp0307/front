import React from 'react';
import { useHistory } from 'react-router-dom';

import { ErrorSvg } from '../../assets/svgs/Error';
// import HomePage from '../../views/HomePage/HomePage';
import styles from './errorPage.module.scss';

const ErrorPage = () => {
  const history = useHistory();

  const coursesPage = () => {
    history.push('/');
  };
  return (
    <section className={styles.errorPageSection}>
      <div className={styles.errorPageItem}>
        <div className={styles.errorPagesItem}>
          <h1>Oops</h1>
          <ErrorSvg />
        </div>
        <h2>404. That’s an error. </h2>
        <p className={styles.errorPageSubTitle}>
          We’re sorry, the page you requested could not be found Please ga back to the homepage
        </p>
        <div className={styles.buttonWrapper}>
          <button className={styles.errorPageButn} onClick={coursesPage}>
            Go Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
