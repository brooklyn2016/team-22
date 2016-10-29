import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Issac from './components/Issac';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/leaderboard" component={Home} />
      <Route path="/friends" component={Home} />
      <Route path="/lesson" component={Issac} />
  </Route>
);
