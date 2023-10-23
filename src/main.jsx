import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Table from './pages/table'
import './index.css'
import 'tw-elements';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
