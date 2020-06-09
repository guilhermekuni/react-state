import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import WaterState from '../pages/WaterState';
import Counter from '../pages/Counter';
import Form from '../pages/Form';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/water-state" component={WaterState} />
    <Route path="/counter" component={Counter} />
    <Route path="/form" component={Form} />
  </Switch>
);

export default Routes;