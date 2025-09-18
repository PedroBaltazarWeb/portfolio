import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout';
import Home from './Home';
import MillerVillageTycoon from './millerVillageTycoon';
import MpdsWeb from './mpdsWeb';
import MpdsWounds from './mpdsWounds';
import Neuro from './neuro';
import PrismaEsocialProduz from './prismaEsocialProduz';
import { Helmet } from "react-helmet";
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import getTheme from '../../themes/mui-theme';
import Footer from './../components/Footer'

const App = () => {
/* const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
  noSsr: true,
}); */
const prefersDarkMode = true;
const theme = React.useMemo(() => getTheme(prefersDarkMode), []);
  
//const theme = React.useMemo(() => getTheme(prefersDarkMode), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Layout>
          <Helmet>
            <title>Pedro Baltazar</title>
          </Helmet>
          {typeof window !== "undefined" && (
          <Router>  
            <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/millerVillageTycoon" element={<MillerVillageTycoon />} />
            <Route path="/neuro" element={<Neuro />} />
            <Route path="/prismaEsocialProduz" element={<PrismaEsocialProduz />} />
            <Route path="/mpdsWounds" element={<MpdsWounds />} />
            <Route path="/mpdsWeb" element={<MpdsWeb />} />
          </Routes>
          <Footer />
          </Router>
          )}
          
      </Layout>
    </ThemeProvider>
  );
};

export default App;