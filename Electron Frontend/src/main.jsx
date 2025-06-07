import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ElectronState from './context/ElectronState.jsx'

createRoot(document.getElementById('root')).render(
  <ElectronState>
    <App />
  </ElectronState>,
)
