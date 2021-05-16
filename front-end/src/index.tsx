import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from 'store';
import GlobalStyle from 'assets/style/style';

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

