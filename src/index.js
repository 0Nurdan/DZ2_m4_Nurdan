import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyInfo from "./homework";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <MyInfo/>
  </React.StrictMode>
);
