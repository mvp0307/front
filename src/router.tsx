import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import HomePage from './views/HomePage/HomePage';
import Map from './views/Map/Map';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/map/:id">
            <Map />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route>404 Page</Route>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routes;
