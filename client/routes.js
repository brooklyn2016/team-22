import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Issac from './components/Issac';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';


import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionThree from './components/QuestionThree';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/lesson" component={Issac} />
      <Route path="/q1" component={QuestionOne} />
      <Route path="/q2" component={QuestionTwo} />
      <Route path="/q3" component={QuestionThree} />
  </Route>
);
