import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { quotesReducer } from './scenes/Quotes/reducers/';
import { newQuotesReducer } from './scenes/NewQuotes/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer  = combineReducers(
  {
    quotesReducer,
    newQuotesReducer
  }
);

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
); 

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
