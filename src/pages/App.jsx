
import React, { useEffect } from 'react';
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "@fontsource/manrope";
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
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/millerVillageTycoon" element={<MillerVillage />} />
              <Route path="/neuro" element={<Neuro />} />
              <Route path="/prismaEsocialProduz" element={<PrismaEsocialProduz />} />
              <Route path="/mpdsWounds" element={<MpdsWounds />} />
              <Route path="/mpdsWeb" element={<MpdsWeb />} />
            </Routes>
          </Layout>
      </ThemeProvider>
    </Router>
  );
};


export default App;
