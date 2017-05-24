import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import MainParallax from './MainParallax';
import {EnterSubject} from './components';

const Routing = () => (
  <Router>
    <div className="routing">
      <Route exact path="/" component={EnterSubject} />
      <Route path="/:subject" component={MainParallax} />
    </div>
  </Router>
)

export default Routing;