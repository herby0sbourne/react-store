import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// // Check if HMR interface is enabled
// if (module.hot) {
//   // Accept hot update
//   module.hot.accept();
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
