import { Suspense } from 'react';

import ConnectWallet from './components/ConnectWallet/ConnectWallet';
import Routes from './router';

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
      <ConnectWallet />
    </div>
  );
};

export default App;
