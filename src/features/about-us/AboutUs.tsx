import React, { useContext } from 'react';

import aboutImg from '../../assets/images/statistic.png';
import { MainContext } from '../../context/mainContext';
import styles from './aboutUs.module.scss';

const AboutUs = () => {
  const { setModal } = useContext(MainContext);

  return (
    <section className={styles.aboutusSection}>
      <div className="container">
        <div className={styles.aboutRow}>
          <div className="col_">
            <div className={styles.titleBlock}>
              <p className="title_prefix">About Us</p>
              <h2 className="title_section">
                Who we are and why we have the most convenient investment portal{' '}
              </h2>
            </div>
            <div className={styles.textItem}>
              <p>
                To become investor on our portal, you first need to open wallet and connect to us
              </p>
              <span onClick={() => setModal('create-wallet')}>How to open MetaMask wallet</span>
            </div>
            <div className={styles.textItem}>
              <p>
                After connecting, you need only to make the first investment and you are already our
                investor.
              </p>
              <span onClick={() => setModal('how-to-buy-eth')}>How to buy ETH? </span>
            </div>
          </div>
          <div className="col_">
            <img src={aboutImg} alt="ABout image with statistic chart" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
