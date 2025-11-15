import * as React from "react"
import "../../css/main.min.css";
import { Typography, Stack, Box, Link} from "@mui/material";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import mpdsAndroidFinalSection from '../images/mpdsAndroidProject/mpdsAndroidFinal.webp';
import login from '../images/mpdsWeb/login.webp';
import fourScreens from '../images/mpdsWeb/4screens.webp';
import { Link as LinkRoute } from "react-router-dom";

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
          firstProjectStep={
            <Stack direction='column' spacing={5}>
              <img src={mpdsAndroidFinalSection} style={{borderRadius: '0.2rem'}} />
              <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                  <Typography variant="body" maxWidth='sm' component='p'>
                    MPDS Web allows user to easily manage and access the status of all the processes of each patient and it is connected to Mpds Wounds. As a sequel for the mobile app, Mpds Web was born to be a plus extension of patient's management. Created for the web, my main task was to replicate what the prototype brought. The journey beginned in 2018.
                  </Typography>
              </Stack>

              <Stack direction='column' alignItems="center" margin='0 auto'>
                <Stack useFlexGap flexWrap="wrap" direction='column' py={0} spacing={2} width={{
                    xs: 330,
                    sm: 700,
                    md: 800,
                    lg: 800
                  }}>
                    <iframe referrerpolicy="no-referrer" loading="lazy" width="100%" height="315" src="https://www.youtube.com/embed/7dIgcDsFZY8?si=x42LdYemjwM_q6nv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
                  <Link sx={{color: 'text.link'}} href="https://mpds.f3m.pt/en/mpds-web-en/">
                    See the official website
                  </Link>
                  
                </Stack>
              </Stack>

              <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                <Typography variant="body" maxWidth='sm' component='p'>
                  UI oriented, I took advantage of the top libraries in the "Web Dev Scene" to build all the prototype components and to make sure the responsive aspect of the app perform in all the major devices. Thinking of cross-browser support and scability, the UI tests were also a weighty objective.
                </Typography>
              </Stack>

              <Stack direction='column' alignItems="center" margin='0 auto'>
                <Stack spacing={1}>
                  <Box margin='0 auto' >
                    <img src={fourScreens} style={{
                      borderRadius: '0.2rem'
                    }} alt="Patient List UI" />
                  </Box>
                  <Typography component='p' variant='caption' textAlign='center'>UI MPDS Web</Typography>
                </Stack>
              </Stack>

              <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                <Typography variant="body" maxWidth='sm' component='p'>
                    It was a great experience for the "Dev" Team to bring to life a brotherhood of apps, both developed in such different tech environments. Later, I was back to collaborate with the Marketing team to define and design the identity of the product: now limited to logo, illustrations and landing page.
                </Typography>
              
                <Stack direction='column' alignItems="center" py={5} margin='0 auto'>
                  <Stack spacing={1}>
                    <Box margin='0 auto' >
                      <img src={login} style={{
                        borderRadius: '0.2rem'
                      }} alt="Patient List UI" />
                    </Box>
                    <Typography component='p' variant='caption' textAlign='center'>Login</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Stack maxWidth='sm' direction="column" margin='0 auto' alignItems="center">
                                    {typeof window !== "undefined" && (
                                    <LinkRoute to={'/'} key={2}><Typography variant='body' sx={{color: 'text.link'}}  component='p' height={50} alignContent='end'>Return home</Typography></LinkRoute>
                                    )}
                                  </Stack>
            </Stack>
          }
      />
  </> )}

export default MpdsWeb