/* import { createTheme } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
let theme = createTheme()

theme = createTheme(theme , {
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontKerning: 'normal',
            letterSpacing: 0,
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
          font-family: 'HarperScript';
          src: url('/fonts/HarperScript-Rounded.woff2') format('woff2'),
               url('/fonts/HarperScript-Rounded.woff') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
      `,
      },
      MuiButton: {
        styleOverrides: {
          root: {
            fontFamily: "manrope, sans-serif",
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
        color: "#fff"
      },
      h1:{
        fontSize: '2rem',
        lineHeight: '2.5rem',
      },
      h2:{
        fontSize: '1.5rem',
        lineHeight: '1.7rem',
      },
      h3:{
        fontSize: '1.2rem',
        lineHeight: '1.2rem',
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
    palette: {
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
        action: {
            main: '#FFFFFF',
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
  });

  export default theme; */