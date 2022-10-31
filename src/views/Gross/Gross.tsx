import React from 'react';

import ContactUs from '../../features/cotact-us/ContactUs';
import Footer from '../../features/Footer/Footer';
import GrossBonusActions from '../../features/gross-bonus-actions/GrossBonusActions';
import GrossStatisic from '../../features/gross-statistic/GrossStatisic';
import Header from '../../features/Header/Header';
import HowToGross from '../../features/how-to-gross/HowToGross';

const Gross: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <HowToGross />
        <GrossStatisic />
        <GrossBonusActions />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};
export default React.memo(Gross);
