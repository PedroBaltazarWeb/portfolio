import React from 'react';
import { Divider, Stack, Typography} from "@mui/material";
import { Dribbble, FileUser, Send } from 'lucide-react'; 
import { Link } from "@mui/material";

const Footer = () => {
  return (<>
  <Divider sx={{
    my: 3
  }} />
    <Stack direction="row" justifyContent='space-between' alignItems='self-end' spacing={4} pb={3}
     maxWidth='md' margin='0 auto' width='100%' component='footer' bgcolor='background.default'>

      <Stack direction='column' spacing={2} >
        <Typography variant='body2' fontWeight={400} fontSize={'1rem'} component='p' alignContent='end'>Let's connect</Typography>
        <Stack direction='column' spacing={1}>
          <Link href="mailto:pedrobaltazardesign@icloud.com" sx={{textDecoration: 'none', display: 'flex', alignItems: 'center' }}> 
            <Send size={16}/>
            <Typography variant='body' fontSize={'1rem'}  color='card.link' component='span' pl={1} alignContent='end'>Send e-mail</Typography>
          </Link>
          <Link href="/files/cv_pedro_baltazar.pdf" target="_blank" sx={{textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <FileUser size={16}/>
            <Typography variant='body' fontSize={'1rem'}  color='card.link' component='span' pl={1} alignContent='end'>Resume</Typography>
          </Link>
          <Link href="https://dribbble.com/PedroBaltazar" target="_blank" sx={{textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Dribbble size={16}/>
            <Typography variant='body' fontSize={'1rem'}  color='card.link' component='span' pl={1}  alignContent='end'>Dribbble</Typography>
          </Link>
        </Stack>
      </Stack>

      <Typography variant='bodybodyColorful' fontSize={'0.8rem'} color={'#848698'}>
        Pedro Baltazar, Europe, 2025
      </Typography>
    </Stack>
  </>)
}

export default Footer