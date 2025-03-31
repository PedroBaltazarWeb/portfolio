import React, { useEffect } from 'react';
import { Box } from "@mui/material"
import Footer from '../components/Footer';
import backgroundImage from '../images/pattern_wall.webp';
import { ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../themes/mui-theme';
import { useLocation } from "@reach/router";
const Layout = ({children}) => {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    document.documentElement.style.scrollBehavior = "auto"; 
    window.scrollTo(0, 0);
  }, [location]);

  
  return (<>
 
   <Box sx={{
      background: `
      url(${backgroundImage}), 
      linear-gradient(180deg, rgba(21,25,71,1) 0%, rgba(36,40,109,1) 82%)`,
      backgroundPosition: 'top left',
      backgroundRepeat: 'repeat no-repeat',
      backgroundSize: '64rem, cover'}}>
      {children}
      
    </Box>
    <Footer />
  </>
   
  )
}

export default Layout