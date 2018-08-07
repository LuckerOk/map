import { applyMiddleware, createStore } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import logics from '../logic';
import reducers from '../reducers';

export const history = createHistory();
const logicMiddleware = createLogicMiddleware(logics);
const reactRouterMiddleware = routerMiddleware(history);
const middlewares = [
  logicMiddleware,
  reactRouterMiddleware
];
export const configureStore = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
