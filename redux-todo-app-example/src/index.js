import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import todoReducer from './reducers/todoReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
