import React, { useState } from 'react';

import Discord from '../../assets/svgs/Discord';
import InstagramSvg from '../../assets/svgs/InstagramSvg';
import TikTokSvg from '../../assets/svgs/TikTokSvg';
import YoutubeSvg from '../../assets/svgs/YoutubeSvg';
import styles from './contactUs.module.scss';

const ContactUs = () => {
  const [data, setData] = useState<{ email: string; text: string }>({ email: '', text: '' });
  const [errors, setErrors] = useState<{ email: string; text: string }>({
    email: '',
    text: '',
  });
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmit = () => {
    console.log(validateEmail(data.email));
    if (!data.email || !data.text || !validateEmail(data.email)) {
      console.log(validateEmail(data.email), 'asas');
      setErrors(() => {
        return {
          email: !data.email
            ? 'Поле не может быть пустым'
            : !validateEmail(data.email)
            ? 'Неправильный формат Email'
            : '',
          text: !data.text ? 'Поле не может быть пустым' : '',
        };
      });
    } else {
      setErrors({ email: '', text: '' });
      console.log(data);
    }
  };
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
                    <div className={`${styles.formItem} ${errors.email ? styles.unvalidated : ''}`}>
                      <label htmlFor="emailId">Email</label>
                      <input
                        onChange={(event) => {
                          setData((prev) => {
                            return {
                              ...prev,
                              email: event.target.value,
                            };
                          });
                        }}
                        type="email"
                        id="emailId"
                        placeholder="Type your email"
                      />
                      {errors.email && <p className={styles.errorMsg}>{errors.email}</p>}
                    </div>
                  </div>
                  <div className={styles.formItemWrapper}>
                    <div className={`${styles.formItem} ${errors.text ? styles.unvalidated : ''}`}>
                      <label htmlFor="messageId">Message</label>
                      <textarea
                        onChange={(event) => {
                          setData((prev) => {
                            return {
                              ...prev,
                              text: event.target.value,
                            };
                          });
                        }}
                        id="messageId"
                        placeholder="Type your message..."
                      />
                      {errors.text && <p className={styles.errorMsg}>{errors.text}</p>}
                    </div>
                  </div>
                  <button type="button" className={styles.submitBtn} onClick={handleSubmit}>
                    Contact Us
                  </button>
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
