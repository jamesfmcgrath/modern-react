// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import App component
import App from './App';

// Get root element from HTML
const el = document.getElementById('root');
// Create root
const root = ReactDOM.createRoot(el);

// Render App
root.render(<App />);