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
              <h2 className="title_section">Save Time And Manage The Profit Of Investment</h2>
            </div>
            <div className={styles.textItem}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa, ornare tempus
                feugiat aliquet nec leo imperdiet. Dictum risus, mi scelerisque sagittis, ultricies
                eu, odio platea congue.
              </p>
              <span onClick={() => setModal('create-wallet')}>Как открыть кошельек MetaMask</span>
            </div>
            <div className={styles.textItem}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi massa, ornare tempus
                feugiat aliquet nec leo imperdiet. Dictum risus
              </p>
              <span onClick={() => setModal('how-to-buy-eth')}>Как купить ETH ?</span>
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
