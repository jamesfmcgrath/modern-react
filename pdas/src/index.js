// Import statements
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Render App component
// Get root element from DOM
const el = document.getElementById('root');
// Create root
const root = ReactDOM.createRoot(el);
// Render App component
root.render(<App />);
