import React from 'react';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

const Footer = () => {
  return (

<Box pt={3}>
  <Button href="/files/cv_pedro_baltazar.pdf" download variant="outlined" sx={{width: 150, height: 44}}>
    Download Resume
  </Button>
   </Box>   
  
  )

}

export default Footer