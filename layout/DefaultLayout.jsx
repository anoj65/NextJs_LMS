import React from 'react';
import Header from './Header'
import Footer from './Footer'

import { createTheme, ThemeProvider } from '@mui/material/styles';

function DefaultLayout({children}) {

  const theme = createTheme({
    palette: {
      themeColor1: {
        main: '#fbb040',
      },
      themeColor2: {
        main: '#24489e',
        contrastText: '#fff',
      },
      themeColor3: {
        main: '#414942',
      },
      highlightBg: {
        main: '#f6f5f3'
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default DefaultLayout