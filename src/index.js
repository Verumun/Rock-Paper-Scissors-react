import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main component (usually App.js)
import './index.scss'; // Import global CSS or Sass if needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
