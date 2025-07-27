import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import Router
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  {/* ✅ This wraps your entire app */}
    <App />
  </BrowserRouter>
);
