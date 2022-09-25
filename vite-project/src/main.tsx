import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={
          <div>Home</div>
        } />
        <Route path="*" element={
            <div id='error'>404, Page not Found</div>
        }/>
      </Routes>
    </Router>
  </React.StrictMode>
)
