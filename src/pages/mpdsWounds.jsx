import * as React from "react";
import "../../css/main.min.css";
import mpdsWoundsPatientList from '../images/mpdsAndroidProject/patientList.webp';
import { Typography, Box, Stack} from "@mui/material";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import ProjectSection from '../components/ProjectSection';
import mpdsAndroidFirstSection from '../images/mpdsAndroidProject/mpdsAndroidBegin.webp';
import mpdsWoundsScreenShootsApp from '../images/mpdsAndroidProject/screenShootsApp.webp';
import History from '../images/mpdsAndroidProject/history.svg';
import { Link as LinkRoute } from "react-router-dom";
import ProjectBasicInfo from '../components/ProjectBasicInfo';

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
                projectSteps={
                    <ProjectBasicInfo 
                        info="The MpDS Wounds app ensures the automatic capture of imaging from which the characterisation and assessment process of wounds is made, through an image pre-processing and segmentation algorithm, based on the visual characteristics of different wounds.">
                      <Box textAlign='center' sx={{
                          mx: 'auto',
                          mt: 4
                      }}
                      width={{
                            xs: 330,
                            sm: 700,
                            md: 800,
                            lg: 800
                          }}>
                        <img src={mpdsAndroidFirstSection}  style={{
                          maxWidth: '100%',
                          height: 'auto',
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          borderRadius: '8px'
                        }} alt="Mpds Wounds Hospital Illustration"/>
                      </Box>
                    </ProjectBasicInfo>
                }
                firstProjectStep={
                  <ProjectSection topic="The Journey" pb={4}>
                    <Typography variant="body" maxWidth='sm' component='p'>
                      As a Android Developer at the time, my main task was to follow and code all the UI/UX guidelines traced during the prototyping and usuability tests. For this to be accomplished, I needed to put aside most of the web patterns, and just focus on all that Android environment could give me. The journey beginned in 2018.
                    </Typography>
                  
                    <Box textAlign='center' py={5} width={{
                          xs: 330,
                          sm: 600,
                          md: 600,
                          lg: 600
                        }}
                        sx={{
                          mx: 'auto'
                      }}>
                      <img src={mpdsWoundsPatientList} style={{
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderRadius: '8px'
                      }} alt="Patient List UI" />
                    </Box>

                    <Typography variant="body" maxWidth='sm' component='p'>
                      The UI was also tested by me in several Android devices, meticulously searching for any inconsistency. 
                      Furthermore, the "Dev" Team which I belonged, was constantly managed by the UX Designer and Business Manager, which consequently drove
                      the solution to what the user expected when he tested the prototype and gave us their respectives suggestions.
                    </Typography>

                    <Box textAlign='center' py={5} sx={{
                        mx: 'auto'
                    }}
                      width={{
                        xs: 330,
                        sm: 700,
                        md: 800,
                        lg: 800
                      }}>
                        <img src={mpdsWoundsScreenShootsApp} style={{
                          maxWidth: '100%',
                          height: 'auto',
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          borderRadius: '8px'
                        }} alt="Screen Shoots"/>
                    </Box>

                    <Typography variant="body" maxWidth='sm' component='p'>
                      Besides all the development effort, I was recruited to help the Marketing team creating
                      the identity of the product, which had impact in the aesthetic aspect of the product: logo,
                      colors, illustrations and empty states.
                    </Typography>
                  </ProjectSection>
                }
                secondProjectStep={
                  <ProjectSection topic="Videos" backgroundColor='background.paper'>
                    <Stack useFlexGap flexWrap="wrap" direction={{
                        xs: 'column',
                        sm: 'column',
                        md: 'row',
                    }} spacing={2}   width={{
                      xs: 330,
                      sm: 700,
                      md: 800,
                      lg: 800
                    }}>
                      <iframe loading="lazy" width="100%" height="315" src="https://www.youtube.com/embed/fU0UvvScXkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      <iframe loading="lazy" width="100%" height="315" src="https://www.youtube.com/embed/nDxhJGgn7us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                    </Stack>

                    <Box textAlign='center' pt={5} pb={2}>
                      <img src={History} width="150" alt="Screen Shoots"/>
                    </Box>
                    <Stack maxWidth='sm' direction="column" width={'100%'} pb={3}>
                      {typeof window !== "undefined" && (
                      <LinkRoute to={'/'} key={2}><Typography variant='body' sx={{color: 'text.link'}}  component='p' height={50} alignContent='end'>Return home</Typography></LinkRoute>
                      )}
                      </Stack>
                  </ProjectSection>
               }
               
                />
  </> )}

export default MpdsWoundsPage