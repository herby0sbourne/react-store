import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import store, { persistor } from './redux/store';
import * as serviceWorker from './serviceWorkerRegistration';

// import configStore from './redux/rootReducer'; // Original
// const store = configStore(); // Original

if (process.env.NODE_ENV === 'development') {
  const state = store.getState();
  console.log(state);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <StyleSheetManager
            disableVendorPrefixes={process.env.NODE_ENV === 'development'}
          >
            <App />
          </StyleSheetManager>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

serviceWorker.register();
