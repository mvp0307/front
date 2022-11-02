import React from 'react';

import ContactUs from '../../features/cotact-us/ContactUs';
// import PageLoader from '../../components/PageLoader/PageLoader';
import Footer from '../../features/Footer/Footer';
import Header from '../../features/Header/Header';
import InvestitionsGross from '../../features/investitions-gross/InvestitionsGross';
import InvestitionsHero from '../../features/investitions-hero/InvestitionsHero';
import InvistitionsInviteUser from '../../features/invistitions-invite-users/InvistitionsInviteUser';

const Investitions: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <InvestitionsHero />
        <InvestitionsGross />
        <InvistitionsInviteUser />
        <ContactUs />
      </main>
      <Footer />
      {/* <PageLoader /> */}
    </div>
  );
};
export default React.memo(Investitions);
