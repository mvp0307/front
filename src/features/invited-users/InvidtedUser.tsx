import React from 'react';

import ActiveSvg from '../../assets/svgs/ActiveSvg';
import InactiveSvg from '../../assets/svgs/InactiveSvg';
import InfoSvg from '../../assets/svgs/InfoSvg';
import Tooltip from '../../components/Tooltip/Tooltip';
import styles from './invitedUsers.module.scss';

const InvidtedUser = () => {
  return (
    <section className={styles.invitedUsersSection}>
      <div className="container">
        <div className={styles.titleBlock}>
          <h2 className="title_section">Invest Money And Earn %</h2>
        </div>
        <ol className={styles.invitedUsersList}>
          <li>
            <span>1.</span>
            <div className={styles.userBlock}>
              <p>13018783-ff2b-4817-a0ba-e63f05257ebb</p>
              <div className={styles.statiusInfo}>
                <p className={styles.activeText}>
                  <ActiveSvg /> Active
                </p>
                <div className="tooltipWrapper">
                  <InfoSvg />
                  <Tooltip />
                </div>
              </div>
            </div>
          </li>
          <li>
            <span>2.</span>
            <div className={styles.userBlock}>
              <p>13018783-ff2b-4817-a0ba-e63f05257ebb</p>
              <div className={styles.statiusInfo}>
                <p className={styles.inactiveText}>
                  <InactiveSvg /> Inactive
                </p>
                <div className="tooltipWrapper">
                  <InfoSvg />
                  <Tooltip />
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default InvidtedUser;
