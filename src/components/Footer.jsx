import React from 'react';
import { Stack, Box, Button, Typography, Link, Divider } from "@mui/material";
import DribbbleLogo from '../images/Dribbble_Logo.svg'

const Footer = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between" pt={3} pb={4}
    alignItems="center" maxWidth='md' margin='0 auto' width='100%' component='footer' bgcolor='background.default'>
      <Stack direction="row" spacing={1}>
        <Button component='button' href="mailto:pedrobaltazardesign@icloud.com" download variant="outlined">
          Drop me an email!
        </Button>
      </Stack>
      <Box width="100%">
        <Divider sx={{borderColor: "primary.main"}} flexItem orientation='horizontal' width="100%"></Divider>
      </Box>
      <Link href="https://dribbble.com/PedroBaltazar" underline="none" target="_blank" sx={{p: 2}}>
        <img src={DribbbleLogo} style={{height: 16}} />
      </Link>
      <Box width="100%" sx={{display: {xs: 'none', sm: 'block'}}}>
        <Divider sx={{borderColor: "primary.main"}} flexItem orientation='horizontal' width="100%"></Divider>
      </Box>
      <Button component='button' href="/files/cv_pedro_baltazar.pdf" download variant="outlined" sx={{display: {xs: 'none', sm: '-webkit-box'}}}>
        Download Resume
      </Button>
    </Stack>
  )

}

export default Footer