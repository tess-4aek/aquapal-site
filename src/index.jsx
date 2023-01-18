import './scss/index.scss'

import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux';
import { store } from './store';
import Loadable from 'react-loadable';

import Preloader from './components/Preloader/Preloader'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'))

// const App = Loadable({
//   loader: () => import('./App'),
//   loading: Preloader,

// });



root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
)