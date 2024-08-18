import * as React from "react"
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";


const Footer = () => {
  return (
    <Box component='footer' textAlign='center' pb={4}>
      <Typography variant="caption" color="action.main">© Copyright 2024</Typography>
    </Box>
  )
}

export default Footer