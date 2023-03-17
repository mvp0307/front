import React, { useState } from 'react';

// import { v4 as uuidv4 } from 'uuid';
import CopySvg from '../../assets/svgs/CopySvg';
import InfoSvg from '../../assets/svgs/InfoSvg';
import Tooltip from '../../components/Tooltip/Tooltip';
import { LOCAL_STORAGE_KEY } from '../../constants/localestorageKeys';
import styles from './referalsBlock.module.scss';

const storageItem: string | null = localStorage.getItem(LOCAL_STORAGE_KEY);
const ReferalsBlock = () => {
  const [disabled, setDisabled] = useState(true);
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
                Реферальный Код
                <div className="tooltipWrapper">
                  <InfoSvg />
                  <Tooltip
                    id={3}
                    text1="При помоши личного реферального кода вы можете пригласить друзей и поднять ваш ежедневный процент."
                    text2="Скопируйте код и попросите вашего друга после регистрации, перед тем как инвестировать, добавить код в блок <strong><<Реферальный код приглашения>></strong>."
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
                <span>Реферальный код приглашения</span>
                <div className="tooltipWrapper">
                  <InfoSvg />
                  <Tooltip
                    id={4}
                    text1="Напишите код приглашения который отправил ваш друг и нажмите кнопку Добавить.Так же у вас есть возможность поделиться своим Реферальным кодом."
                    text2="Блок выше <strong><<Личный Реферальный Код>></strong>."
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
                  <button className={styles.submitBtn} disabled={disabled}>
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
