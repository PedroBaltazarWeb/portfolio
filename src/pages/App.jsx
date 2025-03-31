import React, { useEffect, useState } from 'react';
import { Router } from "@reach/router"; 
import { ThemeProvider } from "@mui/material";
import theme from '../../themes/mui-theme';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout';
import Home from './Home';
import MillerVillage from './millerVillageTycoon';
import Neuro from './neuro';
import PrismaEsocialProduz from './prismaEsocialProduz';
import MpdsWeb from './mpdsWeb';
import MpdsWounds from './mpdsWounds';

const App = () => {
  const [isClient, setIsClient] = useState(false);

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
          <Home path="/Home" />
        </Layout>
      
    </ThemeProvider>
  );
};


export default App;