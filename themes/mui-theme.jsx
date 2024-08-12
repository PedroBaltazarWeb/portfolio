import { createTheme } from "@mui/material";

let theme = createTheme()

theme = createTheme(theme , {
    typography: {
      projectTitleHeader: { 
          fontSize: 40,
          color: '#fff',
          fontFamily: "Work Sans, sans-serif",
          fontWeight: 500,
          textTransform: 'uppercase'
        },
      projectInfoHeader: { 
        fontSize: 28,
        color: '#0D6EFD',
        fontFamily: "Work Sans, sans-serif",
        textTransform: 'uppercase'
      },
      stepTitleHeader: {
        fontSize: 22,
        color: '#fff',
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        [theme.breakpoints.up('md')]: {
          padding: '0px 160px'
        }
      },
      stepTitle: {
        fontSize: 22,
        color: '#fff',
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
      },
      stepText: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 600,
        fontFamily: "Work Sans, sans-serif",
        [theme.breakpoints.up('md')]: {
          padding: '0px 160px'
        }
      },
      miniTitle: {
        fontSize: 20,
        fontWeight: 700,
        color: '#fff',
        fontFamily: "Work Sans, sans-serif",
        lineHeight: 1.5,
        letterSpacing: '-.018em'
      },
      regularText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: "Work Sans, sans-serif",
        lineHeight: "38px",
        fontWeight: 400,
        letterSpacing: '-.018em'
      },
      pRegularText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: "Work Sans, sans-serif",
        lineHeight: "38px",
        fontWeight: 400,
        letterSpacing: '-.018em',
        [theme.breakpoints.up('md')]: {
          padding: '32px 160px'
        }
      },
      emphasisRegularText: {
        fontSize: 28,
        color: '#fff',
        fontFamily: "Work Sans, sans-serif",
        lineHeight: "48px",
        fontWeight: 500,
        letterSpacing: '-.028em',
        [theme.breakpoints.up('md')]: {
          padding: '32px 160px'
        }
      },
      caption: {
        fontSize: 14,
        color: '#fff',
        fontFamily: "Work Sans, sans-serif",
        lineHeight: "36px",
        fontStyle: 'italic',
        fontWeight: 400,
        letterSpacing: '-.018em'
      },
      cardCompanyHeader:{
        fontFamily: "Work Sans, sans-serif", 
        letterSpacing: '.1em',
        color: "#0d6efd"
      },
      cardProjectTitle:{
        fontFamily: "'Noto Sans', sans-serif", 
        letterSpacing: '.1em',
        fontSize: '1.5rem',
        fontWeight: '500',
        lineHeight: '1.2'
      },
      subjectText:{
        fontFamily: "'Noto Sans', sans-serif", 
        fontWeight: 400, 
        fontSize: 10,
        opacity: .7
      },
      // Disable h3 variant
      h3: undefined,
    },
    palette: {
        primary: {
            main: '#111E56',
            light: '#283982',
            dark: '#1A2241',
        },
        secondary: {
            main: '#E0C2FF',
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