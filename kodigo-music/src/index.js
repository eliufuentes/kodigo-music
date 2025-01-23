import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import './index.css'; // Estilos personalizados (opcional)
import App from './App'; // Componente principal
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Reportes de rendimiento (opcional)
reportWebVitals();
