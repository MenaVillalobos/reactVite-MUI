import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme ({
  palette:{
    mode: 'light',
      primary: {
        main: '#0288d1',
        box: '#4DD0E1'
    },
    secondary: {
      main: '#FF6198',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {darkTheme} >
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
