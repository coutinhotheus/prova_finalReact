import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Detalhes from '../pages/Detalhes';
import Total from '../pages/Total';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/detalhes/:campeao" component={Detalhes} />
    <Route path="/total" exact component={Total} />
  </Switch>
);

export default Routes;
