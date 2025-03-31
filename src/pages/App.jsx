
import React, { useEffect } from 'react';
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "@fontsource/manrope";
import "@fontsource/archivo"; // Defaults to weight 400
import "@fontsource/archivo/400.css"; // Specify weight
import "@fontsource/archivo/400-italic.css"; // Specify weight and style
import "../../css/main.min.css";
import Home from './Home';
import MillerVillage from './millerVillageTycoon';
import Neuro from './neuro';
import PrismaEsocialProduz from './prismaEsocialProduz';
import MpdsWeb from './mpdsWeb';
import MpdsWounds from './mpdsWounds';
import Layout from '../components/Layout';
import { ThemeProvider } from "@mui/material";
import theme from '../../themes/mui-theme';
import Footer from '../components/Footer'
import CssBaseline from '@mui/material/CssBaseline';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/millerVillageTycoon" element={<MillerVillage />} />
              <Route path="/neuro" element={<Neuro />} />
              <Route path="/prismaEsocialProduz" element={<PrismaEsocialProduz />} />
              <Route path="/mpdsWounds" element={<MpdsWounds />} />
              <Route path="/mpdsWeb" element={<MpdsWeb />} />
            </Routes>
            <Footer />
          </Layout>
      </ThemeProvider>
    </Router>
  );
};


export default App;
