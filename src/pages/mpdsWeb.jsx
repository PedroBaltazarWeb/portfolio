import * as React from "react"
import "../../css/main.min.css";
import { Typography, Stack, Box, Link} from "@mui/material";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import ProjectSection from '../components/ProjectSection';
import mpdsAndroidFinalSection from '../images/mpdsAndroidProject/mpdsAndroidFinal.webp';
import login from '../images/mpdsWeb/login.webp';
import fourScreens from '../images/mpdsWeb/4screens.webp';
import site from '../images/mpdsWeb/site.webp';
import api from '../images/mpdsWeb/api.webp';
import security from '../images/mpdsWeb/security.webp';
import ImageGallery from "../components/ImageGallery";
import ProjectBasicInfo from '../components/ProjectBasicInfo';
import { Link as LinkRoute } from "react-router-dom";

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

const MpdsWeb = () => {
  return (
  <>
      <LayoutProject
          header={
              <ProjectHeader
                  projectTitle='Mpds Web' 
                  entities='F3M' 
                  year='2019 - 2020'
                  roles='Front-End Development, Illustration, Branding'
              ></ProjectHeader>
          }
          projectSteps={
            <ProjectBasicInfo 
                info="MPDS Web allows user to easily manage and access the status of all the processes of each patient and it is connected to Mpds Wounds. As a sequel for the mobile app, Mpds Web was born to be a plus extension of patient's management. Created for the web, React.JS was my main tool to replicate what the prototype brought. The journey beginned in 2018.">
            </ProjectBasicInfo>
        }
          fifthProjectStep={
          <>
            <ProjectSection topic="The Journey">
              <Typography variant="body" maxWidth='sm' component='p'>
                  MPDS Web allows user to easily manage and access the status of all the processes of each patient and it is connected to Mpds Wounds. As a sequel for the mobile app, Mpds Web was born to be a "plus extension" of patient's management. Created for the web, React.JS was my main tool to replicate what the prototype brought. The journey beginned in 2018.
              </Typography>
              <Box py={5}>
                <ImageGallery images={imagesFirstGallery} widthGallery={{
                          xs: 330,
                          sm: 700,
                          md: 800,
                          lg: 800
                        }} heightGallery={510}/>
              </Box>
              
              <Typography variant="body" maxWidth='sm' component='p'>
                UI oriented, I took advantage of the top libraries in the "Web Dev Scene" to build all the prototype components and to make sure the responsive aspect of the app perform in all the major devices. Thinking of cross-browser support and scability, the UI tests were also a weighty objective.
              </Typography>

              <Stack useFlexGap flexWrap="wrap" direction='column' py={5} spacing={2} width={{
                                    xs: 330,
                                    sm: 700,
                                    md: 800,
                                    lg: 800
                                  }}>
                                    <iframe loading="lazy" width="100%" height="315" src="https://www.youtube.com/embed/7dIgcDsFZY8?si=x42LdYemjwM_q6nv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                               
                                  <Link sx={{color: 'text.link'}} href="https://mpds.f3m.pt/en/mpds-web-en/">
                                    See the official website
                                  </Link>
                                 
                                </Stack>

                                <Typography variant="body" maxWidth='sm' component='p'>
              It was a great experience for the "Dev" Team to bring to life a brotherhood of apps, both developed in such different tech environments.
              Later, I was back to collaborate with the Marketing team to define and design the identity of the product: now limited to logo, illustrations and landing page. 
            </Typography>

<Box pt={5} pb={3}>
              <ImageGallery images={imagesSecondGallery} widthGallery={{
                          xs: 330,
                          sm: 700,
                          md: 800,
                          lg: 800
                        }} heightGallery={510} marginTop={4}/>
</Box>
   <Stack maxWidth='sm' direction="column" width={'100%'} pb={3}>
      {typeof window !== "undefined" && (
        <LinkRoute to={'/'} key={2}><Typography variant='body' sx={{color: 'text.link'}}  component='p' height={50} alignContent='end'>Return home</Typography></LinkRoute>
      )}
      </Stack>
</ProjectSection>
</>
          }
      />
  </> )}

export default MpdsWeb