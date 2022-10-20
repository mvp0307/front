import React from 'react';
import { useHistory } from 'react-router-dom';

import { TUser } from '../../context/context.types';
import { ERoutes } from '../../types';

interface IProtectedRoute {
  user: TUser | null;
  children: JSX.Element;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ user, children }) => {
  const history = useHistory();
  if (!user) {
    history.push(ERoutes.Home);
  }

  return children;
};

export default React.memo(ProtectedRoute);
