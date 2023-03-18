import React, { useEffect, useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ContactUs from '../../features/cotact-us/ContactUs';
// import PageLoader from '../../components/PageLoader/PageLoader';
import Footer from '../../features/Footer/Footer';
import Header from '../../features/Header/Header';
import InvestitionsGross from '../../features/investitions-gross/InvestitionsGross';
import InvestitionsHero from '../../features/investitions-hero/InvestitionsHero';
import InvistitionsInviteUser from '../../features/invistitions-invite-users/InvistitionsInviteUser';
import { CHECK_INVEST, INVEST_DATA, TInvest } from './data';

const Investitions: React.FC = () => {
  const { id }: any = useParams();
  const history = useHistory();
  useEffect(() => {
    if (!CHECK_INVEST.includes(id)) {
      history.push('/');
    }
  }, []);

  const currValue: Record<string, string> = useMemo(() => {
    return INVEST_DATA[id as TInvest];
  }, []);
  return (
    <div className="page">
      <Header />
      <main>
        <InvestitionsHero value={currValue} />
        <InvestitionsGross />
        <InvistitionsInviteUser value={currValue} />
        <ContactUs />
      </main>
      <Footer />
      {/* <PageLoader /> */}
    </div>
  );
};
export default React.memo(Investitions);
