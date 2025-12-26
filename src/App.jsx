import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { blue, pink } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import NavBar from './components/NavBar';

// Theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: blue[500]
    },
    secondary: {
      main: pink[500]
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  }
});

function App() {
  // Scroller
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
       <Typography variant='h4'>This is an app acomponent.</Typography> 
        <NavBar></NavBar>
      </Box>
    </ThemeProvider>
    </>
  )
}

export default App
