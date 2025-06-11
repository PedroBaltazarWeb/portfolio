import * as React from "react"
import Box from '@mui/material/Box';
import { Typography, Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import cityFooter from '../images/footer.svg';
import theme from '../../themes/mui-theme'
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Stack component="footer" textAlign="center" sx={{
      background: 'rgba(36,40,109,1)'
    }} spacing={0}>
      <img src={cityFooter}></img>
      <Stack
        sx={{
          background: '#0B0C27',
          justifyContent: "center",
          alignItems: "center"
        }}
        direction='column'
        px={2}
        pt={5}

        spacing={{
          xs: 5,
          md: 5
        }}>
 
<Box pt={3}>
  <Button href="/files/cv_pedro_baltazar.pdf" download variant="outlined" sx={{width: 150, height: 44}}>
    Download CV
  </Button>
   </Box>   
        <Typography color={'#fff'} fontSize={14} pb={5}>Eternal work in progress by <Typography component={'span'} fontSize={14} color={theme.palette.secondary.main}>Pedro Baltazar</Typography></Typography>
      </Stack>
    </Stack>
  )

}

export default Footer