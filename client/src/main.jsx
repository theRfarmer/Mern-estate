
import {createRoot} from 'react-dom/client';
import './index.css';
import AppLayout from './App';
import { persistor, store } from './redux/store.js';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <AppLayout />
    </PersistGate>
  </Provider>
  
);
