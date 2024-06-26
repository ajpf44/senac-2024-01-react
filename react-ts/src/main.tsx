import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthCtxProvider from './contexts/auth.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <AuthCtxProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthCtxProvider>
  </React.StrictMode>,
)
