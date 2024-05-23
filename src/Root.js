import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import App from './App'; // Import your App component
import Login from './Login'; // Import your Login component

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Route for the main App component */}
        <Route path="/login" element={<Login />} /> {/* Route for the Login component */}
      </Routes>
    </BrowserRouter>
  );
}

export default Root; // Export the Root component as default
