import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css'
import '@radix-ui/themes/styles.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Theme> */}
    <App />
    {/* </Theme> */}
  </React.StrictMode>
)
