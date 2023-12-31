import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from './internal/App';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      {/* <BrowserRouter> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>,
);
