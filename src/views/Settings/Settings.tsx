import React from 'react';

import Footer from '../../features/Footer/Footer';
import Header from '../../features/Header/Header';
import SettingsPage from '../../features/settings-page/SettingsPage';

const Settings: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <SettingsPage />
      <Footer />
    </div>
  );
};
export default React.memo(Settings);
