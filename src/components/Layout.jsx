import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box } from "@mui/material"
import theme from '../../themes/mui-theme'

const Layout = ({children}) => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [pathname])

  return (
    <Box sx={{
      /* background: "url(/bg-rising-planet.png)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', */
      bgcolor: theme.palette.primary.main }}>
      {children}
    </Box>
  )
}

export default Layout