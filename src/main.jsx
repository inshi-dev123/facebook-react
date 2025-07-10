import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './components/login.jsx'
import Left from './components/Left.jsx'

createRoot(document.getElementById('root')).render(
    <App/>
)
