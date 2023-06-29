import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'react-redux'
import { applyMiddleware } from 'redux';
/*
 * The thunkmiddleware allows you to write action creators that return a function instead of an action.
 * The thunk can be used to delay the dispatch of an action, or to dispatch only if certain conditions are met.
 */
import ThunkMiddleware  from 'redux-thunk'; 
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger';

// * middleware in redux is a way to increase functionality of redux: e.g talking to an asynchronous API, loging etc.

const logger = createLogger({collapsed: true})
const middleware = composeWithDevTools(
  applyMiddleware(ThunkMiddleware.withExtraArgument({axios}), logger)
)

/**
 * - create a new Redux store that holds the complete state tree of our uniapp. 
 * - It needs a reducer function as the first argument, and optionally you can pass enhancer as the second argument.
 * - In this case, rootReducer is passed as the reducer, and middleware
 * - (which includes the thunk and logging middleware, properly set up for use with DevTools)
 * - is passed as the enhancer. 
 */
const store = createStore(rootReducer, middleware)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
