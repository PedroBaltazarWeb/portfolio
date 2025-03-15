import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from "@mui/material"
import theme from '../../themes/mui-theme'
import backgroundImage from '../images/pattern_wall.webp';
const Layout = ({children}) => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [pathname])

  return (
    <Box sx={{
      backgroundImage: `url(${backgroundImage}), linear-gradient(to bottom, #0a1928 0%, #111E56 50%, #111E56 100%)`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'repeat, no-repeat',
  backgroundSize: '2.5rem, cover',
  position: 'relative' }}>
      {children}
    </Box>
  )
}

export default Layout