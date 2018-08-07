import React from 'react';
import ReactDom from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';

import Routes from './Routes';
import App from './shared/App';
import './api/config';
import { configureStore, history } from './store/configureStore';
import './style/style.less';

ReactDom.render(
  <Provider store={configureStore}>
    <ConnectedRouter history={history}>
      <App>
        <Routes />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
