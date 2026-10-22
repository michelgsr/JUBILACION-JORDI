import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// Tipografías alojadas en el propio proyecto (sin depender de servicios externos).
import '@fontsource/cormorant-garamond/latin-400.css';
import '@fontsource/cormorant-garamond/latin-500.css';
import '@fontsource/cormorant-garamond/latin-600.css';
import '@fontsource/cormorant-garamond/latin-400-italic.css';
import '@fontsource/cormorant-garamond/latin-500-italic.css';
import '@fontsource/lato/latin-400.css';
import '@fontsource/lato/latin-700.css';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
