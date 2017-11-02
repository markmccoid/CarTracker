import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import 'semantic-ui-css/semantic.min.css';

import AppRouter, { history } from './routers/AppRouter';

import './styles/styles.scss';

import configureStore from './store/configureStore';

import * as serviceActions from './actions/services';
import * as carActions from './actions/cars';
import * as filterActions from './actions/filters';
import getVisibleServices from './store/selectors/services';
import { firebase } from './firebase/firebase';

const store = configureStore();

//store.dispatch(carActions.startSetCars());


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // store.dispatch(startSetExpenses()).then(() => {
    //   renderApp();
    //   if (history.location.pathname === '/') {
    //     history.push('/dashboard');
    //   }
    // });
    console.log('logged in');
    renderApp();
  } else {
    renderApp();
    history.push('/');
  }
});

// ReactDOM.render((<Provider store={store}>
//                     <AppRouter />
//                   </Provider>), document.getElementById('app'));
