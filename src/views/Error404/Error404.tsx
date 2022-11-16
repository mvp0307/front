import React from 'react';

import ErrorPage from '../../features/error-page/ErrorPage';
import Footer from '../../features/Footer/Footer';
import Header from '../../features/Header/Header';

const Error404: React.FC = () => {
  return (
    <div className="page">
      <Header />
      <ErrorPage />
      <Footer />
    </div>
  );
};
export default React.memo(Error404);
