import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddelware = applyMiddleware(){createStore};

ReactDOM.render(
  <Provider store={createStoreWithMiddelware(reducers)}>
    <App />
  </Provider>
, document.querySelector('.container'));
