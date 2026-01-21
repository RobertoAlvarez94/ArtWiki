import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Use HashRouter or BrowserRouter with basename. 
// BrowserRouter is cleaner but requires server config for SPA fallback.
// GitHub Pages supports cleaner URLs easily with a 404 hack, but HashRouter is safest for zero-config.
// However, standard specific instruction for GH Pages is usually basename if using BrowserRouter and copying index.html to 404.html.
// Let's use BrowserRouter with basename 'ArtWiki' as configured in vite.config.js base.

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
