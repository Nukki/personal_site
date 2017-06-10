
/***
 *      _   _ _ _    _    _       _            _
 *     | \ | (_) | _| | _(_)     | | __ _  ___| | __
 *     |  \| | | |/ / |/ / |  _  | |/ _` |/ __| |/ /
 *     | |\  | |   <|   <| | | |_| | (_| | (__|   <
 *     |_| \_|_|_|\_\_|\_\_|  \___/ \__,_|\___|_|\_\
 *
 */

import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';

import App from './components/App';
import Terminal from './components/Terminal';
import Hello from './components/Hello';
import TerminalWindow from './components/TerminalWindow';


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/hello" component={Hello} />
      <Route path="/term" component={TerminalWindow} />
      <IndexRedirect to="/hello" />
    </Route>
  </Router>
);
