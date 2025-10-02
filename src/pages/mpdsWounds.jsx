import * as React from "react";
import "../../css/main.min.css";
import mpdsWoundsPatientList from '../images/mpdsAndroidProject/patientList.webp';
import { Typography, Box, Stack} from "@mui/material";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import MpdsWoundsPreview from '../images/mpdsWoundsPreview.webp';
import mpdsAndroidFirstSection from '../images/mpdsAndroidProject/mpdsAndroidBegin.webp';
import History from '../images/mpdsAndroidProject/history.svg';
import { Link as LinkRoute } from "react-router-dom";

const MpdsWoundsPage = () => {

  return (
  <>
            <LayoutProject
                header={
                    <ProjectHeader
                        projectTitle='Mpds Wounds' 
                        entities='F3M & Fraunhofer' 
                        year='2018 - 2019'
                        roles='Android Development, Illustration, Branding'
                    ></ProjectHeader>
                }
                firstProjectStep={
                  <Stack direction='column' spacing={5}>
                    <img src={mpdsAndroidFirstSection} style={{borderRadius: '0.2rem'}} />
                    <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                        <Typography variant="body" maxWidth='sm' component='p'>
                          As a Android Developer at the time, my main task was to follow and code all the UI/UX guidelines traced during the prototyping and usuability tests. For this to be accomplished, I needed to put aside most of the web patterns, and just focus on all that Android environment could give me. The journey beginned in 2018.
                        </Typography>
                    </Stack>
                    <Stack direction='column' alignItems="center" margin='0 auto'>
                      <Stack spacing={1}>
                        <Box margin='0 auto' >
                          <img src={mpdsWoundsPatientList} style={{
                            borderRadius: '0.2rem'
                          }} alt="Patient List UI" />
                        </Box>
                        <Typography component='p' variant='caption' textAlign='center'>Patient's List</Typography>
                      </Stack>
                    </Stack>
                    <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                      <Typography variant="body" maxWidth='sm' component='p'>
                        The UI was also tested by me in several Android devices, meticulously searching for any inconsistency. 
                        Furthermore, the "Dev" Team which I belonged, was constantly managed by the UX Designer and Business Manager, which consequently drove
                        the solution to what the user expected when he tested the prototype and gave us their respectives suggestions.
                      </Typography>
                    </Stack>
                    <Stack spacing={1}>
                      <img src={MpdsWoundsPreview} style={{borderRadius: '0.2rem'}} />
                      <Typography component='p' variant='caption' textAlign='center'>Automatic Capture Mode, Wound's Characterization, and Patient Detail</Typography>
                    </Stack>
                    <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                      <Typography variant="body" maxWidth='sm' component='p'>
                        Besides all the development effort, I was recruited to help the Marketing team creating
                        the identity of the product, which had impact in the aesthetic aspect of the product: logo,
                        colors, illustrations and empty states.
                      </Typography>
                    </Stack>
                    <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                      <img src={History} width="150" alt="Screen Shoots"/>
                    </Stack>
                    <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                      <Typography variant="body" maxWidth='sm' component='p'>
                        Below, the first video features health professionals on Porto Canal discussing the app's purpose. The second video is a testimonial from Dr. Maria José Teles.
                      </Typography>
                    </Stack>
                    <Stack direction='column' spacing={2} alignItems="center" margin='0 auto'>
                      <Box maxWidth='sm' margin='0 auto' spacing={2}>
                          <iframe loading="lazy" width="100%" height="315" src="https://www.youtube.com/embed/nDxhJGgn7us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                          <iframe loading="lazy" width="100%" height="315" src="https://www.youtube.com/embed/fU0UvvScXkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>      
                      </Box>
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

export default MpdsWoundsPage