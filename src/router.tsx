/* eslint-disable no-constant-condition */
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useAccount, useBalance } from 'wagmi';

import PageLoader from './components/PageLoader/PageLoader';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { Web3Context } from './context/web3Context';
import ModalWrapper from './features/modal/modal';
import { ERoutes } from './types';
import Dashboard from './views/Dashboard/Dashboard';
import Error404 from './views/Error404/Error404';
import Gross from './views/Gross/Gross';
import HomePage from './views/HomePage/HomePage';
import Investitions from './views/Investitions/Investitions';
import Map from './views/Map/Map';
import Settings from './views/Settings/Settings';

const Routes: React.FC = () => {
  const [address, setAddress] = useState<string>('');
  const { setUser, setConnectOrReconnect, connectOrReconnect, user } = useContext(Web3Context);
  const { isConnected, isReconnecting, isConnecting } = useAccount({
    onConnect({ address, connector, isReconnected }) {
      console.log('Connected', { address, connector, isReconnected });
      setAddress(address as string);
    },
    onDisconnect() {
      setUser(null);
      setAddress('');
    },
  });

  const { refetch } = useBalance({
    addressOrName: address,
    enabled: Boolean(address),
    onSuccess(succesData) {
      setUser({
        address,
        balance: succesData.formatted,
      });
      setConnectOrReconnect('fulfield');
    },
    onError() {
      setUser(null);
      setConnectOrReconnect('pending');
      setAddress('');
    },
  });
  useEffect(() => {
    if (address) {
      refetch();
    }
  }, [address]);
  useEffect(() => {
    if (isConnecting) {
      setConnectOrReconnect('pending');
    }
  }, [isConnecting]);
  useEffect(() => {
    if (!isConnecting && !isReconnecting) {
      if (!isConnected) {
        setConnectOrReconnect('fulfield');
      }
    }
  }, [isReconnecting, isConnecting]);
  return (
    <BrowserRouter>
      <ModalWrapper />
      <ScrollToTop>
        {connectOrReconnect !== 'pending' ? (
          <Switch>
            <Route exact path={`${ERoutes.Map}/:id`}>
              <Map />
            </Route>
            <Route exact path={`${ERoutes.Dashboard}`}>
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            </Route>
            <Route exact path={`${ERoutes.Home}`}>
              <HomePage />
            </Route>
            <Route exact path={`${ERoutes.Investitions}`}>
              <Investitions />
            </Route>
            <Route exact path={`${ERoutes.Gross}`}>
              <Gross />
            </Route>
            <Route exact path={`${ERoutes.Settings}`}>
              <Settings />
            </Route>
            <Route>
              <Error404 />
            </Route>
          </Switch>
        ) : (
          <PageLoader />
        )}
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routes;
