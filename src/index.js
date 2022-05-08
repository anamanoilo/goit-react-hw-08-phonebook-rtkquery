import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from 'components/App';
import './index.css';
import unitedStores from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={unitedStores.store}>
    <PersistGate loading={null} persistor={unitedStores.persistedStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
