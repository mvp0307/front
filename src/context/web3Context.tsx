/* eslint-disable no-unused-vars */
import React, { createContext, ReactNode, useMemo, useState } from 'react';

interface Web3ContextInterface {
  user: any;
  setUser: (currentUser: any) => void;
}

const initialValues = {
  user: null,
  setUser: () => null,
};

export const Web3Context = createContext<Web3ContextInterface>(initialValues);
interface IWEB3Provider {
  children: ReactNode;
}

const WEB3Provider: React.FC<IWEB3Provider> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const values = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user]);
  return <Web3Context.Provider value={values}>{children}</Web3Context.Provider>;
};

export default WEB3Provider;
