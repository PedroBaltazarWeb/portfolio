import React from 'react';
import { createTheme } from '@mui/material/styles';

const getTheme = (prefersDarkMode) => createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*:focus-visible": {
          outline: "3px solid #ff9900", // cor vibrante (Amazon)
          outlineOffset: "2px",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          background: prefersDarkMode ? '#010312' : '#EEFAFF',
          '& .MuiTableRow-head':{
            background: prefersDarkMode ? '#04061B' : '#DDF5FF',
          }
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: prefersDarkMode ? '#f5f5f5' : '#181818',
          '&.note-title':{
            color: '#0c5777',
          }
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "&.Mui-focusVisible": {
            outline: "3px solid #ff9900",
            outlineOffset: "2px",
            zIndex: 1
          },
        },
      },
    },
    MuiAccordion:{
      styleOverrides: {
        root: {
          background: prefersDarkMode ? '#04061B' : '#DDF5FF',
          border: '1px solid',
          borderColor: prefersDarkMode ? '#00D76D' : '#0002ff',
          boxShadow: 'none',
          '&.MuiAccordion-root:not(:first-of-type)': {
              borderTop: 'none',
              '&.Mui-expanded':{
              borderTop: '1px solid',
              borderTopColor: prefersDarkMode ? '#00D76D' : '#0002ff',
            },
          },
          '& .MuiAccordionSummary-expandIconWrapper':{
            color: prefersDarkMode ? '#00D76D' : '#0002ff',
          },
          '&::before':{
            borderTop: '1px solid',
            borderTopColor: prefersDarkMode ? '#00D76D' : '#0002ff',
          },
          
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: prefersDarkMode ? '#f5f5f5' : '#181818',
          minHeight: 50,
          minWidth: 150, 
          minHeight: 50,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          "&:focus-visible": {
            outline: "3px solid #ff9900",
            outlineOffset: "2px",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'unset'
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 32,
          justifyContent: 'center',
          marginRight: '0.5rem'
        }
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: '#fff',
          backgroundColor: 'unset'
        }
      }
    }
  },
  typography: {
    fontFamily: 'Manrope',
    fontFeatureSettings: 'kern',
    fontKerning: 'normal',
    intro:{
      fontFamily: 'Manrope',
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: '2.25rem',
      letterSpacing: '-0.02rem'
    },
    projectDescription:{
      fontFamily: 'Manrope',
      fontSize: '1.2rem',
      fontWeight: 400,
      lineHeight: '1.8rem',
    },
    phaseProjectTitle:{
      fontFamily: 'Manrope',
      fontSize: '1.15rem',
      color: '#e4e6ff !important',
      fontWeight: 500,
      lineHeight: '1.875rem',
    },
    phaseProjectSubTitle:{
      fontFamily: 'Manrope',
      fontSize: '1rem',
      color: '#e4e6ff !important',
      fontWeight: 600,
      lineHeight: '1.55rem',
    },
    body:{
      fontFamily: 'Manrope',
      fontSize: '1rem',
      lineHeight: '1.55rem',
      fontWeight: 400
    },
    bodyColorful:{
      fontFamily: 'Manrope',
      fontSize: '1rem',
      lineHeight: '1.55rem',
      fontWeight: 400,
      color: '#dde0ff !important'
    },
    body2:{
      fontFamily: 'Manrope',
      fontSize: '1.1rem',
      lineHeight: '1.55rem',
      fontWeight: 500,
    },
    h1:{
      fontFamily: 'Manrope',
      fontSize: '2rem',
      lineHeight: '2.5rem',
      fontWeight: 500
    },
    h2:{
      fontFamily: 'Manrope',
      fontSize: '1.6rem',
      lineHeight: '2.4rem',
      fontWeight: 500
    },
    h3:{
      fontFamily: 'Manrope',
      fontSize: '1.4rem',
      lineHeight: '1.6rem',
      fontWeight: 500
    },
    caption:{
      fontFamily: 'Manrope',
      fontSize: '0.8rem',
      lineHeight: '1.2rem',
    },
    bigText:{
      fontFamily: 'Manrope',
      fontSize: '2rem',
      lineHeight: '2.8rem'
    },
    noteTitle:{
      fontFamily: '"Concert One", sans-serif',
      fontSize: 20,
      color: '#0c5777'
    },
    noteText:{
      fontFamily: '"Caveat", cursive'
    },
  },
  shape:{
    borderRadius: 8,
  },
  palette: {
    mode: prefersDarkMode ? 'dark' : 'light',
    primary: {
        main: prefersDarkMode ? '#00D76D' : '#004DFF',
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
      primary: prefersDarkMode ? '#f5f5f5' : '#181818',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
      divider: 'rgba(255, 255, 255, 0.12)',
      link: prefersDarkMode ? '#00D76D' : '#0002ff',
      highlight: prefersDarkMode ? '#FFEE00' : '#004cff'
    },
    background:{
      paper: prefersDarkMode ? '#04061B' : '#f1faff',
      default: prefersDarkMode ? '#020528' : '#e3f2ff'
    },
    card: {
      border: prefersDarkMode ? '#6f6f6f' : '#545454',
      link: prefersDarkMode ? '#00D76D' : '#0002ff',
    },            
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: [0, '0.5rem', '1rem', '2rem', '4rem', '8rem'],
})

export default getTheme;