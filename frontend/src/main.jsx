import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure this is from 'react-dom/client'
import './index.css'; // Your global CSS file
import App from './App'; // Import your main App component
import { BrowserRouter } from 'react-router-dom';


// Get the root element where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app inside the root element with React Strict Mode and BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

