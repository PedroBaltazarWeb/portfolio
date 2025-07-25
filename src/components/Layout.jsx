import React, { useEffect } from 'react';
import { Box } from "@mui/material"
import Footer from '../components/Footer';
const Layout = ({children, theme}) => {
  /* const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    document.documentElement.style.scrollBehavior = "auto"; 
    window.scrollTo(0, 0);
  }, [location]); */

  
  return (<>
   <Box color="background.default">
      {children}
    </Box>
    <Footer />
  </>
   
  )
}

export default Layout