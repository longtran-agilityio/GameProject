// lib
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'

// component
import App from './App'

// theme
import { theme } from '@webapp/themes/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </CssBaseline>
    </BrowserRouter>
  </React.StrictMode>,
)
