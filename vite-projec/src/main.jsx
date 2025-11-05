// src/main.jsx (o main.js)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Asegúrate de que la extensión coincida (.jsx o .js)
import './index.css';         // Archivo de estilos global (puedes borrar su contenido)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);