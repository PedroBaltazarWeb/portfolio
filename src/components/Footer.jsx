import * as React from "react"
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
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
          background: '#0B0C27'
        }}
        direction='column'
        px={2}
        spacing={{
          xs: 5,
          md: 4
        }}>
          <Stack
            pt={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
            flexWrap={'wrap'}
            spacing={2}>
            <Typography variant="footerTools" fontWeight={800}>Languages and tools I use for web/mobile development</Typography>
            <Typography variant="footerTools">HTML</Typography>
            <Typography variant="footerTools">CSS</Typography>
            <Typography variant="footerTools">JS</Typography>
            <Typography variant="footerTools">React.js</Typography>
            <Typography variant="footerTools">SASS</Typography>
            <Typography variant="footerTools">Bootstrap</Typography>
            <Typography variant="footerTools">MUI5</Typography>
            <Typography variant="footerTools">GIT</Typography>
            <Typography variant="footerTools">Storybook</Typography>
            <Typography variant="footerTools">Chromatic</Typography>
            <Typography variant="footerTools">Icomoon</Typography>
          </Stack>
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            flexWrap={'wrap'}
            spacing={2}>
          <Typography variant="footerTools" fontWeight={800}>Tools I use to design</Typography>
          <Typography variant="footerTools">Figma</Typography>
          <Typography variant="footerTools">UXPin</Typography>
          <Typography variant="footerTools">Adobe Illustrator</Typography>
          <Typography variant="footerTools">Adobe PhotoShop</Typography>
          <Typography variant="footerTools">Adobe After Effects</Typography>
          <Typography variant="footerTools">Affinity Design (desktop & tablet)</Typography>
          <Typography variant="footerTools">Affinity Photo</Typography>
          <Typography variant="footerTools">Lottie</Typography>
          <Typography variant="footerTools">Miro</Typography>
          <Typography variant="footerTools">Figjam</Typography>
        </Stack>

        <Typography variant="footerTools" py={2}>Download my CV, <Link href="#" color={theme.palette.primary.main}>here</Link>.</Typography>
        <Typography color={'#fff'} fontSize={14} py={3}>This website was designed and developed by <Typography component={'span'} fontSize={14} mt={5} color={theme.palette.secondary.main}>Pedro Baltazar</Typography></Typography>
      </Stack>
    </Stack>
  )

}

export default Footer