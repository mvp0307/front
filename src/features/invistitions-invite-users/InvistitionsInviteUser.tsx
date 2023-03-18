import React from 'react';

import inviteImage from '../../assets/images/investitions-images/invite.png';
import LongArrowSvg from '../../assets/svgs/LongArrowSvg';
import styles from './invistitionsInviteUser.module.scss';

interface IProps {
  value: Record<string, string>;
}
const InvistitionsInviteUser: React.FC<IProps> = ({ value }) => {
  return (
    <section className={styles.invisitionsInviteSection}>
      <div className="container">
        <div className={styles.inviteRow}>
          <div className="col_">
            <div className={styles.inviteTexts}>
              <h2 className={styles.inviteTitle}>Invite Users</h2>
              <p className={styles.inviteWithLink}>
                You can invite friends with the help of
                <p className={styles.inviteWithLink}>Personal Referral Code. </p>
              </p>
              <div className={styles.text}>
                After your invited user makes the first investment,
                <strong> your daily interest will raise by 1 unit.</strong>
              </div>
              <div className={styles.fromToBlock}>
                <h3>Examples</h3>
                <div className={styles.fromToItem}>
                  <div className={styles.fromToRow}>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.leftSide}`}>
                        <p>Invest</p>
                        <p className={styles.sideNumber}>$ {value.invest}</p>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles.fromToArrow}>
                        <LongArrowSvg />
                      </div>
                    </div>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.rightSide}`}>
                        <p>Get</p>
                        <p className={styles.sideNumber}>$ {value.get} Every day!</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.fromToItem}>
                  <div className={styles.fromToRow}>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.leftSide}`}>
                        <p>invite</p>
                        <p className={styles.sideNumber}>10 friends</p>
                      </div>
                    </div>
                    <div className="col_">
                      <div className={styles.fromToArrow}>
                        <LongArrowSvg />
                      </div>
                    </div>
                    <div className="col_">
                      <div className={`${styles.side} ${styles.rightSide}`}>
                        <p>Get</p>
                        <p className={styles.sideNumber}>$ {value.friends} Every day!</p>
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
