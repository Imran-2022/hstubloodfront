import React from 'react';
import ReactDOM from 'react-dom/client';
import './common.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ScrollToTop from './ScrollToTop';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <ScrollToTop />
    <App />
  </BrowserRouter>
);