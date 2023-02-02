import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import { applyMiddleware } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './store/index';

// const reduxDevTool =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// const store = configureStore({ reducer: rootReducer }, reduxDevTool);
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({ reducer: rootReducer });

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
