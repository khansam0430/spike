import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";


const feeling = (state = [], action) => {
  // TODO - set feedback with data from server
    if(action.type === 'SET_FEELING'){
        return [action.payload]
    }
    return state
}

const understanding = (state = [], action) => {
  // TODO - set feedback with data from server
    if(action.type === 'SET_UNDERSTANDING'){
        return [...state,action.payload]
    }
    return state
}

const supported = (state = [], action) => {
  // TODO - set feedback with data from server
    if(action.type === 'SET_SUPPORTED'){
        return [...state,action.payload]
    }
    return state
}

const comments = (state = [], action) => {
  // TODO - set feedback with data from server
    if(action.type === 'SET_COMMENTS'){
        return [...state,action.payload]
    }
    return state
}

const review = (state = [], action) => {
  // TODO - set feedback with data from server
    if(action.type === 'SET_REVIEW'){
        state= '';
        return action.payload
    }
    return state
}


const reduxStore = createStore(
  combineReducers({
    feeling,
    understanding,
    supported,
    comments,
    review
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
