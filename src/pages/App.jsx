import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout';
import Home from './Home';
import { Helmet } from "react-helmet";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const App = () => {
  const [isClient, setIsClient] = useState(false);
 
const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
  noSsr: true,
});
  
  const theme = React.useMemo(
    () =>
      createTheme({
        components: {
          MuiTypography: {
            styleOverrides: {
              root: {
                color: prefersDarkMode ? '#f5f5f5' : '#444444',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                color: "#ffffff",
                minHeight: 50
              },
            },
          },
          MuiListItemIcon: {
            styleOverrides: {
              root: {
                minWidth: 32
              }
            }
          }
        },
        typography: {
          fontFamily: 'Inter',
          fontFeatureSettings: 'kern',
          fontKerning: 'normal',
          body:{
            fontSize: '1rem',
            lineHeight: '1.5rem',
            fontWeight: 400,
          },
          h1:{
            fontSize: '2rem',
            lineHeight: '2.5rem',
            fontWeight: 500
          },
          h2:{
            fontSize: '1.5rem',
            lineHeight: '1.7rem',
          },
          h3:{
            fontSize: '1.2rem',
            lineHeight: '1.2rem',
            fontWeight: 500
          },
          h4:{
            fontSize: '1.1rem',
            lineHeight: '1.2rem',
          },
          caption:{
            fontSize: '0.8rem',
            lineHeight: '2.4rem',
          },
          bigText:{
            fontSize: '2rem',
            lineHeight: '2.4rem',
          },
        },
        shape:{
          borderRadius: 16,
        },
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
              main: '#E2B921',
              light: '#283982',
              dark: '#1A2241',
          },
          secondary: {
              main: 'rgb(174 187 255)',
              light: '#F5EBFF',
              dark: '#020528',
              contrastText: '#47008F',
          },
          text: {
            primary: '#FFFFFF',
            secondary: 'rgba(255, 255, 255, 0.7)',
            disabled: 'rgba(255, 255, 255, 0.5)',
            icon: 'rgba(255, 255, 255, 0.5)',
            divider: 'rgba(255, 255, 255, 0.12)'
          },
          background:{
            paper: '#04061B',
            default: prefersDarkMode ? '#020528' : '#fff'
          }              
        },
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        }
      }),
    [prefersDarkMode],
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }
 

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Layout>
          <Helmet>
        <title>Pedro Baltazar</title>
      </Helmet>
          <Home path="/Home" />
        </Layout>
    </ThemeProvider>
  );
};

export default App;