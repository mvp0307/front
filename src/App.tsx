import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';
import { Suspense } from 'react';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';

import MainProvider from './context/mainContext';
import WEB3Provider from './context/web3Context';
import Routes from './router';

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({
      apiKey: 'V4sjy7waYEJZFK65EBqCnvysDYnH5yoi',
    } as any),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'InvesTonus',
    wallets: [metaMaskWallet({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
const App = () => {
  console.log(process.env.REACT_APP_ALCHEMY_API_KEY);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider modalSize="compact" chains={chains}>
          <WEB3Provider>
            <MainProvider>
              <Routes />
            </MainProvider>
          </WEB3Provider>
        </RainbowKitProvider>
      </WagmiConfig>
    </Suspense>
  );
};

export default App;
