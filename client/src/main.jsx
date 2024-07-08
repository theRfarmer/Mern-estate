import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import AppLayout from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppLayout />
  </React.StrictMode>
);
