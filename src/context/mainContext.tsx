/* eslint-disable no-unused-vars */
import React, { createContext, ReactNode, useMemo, useState } from 'react';

interface MainContextInterface {
  data: any;
  setData: (currentUser: any) => void;
}

export const MainContext = createContext<MainContextInterface | null>(null);
interface IMainProvider {
  children: ReactNode;
}

const MainProvider: React.FC<IMainProvider> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const values = useMemo(() => {
    return {
      data,
      setData,
    };
  }, [data]);
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default MainProvider;
