import React, { useContext } from 'react';

import { Web3Context } from '../../context/web3Context';

const Footer: React.FC = () => {
  const { user } = useContext(Web3Context);
  console.log(user, 'user');
  return <div>Footer</div>;
};
export default React.memo(Footer);
