import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { HashRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>

  , document.getElementById('root'));

