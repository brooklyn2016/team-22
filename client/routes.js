import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Issac from './components/Issac';

import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import QuestionThree from './components/QuestionThree';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/leaderboard" component={Home} />
      <Route path="/friends" component={Home} />
      <Route path="/lesson" component={Issac} />
      <Route path="/q1" component={QuestionOne} />
      <Route path="/q2" component={QuestionTwo} />
      <Route path="/q3" component={QuestionThree} />
  </Route>
);
