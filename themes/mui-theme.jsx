import { createTheme } from "@mui/material";

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
    },
    typography: {
      projectTitleHeader: { 
        fontSize: 64,
        color: '#fff',
        fontFamily: 'HarperScript',
        fontWeight: 500,
      },
      h2:{
        fontFamily: 'HarperScript',
        fontSize: 64,
        lineHeight: 1.4,
      },
      projectInfoHeader: { 
        fontSize: 22,
        color: '#fff',
        fontFamily: "manrope, sans-serif",
      },
      stepTitleHeader: {
        fontSize: 22,
        color: '#fff',
        fontFamily: "manrope, sans-serif",
        fontWeight: 600,
        [theme.breakpoints.up('md')]: {
          padding: '0px 160px'
        }
      },
      stepTitle: {
        fontSize: 20,
        color: '#fff',
        fontFamily: "manrope, sans-serif",
        fontWeight: 400,
        lineHeight: 1.5
      },
      stepText: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 600,
        fontFamily: "manrope, sans-serif",
        [theme.breakpoints.up('md')]: {
          padding: '0px 160px'
        }
      },
      miniTitle: {
        fontSize: 20,
        fontWeight: 600,
        color: '#fff',
        fontFamily: "manrope, sans-serif",
        lineHeight: 1.5,
        letterSpacing: 0
      },
      regularText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: "manrope, sans-serif",
        fontWeight: 300,
        lineHeight: 1.5,
        letterSpacing: 0
      },
      pRegularText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: "manrope, sans-serif",
        lineHeight: 1.5,
        fontWeight: 300,
        letterSpacing: 0,
        [theme.breakpoints.up('md')]: {
          padding: '32px 160px'
        }
      },
      emphasisRegularText: {
        fontSize: 28,
        color: '#fff',
        fontFamily: "manrope, sans-serif",
        lineHeight: 1.5,
        fontWeight: 500,
        letterSpacing: '-.028em',
        [theme.breakpoints.up('md')]: {
          padding: '32px 160px'
        }
      },
      caption: {
        fontSize: 14,
        color: '#fff',
        fontFamily: "manrope, sans-serif",
        lineHeight: "32px",
        fontStyle: 'italic',
        fontWeight: 400,
        letterSpacing: '-.018em'
      },
      cardCompanyHeader:{
        fontFamily: "manrope, sans-serif",
        letterSpacing: '.1em',
        color: "#fff",
        fontWeight: 200,
        lineHeight: 1.6,
      },
      cardProjectTitle:{
        fontFamily: "manrope, sans-serif",
        letterSpacing: '.1em',
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 1.5
      },
      projectType:{
        fontFamily: "manrope, sans-serif",
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 1.5
      },
      cardProjectSubtitle:{
        fontFamily: "manrope, sans-serif",
        letterSpacing: '.1em',
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 1.5
      },
      subjectText:{
        fontFamily: "manrope, sans-serif",
        fontWeight: 400, 
        fontSize: 10,
        opacity: .7
      },
      noteTitle:{ 
        fontFamily: '"Concert One", sans-serif',
        fontSize: 20
      },
      noteText:{
        fontFamily: '"Caveat", cursive'
      },
      footerTools:{
        fontSize: 16,
        color: '#fff',
        fontFamily: "manrope, sans-serif",
        fontWeight: 400,
        lineHeight: 1.6
      },
      // Disable h3 variant
      h3: undefined,
    },
    palette: {
        primary: {
            main: '#E2B921',
            light: '#283982',
            dark: '#1A2241',
        },
        secondary: {
            main: '#28F691',
            light: '#F5EBFF',
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

  export default theme;