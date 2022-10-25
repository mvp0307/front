import React from 'react';

import Footer from '../../features/Footer/Footer';
import Header from '../../features/Header/Header';
import InvidtedUser from '../../features/invited-users/InvidtedUser';
import PriceList from '../../features/price-list/PriceList';
import ReferalsBlock from '../../features/referals-block/ReferalsBlock';

const Dashboard: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <PriceList />
      <ReferalsBlock />
      <InvidtedUser />
      <Footer />
    </div>
  );
};
export default React.memo(Dashboard);
