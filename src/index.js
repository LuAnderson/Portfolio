import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';
import Home from './pages';

import * as serviceWorker from './serviceWorker';

import './styles/reset.css';

ReactDOM.render((
  <>
    <GlobalStyle/>
    <Home />
  </>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
