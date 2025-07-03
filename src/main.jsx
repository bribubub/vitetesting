import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import CSS global
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter dari react-router-dom

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Bungkus seluruh aplikasi dengan BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);