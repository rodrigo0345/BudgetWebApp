import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import AuthProvider from './contexts/AuthContext'
import Main from './components/Main'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <Main></Main>
          } />
          <Route path="*" element={
              <div id='error'>404, Page not Found</div>
          }/>
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
)
