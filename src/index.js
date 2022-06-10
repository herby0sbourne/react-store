import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from './redux/rootReducer';
import App from './App';

const store = configStore();

const state = store.getState();
console.log(state);
// // Check if HMR interface is enabled
// if (module.hot) {
//   // Accept hot update
//   module.hot.accept();
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
