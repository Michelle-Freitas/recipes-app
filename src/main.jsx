import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes'

import { theme } from './Theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle.style';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter/>
    {/* <App /> */}
    </ThemeProvider>
  </React.StrictMode>
)
