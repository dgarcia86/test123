import { render } from 'react-snapshot';
import React from 'react';
import './index.css';
import App from './App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
