import React from 'react';
import { Stack, Box, Button, Typography, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between" pt={3} pb={4}
    alignItems="center" maxWidth='md' margin='0 auto' width='100%' component='footer' bgcolor='background.default'>
      <Stack direction="row" spacing={1}>
        
        <Link href="mailto:pedrobaltazardesign@icloud.com"  noWrap>
          Drop me an email!
        </Link>
      </Stack>
      <Box width="100%">
        <Divider sx={{borderColor: "primary.main"}} flexItem orientation='horizontal' width="100%"></Divider>
      </Box>
      <Button component='button' href="/files/cv_pedro_baltazar.pdf" download variant="outlined">
        Download Resume
      </Button>
    </Stack>
  )

}

export default Footer