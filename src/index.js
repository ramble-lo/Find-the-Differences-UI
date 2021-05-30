import React from 'react';
import ReactDOM from 'react-dom';
import './global/normalize.scss'
import Home from './pages/Home/index'
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

