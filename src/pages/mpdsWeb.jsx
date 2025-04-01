import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import { ThemeProvider, Typography, Stack, Button, Link} from "@mui/material";
import LayoutProject from '../components/LayoutProject';
import theme from '../../themes/mui-theme'
import ProjectHeader from '../components/ProjectHeader';
import ProjectSection from '../components/ProjectSection';
import mpdsAndroidFinalSection from '../images/mpdsAndroidProject/mpdsAndroidFinal.webp';
import login from '../images/mpdsWeb/login.webp';
import fourScreens from '../images/mpdsWeb/4screens.webp';
import site from '../images/mpdsWeb/site.webp';
import api from '../images/mpdsWeb/api.webp';
import security from '../images/mpdsWeb/security.webp';
import ImageGallery from "../components/ImageGallery";

const imagesFirstGallery = [
  {
    src: mpdsAndroidFinalSection,
    title: 'To the Moon Illustration',
    description: 'Illustration used in the authentication email'
  },
  {
    src: login,
    title: 'Login UI',
    description: 'The current login page'
  },
  {
    src: fourScreens,
    title: 'UI MPDS Web',
    description: 'Current UI of the software'
  },
];

const imagesSecondGallery = [
  {
    src: site,
    title: 'Site UI',
    description: 'First concept'
  },
  {
    src: api,
    title: 'API Illustration',
    description: 'Part of the current website'
  },
  {
    src: security,
    title: 'Security Illustration',
    description: 'Part of the current website'
  },
];

// markup
const MpdsWeb = () => {
  return (
  <>
    <ThemeProvider theme={theme}>
      <LayoutProject
          header={
              <ProjectHeader
                  projectTitle='Mpds Web' 
                  entities='F3M' 
                  year='2019 - 2020'
              ></ProjectHeader>
          }
          fifthProjectStep={
          <>
            <ProjectSection topic="">
              <Typography variant="pRegularText" component='p' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                    }}>
                  MPDS Web allows user to easily manage and access the status of all the processes of each patient and it is connected to Mpds Wounds. As a sequel for the mobile app, Mpds Web was born to be a "plus extension" of patient's management. Created for the web, React.JS was my main tool to replicate what the prototype brought. The journey beginned in 2018.
              </Typography>
              
              <ImageGallery images={imagesFirstGallery} widthGallery={{
                          xs: 330,
                          sm: 700,
                          md: 800,
                          lg: 800
                        }} heightGallery={510} marginTop={4}/>
           
              
              <Typography variant="pRegularText" component='p' mt={5} sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                    }}>
                UI oriented, I took advantage of the top libraries in the "Web Dev Scene" to build all the prototype components and to make sure the responsive aspect of the app perform in all the major devices. Thinking of cross-browser support and scability, the UI tests were also a weighty objective.
              </Typography>

              <ImageGallery images={imagesSecondGallery} widthGallery={{
                          xs: 330,
                          sm: 700,
                          md: 800,
                          lg: 800
                        }} heightGallery={510} marginTop={4}/>

           <Typography variant="pRegularText" component='p' mt={5} sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                    }}>
              It was a great experience for the "Dev" Team to bring to life a brotherhood of apps, both developed in such different tech environments.
              Later, I was back to collaborate with the Marketing team to define and design the identity of the product: now limited to logo, illustrations and landing page. 
            </Typography>


            <Stack direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
              mt={5}>
              
                <Link color={theme.palette.primary.main} href="https://mpds.f3m.pt/en/mpds-web-en/">
                  See the official website
                </Link>
            </Stack>
            

</ProjectSection>
</>
          }
      />
    </ThemeProvider>
  </> )}

export default MpdsWeb