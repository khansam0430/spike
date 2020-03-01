import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";



const feeling = (state = '', action) => {
  if(action.type === 'SET_FEELING'){
      return state = action.payload;
  }
  if (action.type === "NEW_FEEDBACK") {
    state = '';
    return state;
  }
  return state
  }
  
  const understanding = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
      return state = action.payload;
    }
    if (action.type === "NEW_FEEDBACK") {
      state = '';
      return state;
    }
    return state;
  };
  
  const supported = (state = '', action) => {
    if (action.type === 'SET_SUPPORTED') {
      return state = action.payload;
    }
    if (action.type === "NEW_FEEDBACK") {
      state = '';
      return state;
    }
    return state;
  };
  
  const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
      return state = action.payload;
    }
    if (action.type === "NEW_FEEDBACK") {
      state = '';
      return state;
    }
    return state;
  };

const reduxStore = createStore(
  combineReducers({
    feeling,
    understanding,
    supported,
    comments
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
