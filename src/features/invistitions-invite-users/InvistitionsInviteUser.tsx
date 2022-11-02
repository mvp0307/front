import React from 'react';

import inviteImage from '../../assets/images/investitions-images/invite.png';
import LongArrowSvg from '../../assets/svgs/LongArrowSvg';
import styles from './invistitionsInviteUser.module.scss';

const InvistitionsInviteUser = () => {
  return (
    <section className={styles.invisitionsInviteSection}>
      <div className="container">
        <div className={styles.inviteRow}>
          <div className="col_">
            <div className={styles.inviteTexts}>
              <h2 className={styles.inviteTitle}>Invite Users</h2>
              <p className={styles.inviteWithLink}>
                У вас будет возможность приглашение друзей с помошю{' '}
                <a href="#">Личного Реферального Кода.</a>
              </p>
              <div className={styles.text}>
                После того как ваш приглашенный пользователь сделает первую инвестицию ваш
                <strong>ежедневний процент подниметься на 1 единицу.</strong>
              </div>
              <div className={styles.fromToBlock}>
                <h3>Examples</h3>
                <div className={styles.fromToItem}>
                  <div className={styles.fromToRow}>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.leftSide}`}>
                        <p>Инвестируйте</p>
                        <p className={styles.sideNumber}>$ 150</p>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles.fromToArrow}>
                        <LongArrowSvg />
                      </div>
                    </div>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.rightSide}`}>
                        <p>Получайте</p>
                        <p className={styles.sideNumber}>$ 7.5 Каждый день!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.fromToItem}>
                  <div className={styles.fromToRow}>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.leftSide}`}>
                        <p>Пригласите</p>
                        <p className={styles.sideNumber}>10 Друзей</p>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles.fromToArrow}>
                        <LongArrowSvg />
                      </div>
                    </div>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.rightSide}`}>
                        <p>Получайте</p>
                        <p className={styles.sideNumber}>$ 10 Каждый день</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col_">
            <div className={styles.inviteImage}>
              <img src={inviteImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvistitionsInviteUser;
