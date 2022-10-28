import React, { useContext } from 'react';

import { MainContext } from '../../context/mainContext';
import Footer from '../../features/Footer/Footer';
import Header from '../../features/Header/Header';
import InvestmentState from '../../features/investment-state/InvestmentState';
import InvidtedUser from '../../features/invited-users/InvidtedUser';
import PriceList from '../../features/price-list/PriceList';
import ReferalsBlock from '../../features/referals-block/ReferalsBlock';

const Dashboard: React.FC = () => {
  const IS_GROSS = true;
  const { setModal } = useContext(MainContext);

  return (
    <div className="page">
      <Header />
      <div onClick={() => setModal('add-money')}>Add money Modal</div>
      {IS_GROSS ? (
        <>
          <InvestmentState />
          <div>Gross Line</div>
        </>
      ) : (
        <PriceList />
      )}
      <ReferalsBlock />
      <InvidtedUser />
      {!IS_GROSS ? <div>asasas</div> : <PriceList />}
      <Footer />
    </div>
  );
};
export default React.memo(Dashboard);
