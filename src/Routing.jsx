import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import MainParallax from './MainParallax';
import {EnterSubject} from './components';

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={EnterSubject} />
      <Route exact path="/aesthetic" component={EnterSubject} />
      <Route path="aesthetic/:subject" component={MainParallax} />
      <Route path="/:subject" component={MainParallax} />
    </Switch>
  </Router>
)

export default Routing;