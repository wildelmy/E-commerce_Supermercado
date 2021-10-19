import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/Store'
import { Provider } from 'react-redux'
import './style/styls.css'
import { AppRouter } from './router/AppRouter'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  document.getElementById('root')
);