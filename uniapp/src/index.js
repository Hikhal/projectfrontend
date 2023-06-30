// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {Provider} from 'react';
// import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux'
// import { applyMiddleware } from 'redux';
// import rootReducer from './reduxReducers/rootReducer';
// /*
//  * The thunkmiddleware allows you to write action creators that return a function instead of an action.
//  * The thunk can be used to delay the dispatch of an action, or to dispatch only if certain conditions are met.
//  */
// import ThunkMiddleware  from 'redux-thunk'; 
// import axios from 'axios';
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { createLogger } from 'redux-logger';

// // * middleware in redux is a way to increase functionality of redux: e.g talking to an asynchronous API, loging etc.

// const logger = createLogger({collapsed: true})
// const middleware = composeWithDevTools(
//   applyMiddleware(ThunkMiddleware.withExtraArgument({axios}), logger)
// )

// /**
//  * - create a new Redux store that holds the complete state tree of our uniapp. 
//  * - It needs a reducer function as the first argument, and optionally you can pass enhancer as the second argument.
//  * - In this case, rootReducer is passed as the reducer, and middleware
//  * - (which includes the thunk and logging middleware, properly set up for use with DevTools)
//  * - is passed as the enhancer. 
//  */
// const store = createStore(rootReducer, middleware)
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store = {store}>
//     <App />
//   </Provider>
// );

// reportWebVitals()

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reduxReducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const logger = createLogger({ collapsed: true });
const middleware = [thunk, logger]; // Specify the middleware as an array

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware))); // Use spread syntax to apply multiple middleware

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();



