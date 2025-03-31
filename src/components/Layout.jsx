import React, { useEffect } from 'react';
import { useLocation } from "@reach/router";
import { Box } from "@mui/material"
import Footer from '../components/Footer';
import backgroundImage from '../images/pattern_wall.webp';
const Layout = ({children}) => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [location])

  return (
    <Box sx={{
      background: `
      url(${backgroundImage}), 
      linear-gradient(180deg, rgba(21,25,71,1) 0%, rgba(36,40,109,1) 82%)`,
      backgroundPosition: 'top left',
      backgroundRepeat: 'repeat no-repeat',
      backgroundSize: '64rem, cover'}}>
      {children}
      <Footer />
    </Box>
  )
}

export default Layout