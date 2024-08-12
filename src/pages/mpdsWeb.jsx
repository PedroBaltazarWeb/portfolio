import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import { ThemeProvider, Typography, Stack, Button, Link} from "@mui/material";
import LayoutProject from '../components/LayoutProject';
import theme from '../../themes/mui-theme'
import ProjectHeader from '../components/ProjectHeader';
import ProjectSection from '../components/ProjectSection';
import mpdsAndroidFinalSection from '../images/mpdsAndroidProject/mpdsAndroidFinal.svg';
import login from '../images/mpdsWeb/login.png';
import fourScreens from '../images/mpdsWeb/4screens.png';
import site from '../images/mpdsWeb/site.png';
import api from '../images/mpdsWeb/api.svg';
import security from '../images/mpdsWeb/security.svg';
import downloadTheApp from '../images/mpdsAndroidProject/downloadTheApp.svg';
import ImageGallery from "../components/ImageGallery";

const imagesFirstGallery = [
  {
    src: mpdsAndroidFinalSection,
    title: 'Mpds To the Moon Illustration',
    description: 'Mpds To the Moon Illustration;'
  },
  {
    src: login,
    title: 'Login UI',
    description: 'Login UI'
  },
  {
    src: fourScreens,
    title: 'UI MPDS Web',
    description: 'UI MPDS Web'
  },
];

const imagesSecondGallery = [
  {
    src: site,
    title: 'Site UI',
    description: 'Site UI'
  },
  {
    src: api,
    title: 'API Illustration',
    description: 'API Illustration'
  },
  {
    src: security,
    title: 'Security Illustration',
    description: 'Security Illustration'
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
          firstProjectStep={
          <>
            <ProjectSection topic="The Beginning">
              <Typography variant="pRegularText" component='p' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                    }}>
                  MPDS Web allows user to easily manage and access the status of all the processes of each patient and it is connected to Mpds Wounds. As a sequel for the mobile app, Mpds Web was born to be a "plus extension" of patient's management. Created for the web, React.JS was my main tool to replicate what the prototype brought. The journey beginned in 2018.
              </Typography>
              
              <ImageGallery images={imagesFirstGallery} widthGallery={{
                          xs: 400,
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
                          xs: 400,
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
              <img src={downloadTheApp} width="175" alt="Download App Illustration"/>
              <Button variant="contained" color="primary">
                <Link sx={{color: theme.palette.common.white}} href="https://mpds.f3m.pt/en/mpds-web-en/">
                  See the official website
                </Link>
              </Button>
            </Stack>
            

</ProjectSection>
</>
          }
      />
    </ThemeProvider>
  </> )}

export default MpdsWeb









/* import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import mpdsAndroidFinalSection from '../images/mpdsAndroidProject/mpdsAndroidFinal.svg';
import spaceBackground from '../images/mpdsWeb/spaceBackground.png';
import login from '../images/mpdsWeb/login.png';
import fourScreens from '../images/mpdsWeb/4screens.png';
import mpdsLogo from '../images/mpdsWeb/mpdsLogo.svg';
import f3mLogo from '../images/techsIcons/f3m.svg';
import site from '../images/mpdsWeb/site.png';
import api from '../images/mpdsWeb/api.svg';
import security from '../images/mpdsWeb/security.svg';
import downloadTheApp from '../images/mpdsAndroidProject/downloadTheApp.svg';
import MajorButton from '../components/MajorButton';
import Layout from '../components/Layout';
import Container from '@mui/material/Container';
*/
