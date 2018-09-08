import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import AppLayout from './layouts/AppLayout/AppLayout';
import './index.css';
import configStore from './store/configureStore';
import { appActionCreator } from './actions';

const store = configStore();

//get the API URL and save it into a global 'CONFIG' object
let configFilePath = '/config.dev.json';

this.getConfig = () => {
  return axios
    .get(configFilePath)
    .then(res => {
      store.dispatch(appActionCreator.configLoaded(res.data));
    })
    .catch(err => {
      console.log('Error reading config.json');
    });
};

this.getConfig()
  .then(() => {
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter basename="/">
          <AppLayout />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  })
  .catch(err => console.log('Axios config file err: ', err));
