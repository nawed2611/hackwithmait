import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Table from './pages/innovative_table'
import SPTable from './pages/sponser_table'

import './index.css'
import 'tw-elements';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpTable from './pages/sponser_table'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/table" element={<Table />} />
        <Route path="/sptable" element={<SpTable />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
