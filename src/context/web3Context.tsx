/* eslint-disable no-unused-vars */
import React, { createContext, ReactNode, useMemo, useState } from 'react';

import { TConnectReconnectStatuses, TUser } from './context.types';

interface Web3ContextInterface {
  user: TUser | null;
  setUser: (currentUser: TUser | null) => void;
  connectOrReconnect: TConnectReconnectStatuses | string;
  setConnectOrReconnect: (status: TConnectReconnectStatuses) => void;
}

const initialValues = {
  user: null,
  setUser: () => null,
  connectOrReconnect: 'pending',
  setConnectOrReconnect: () => null,
};

export const Web3Context = createContext<Web3ContextInterface>(initialValues);
interface IWEB3Provider {
  children: ReactNode;
}

const WEB3Provider: React.FC<IWEB3Provider> = ({ children }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [connectOrReconnect, setConnectOrReconnect] =
    useState<TConnectReconnectStatuses>('pending');

  const values = useMemo(() => {
    return {
      user,
      setUser,
      connectOrReconnect,
      setConnectOrReconnect,
    };
  }, [user, connectOrReconnect]);
  return <Web3Context.Provider value={values}>{children}</Web3Context.Provider>;
};

export default WEB3Provider;
