import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'; 

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { quotesReducer } from './scenes/Quotes/reducers';
import { gameBoardReducer } from './scenes/GameBoard/reducers';
import { newQuotesReducer } from './scenes/NewQuotes/reducers';

const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer  = combineReducers({
  quotesReducer,
  newQuotesReducer,
  gameBoardReducer,
  router: routerReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(middleware, thunk)
  )
); 

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
