import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Display from './Display/Display.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/display" element={<Display/>} />
      </Routes>
    </Router>
    
  </React.StrictMode>,
)
