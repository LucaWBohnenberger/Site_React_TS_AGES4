import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/index.css'
import AppRouter from '../src/routes/AppRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
