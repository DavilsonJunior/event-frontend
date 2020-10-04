import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './assets/styles/GlobalStyles';
import Routes from './routes';
import { store, persistor } from './store';

import './config/ReactotronConfig';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
