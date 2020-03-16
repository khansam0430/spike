import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render( <BrowserRouter><Route path="/" component={App}/></BrowserRouter>,
document.getElementById('root')
);
