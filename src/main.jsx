import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/main.scss'
import './i18n/translation.js'

createRoot(document.getElementById('root')).render(
  <App />
)
