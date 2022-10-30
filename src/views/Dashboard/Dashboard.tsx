import React, { useContext } from 'react';

import { MainContext } from '../../context/mainContext';
import Footer from '../../features/Footer/Footer';
import GrossLine from '../../features/gross-line/GrossLine';
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

      {IS_GROSS ? (
        <>
          <InvestmentState />
          <GrossLine />
        </>
      ) : (
        <PriceList />
      )}
      <div onClick={() => setModal('add-money')} className="d_modal_primaryBtn">
        Show monetization map
      </div>
      <ReferalsBlock />
      <InvidtedUser />
      {!IS_GROSS ? <div>asasas</div> : <PriceList />}
      <Footer />
    </div>
  );
};
export default React.memo(Dashboard);
