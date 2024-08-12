import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import wifiMachine from '../images/lottie/wifi_machine.json';
import mpdsWoundsPatientList from '../images/mpdsAndroidProject/patientList.png';
import cardsEmptyState from '../images/lottie/cards.json';
import lottie from "lottie-web";
import { ThemeProvider, Typography, Stack, Box} from "@mui/material";
import LayoutProject from '../components/LayoutProject';
import theme from '../../themes/mui-theme'
import ProjectHeader from '../components/ProjectHeader';
import ProjectSection from '../components/ProjectSection';
import mpdsAndroidFirstSection from '../images/mpdsAndroidProject/mpdsAndroidBegin.svg';
import mpdsWoundsScreenShootsApp from '../images/mpdsAndroidProject/screenShootsApp.png';
import History from '../images/mpdsAndroidProject/history.svg';


// markup
const MpdsWoundsPage = () => {

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#wifiMachine"),
      animationData: wifiMachine
    });
    lottie.loadAnimation({
      container: document.querySelector("#cardsEmptyState"),
      animationData: cardsEmptyState
    });
  }, []);

  return (
  <>
     <ThemeProvider theme={theme}>
            
            <LayoutProject
                header={
                    <ProjectHeader
                        projectTitle='Mpds Wounds' 
                        entities='F3M & Fraunhofer' 
                        year='2018 - 2019'
                    ></ProjectHeader>
                }
                firstProjectStep={
                  <ProjectSection topic="The Beginning">
                    
                    <Typography variant="pRegularText" component='p' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                    }}>
                      The MpDS Wounds app ensures the automatic capture of imaging from which the characterisation and assessment process of wounds is made, through an image pre-processing and segmentation algorithm, based on the visual characteristics of different wounds.    
                    </Typography>

                    <Box textAlign='center' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                        mx: 'auto'
                    }}
                    width={{
                          xs: 400,
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
                    
                    <Typography variant="pRegularText" component='p' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                    }}>
                      As a Android Developer at the time, my main task was to follow and code all the UI/UX guidelines traced during the prototyping and usuability tests. For this to be accomplished, I needed to put aside most of the web patterns, and just focus on all that Android environment could give me. The journey beginned in 2018.
                    </Typography>
                  
                    <Box textAlign='center' width={{
                          xs: 400,
                          sm: 600,
                          md: 600,
                          lg: 600
                        }}
                        sx={{
                          pb: {
                            xs: theme.spacing(5),
                            sm: theme.spacing(5),
                          },
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

                    <Typography variant="pRegularText" component='p' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                    }}>
                      Between RecyclerViews, ConstraintLayouts and Webviews - 
                      the UI was also tested by me in several Android devices, meticulously searching for any inconsistency. 
                      Furthermore, the "Dev" Team which I belonged, was constantly managed by the UX Designer and Business Manager, which consequently drove
                      the solution to what the user expected when he tested the prototype and gave us their respectives suggestions.
                    </Typography>

                    <Box textAlign='center' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                        mx: 'auto'
                    }}
                    width={{
                          xs: 400,
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

                    <Typography variant="pRegularText" component='p' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                    }}>
                      Besides all the development effort, I was recruited to help the Marketing team creating
                      the identity of the product, which had impact in the aesthetic aspect of the product: logo,
                      colors, illustrations and empty states.
                    </Typography>
             

                  <Stack direction="row" spacing={5} textAlign='center'>
                    <div id="wifiMachine" style={{background: '#daf1f3', borderRadius: "8px"}}/>
                    <div id="cardsEmptyState" style={{background: '#efefea', borderRadius: "8px"}}/>
                  </Stack>

                  <Stack direction="row" spacing={4} textAlign='center' mt={4}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/fU0UvvScXkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/nDxhJGgn7us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </Stack>

                  <Box textAlign='center' my={5} py={5}>
                      <img src={History} width="150" alt="Screen Shoots"/>
                    </Box>
</ProjectSection>
              
                }
                
               
                />
                </ThemeProvider>
  </> )}

export default MpdsWoundsPage