import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers/index';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(allReducers, composeWithDevTools())



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  
  , document.getElementById('root'));


serviceWorker.unregister();
