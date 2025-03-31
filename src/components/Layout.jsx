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
      background: `
      url(${backgroundImage}), 
      linear-gradient(180deg, rgba(21,25,71,1) 0%, rgba(36,40,109,1) 82%)`,
      backgroundPosition: 'top left',
      backgroundRepeat: 'repeat no-repeat',
      backgroundSize: '64rem, cover'}}>
      {children}
    </Box>
  )
}

export default Layout