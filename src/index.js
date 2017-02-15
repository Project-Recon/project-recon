import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import App from './components/App/App.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.querySelector('#container'))
