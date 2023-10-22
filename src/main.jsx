import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header titulo='ecetary'/>
    <App />

  </React.StrictMode>,
)
