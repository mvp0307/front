import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface IScrollToTopProps {
  children: React.ReactNode;
}
const ScrollToTop: React.FC<IScrollToTopProps> = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 20);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
