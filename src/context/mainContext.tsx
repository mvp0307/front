/* eslint-disable no-unused-vars */
import React, { createContext, ReactNode, useMemo, useState } from 'react';

import { TModalTypes } from '../types';

interface MainContextInterface {
  modal: TModalTypes | '';
  setModal: (modal: TModalTypes | '') => void;
}
const initialValues = {
  modal: '',
  setModal: () => null,
};

export const MainContext = createContext<MainContextInterface>(
  initialValues as MainContextInterface
);
interface IMainProvider {
  children: ReactNode;
}

const MainProvider: React.FC<IMainProvider> = ({ children }) => {
  const [modal, setModal] = useState<TModalTypes | ''>('');
  const values = useMemo(() => {
    return {
      modal,
      setModal,
    };
  }, [modal]);
  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};

export default MainProvider;
