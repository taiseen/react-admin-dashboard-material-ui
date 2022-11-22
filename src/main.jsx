import { ProSidebarProvider } from 'react-pro-sidebar';
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './styles/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ProSidebarProvider>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </ProSidebarProvider>
)
