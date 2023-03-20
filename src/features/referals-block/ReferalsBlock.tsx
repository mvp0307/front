import React, { useContext, useState } from 'react';

// import { v4 as uuidv4 } from 'uuid';
import CopySvg from '../../assets/svgs/CopySvg';
import InfoSvg from '../../assets/svgs/InfoSvg';
import Tooltip from '../../components/Tooltip/Tooltip';
import { LOCAL_STORAGE_KEY } from '../../constants/localestorageKeys';
import { MainContext } from '../../context/mainContext';
import styles from './referalsBlock.module.scss';

const storageItem: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
const ReferalsBlock = () => {
  const [disabled, setDisabled] = useState(true);
  const { setModal } = useContext(MainContext);
  const handalChange = (e: any) => {
    if (e.target.value) {
      setDisabled(false);
    }
  };
  // const uniqId = useMemo(() => {
  //   return uuidv4();
  // }, []);
  const copy = () => {
    navigator.clipboard.writeText(storageItem as string);
  };
  return (
    <section className={styles.referalsSection}>
      <div className="container">
        <div className={styles.referalsBlock}>
          <div className={styles.currentCode}>
            <div className="col_">
              <h2 className={styles.referalsTitle}>
                Referral code
                <div className="tooltipWrapper">
                  <InfoSvg />
                  <Tooltip
                    id={3}
                    text1="With the help of a personal referral code, you can invite friends and increase your daily percentage."
                    text2="
                    Copy the code and ask your friend after registration, before investing, add the code to block <strong><< Referral invitation code >></strong>."
                  />
                </div>
              </h2>
            </div>
            <div className="col_">
              <div className={styles.codeBlock}>
                <p>{storageItem}</p>
                <button onClick={copy}>
                  <CopySvg />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.inviteBlock}>
            <div className="col_">
              <h2 className={styles.referalsTitle}>
                <span>Referral invitation code</span>
                <div className="tooltipWrapper">
                  <InfoSvg />
                  <Tooltip
                    id={4}
                    text1="Write the invitation code that your friend sent and click the Add button. You also have the opportunity to share your Referral Code."
                    text2="Block above <strong><< Referral code >></strong>."
                  />
                </div>
              </h2>
            </div>
            <div className="col_">
              <form action="">
                <div className={`${styles.formItem}`}>
                  <div className={styles.inputWrapper}>
                    <label htmlFor="invateID">Invitation ID</label>
                    <input
                      type="text"
                      id="invateID"
                      placeholder="Type Invitation ID"
                      onChange={handalChange}
                    />
                  </div>
                  <button
                    type="button"
                    className={styles.submitBtn}
                    disabled={disabled}
                    onClick={() => setModal('error')}
                  >
                    + Add
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

export default ReferalsBlock;
