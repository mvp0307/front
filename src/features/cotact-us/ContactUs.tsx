import React from 'react';

import Discord from '../../assets/svgs/Discord';
import InstagramSvg from '../../assets/svgs/InstagramSvg';
import TikTokSvg from '../../assets/svgs/TikTokSvg';
import YoutubeSvg from '../../assets/svgs/YoutubeSvg';
import styles from './contactUs.module.scss';

const ContactUs = () => {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactBlock}>
          <div className={styles.contactRow}>
            <div className="col_">
              <div className={styles.contactLeftSide}>
                <div className={styles.titleBlock}>
                  <p className="title_prefix">Contact Us</p>
                  <h2 className="title_section">Save Time And Manage The Profit Of Investment</h2>
                </div>
                <div className={styles.socialShare}>
                  <a href="#" target="_blank">
                    <TikTokSvg />
                  </a>
                  <a href="#" target="_blank">
                    <InstagramSvg />
                  </a>
                  <a href="#" target="_blank">
                    <Discord />
                  </a>
                  <a href="#" target="_blank">
                    <YoutubeSvg />
                  </a>
                </div>
              </div>
            </div>
            <div className="col_">
              <form action="">
                <div className={styles.formWrapper}>
                  <div className={styles.formItemWrapper}>
                    <div className={`${styles.formItem} ${styles.unvalidated}`}>
                      <label htmlFor="emailId">Email</label>
                      <input type="email" id="emailId" placeholder="Type your email" />
                      <p className={styles.errorMsg}>Error text here</p>
                    </div>
                  </div>
                  <div className={styles.formItemWrapper}>
                    <div className={styles.formItem}>
                      <label htmlFor="messageId">Message</label>
                      <textarea id="messageId" placeholder="Type your message..." />
                    </div>
                  </div>
                  <button className={styles.submitBtn}>Contact Us</button>dsfsdf
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
