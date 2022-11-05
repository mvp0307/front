import '@rainbow-me/rainbowkit/styles.css';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Avatar from 'boring-avatars';
import React from 'react';

import MetamaskSvg from '../../assets/svgs/MetamaskSvg';
import { AVATAR } from '../../constants/avatart';
import { SCREENS } from '../../constants/screens';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './connectWallet.module.scss';

const ConnectWallet: React.FC = () => {
  const isMobile = useMediaQuery(SCREENS.mobile);
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        return (
          <div
            {...(!mounted && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    id="connect_button"
                    onClick={openConnectModal}
                    type="button"
                    className={styles.connectWallerButton}
                  >
                    <MetamaskSvg /> Connect {!isMobile && 'MetaMask'}
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button className={styles.wrong} onClick={openChainModal} type="button">
                    Wrong network !
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center', background: 'aquamarine' }}
                    type="button"
                  >
                    {chain.name}
                  </button>

                  <div className={styles.creds} onClick={openAccountModal}>
                    <div>{account.displayBalance ? `${account.displayBalance}` : ''}</div>
                    <div className={styles.address}>
                      <Avatar
                        size={AVATAR.size}
                        name={account.address}
                        variant={AVATAR.variant as any}
                        colors={AVATAR.colorScheme}
                      />
                      <div>{account.displayName}</div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default ConnectWallet;
