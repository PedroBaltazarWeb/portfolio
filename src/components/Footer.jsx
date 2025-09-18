import React from 'react';
import { Stack, Typography} from "@mui/material";

const Footer = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between" pt={5} pb={3}
    alignItems="center" maxWidth='md' margin='0 auto' width='100%' component='footer' bgcolor='background.default'>
      <Typography variant='bodybodyColorful' fontSize={'0.8rem'} color={'#848698'}>
        Pedro Baltazar, Europe, 2025
      </Typography>
    </Stack>
  )
}

export default Footer