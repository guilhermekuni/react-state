import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import WaterState from '../pages/WaterState';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/water-state" component={WaterState} />
  </Switch>
);

export default Routes;