import React from 'react';
import { useState } from 'react';
import "../../css/main.min.css";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import ProjectBasicInfo from '../components/ProjectBasicInfo';
import { Link as LinkRoute } from "react-router-dom";
import ProjectSection from '../components/ProjectSection';
import { Typography, Stack, Button, Accordion, AccordionSummary, Tooltip, AccordionDetails, Box, Link, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircleIcon from '@mui/icons-material/Circle';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PrintScreenOldApp1 from '../images/millerVillageTycoonProject/pic1.jpg';
import PrintScreenOldApp2 from '../images/millerVillageTycoonProject/pic2.jpg';
import PrintScreenOldApp3 from '../images/millerVillageTycoonProject/pic3.jpg';
import PrintScreenOldApp4 from '../images/millerVillageTycoonProject/pic4.jpg';
import Portugal from '../images/millerVillageTycoonProject/portugal.svg'
import { BarChart } from '@mui/x-charts/BarChart';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import FigmaIcon from '../images/techsIcons/figma.svg';
import MsTeamsIcon from '../images/techsIcons/msTeams.svg';
import CakeIcon from '@mui/icons-material/Cake';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import IframeWithLoading from '../components/IframeWithLoading';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import VideocamIcon from '@mui/icons-material/Videocam';
import {StyledTableCell, StyledTableRow} from '../../src/styles/millerVillage/useStyles'
import Grid from '@mui/material/Grid';
import LibraryCard from './../components/LibraryCard'
import useMediaQuery from '@mui/material/useMediaQuery';
import ListSubheader from '@mui/material/ListSubheader';
import Paper from '@mui/material/Paper';

const successData = [84, 100, 94, 78];
const xLabels = [
  'Task 1',
  'Task 2',
  'Task 3',
  'Task 4'
];

const MillerVillageTycoonPage = () => {

    const [open, setOpen] = React.useState(false);
    const [showIframeInterview, setShowIframeInterview] = useState(false);
    const [showIframeUserTaskFlow, setShowIframeUserTaskFlow] = useState(false);
    const [showIframeDesignSystem, setShowIframeDesignSystem] = useState(false);
    const [showIframeHumanResults, setShowIframeHumanResults] = useState(false);
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
        noSsr: true,
    });
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
    <>
        <LayoutProject
            header={<>
                <ProjectHeader
                    projectTitle='Miller Village Tycoon' 
                    entities='Cintesis & Universidade do Porto' 
                    year='2022/2023'
                ></ProjectHeader>
            </>
                
            }
            projectSteps={
                <ProjectBasicInfo 
                    info="Miller Village Tycoon gamifies the asthma monitoring process: Forced Expiratory Maneuver — for adolescents aged 14 to 17 by integrating it into a village-building game, aiming to enhance adherence to disease monitoring. Nevertheless, the main and only objective is to seamlessly incorporate the maneuver into the game's storyline.">
                </ProjectBasicInfo>
            }
            firstProjectStep={
                <ProjectSection topic="Research & Interviews" >
                    <Typography variant="body" maxWidth='sm' component='p'>
                        All started with InspirersKids, an extension of the <Link sx={{color: '#00B9C4'}} href="https://cintesis.eu/en/portfolio-items/airdoc/">AIRDOC ecosystem</Link> by MEDIDA and CINTESIS, which developed a mobile app for caregivers of children and adolescents with chronic or acute respiratory conditions to securely transmit medical data to a central server.
                    </Typography>
                        
                    <Grid container spacing={5}
                        py={5}
                        width='100%'
                        direction='column'
                        margin='0 auto'>
                        <Grid container 
                            direction="row"
                            spacing={1}
                            maxWidth='md'
                            margin='0 auto'
                            sx={{
                                justifyContent: "space-evenly",
                                alignItems: "center",
                            }}>
                            <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center">
                                <img width='180' style={{borderRadius: '2px'}} src={PrintScreenOldApp1}></img>
                            </Grid>
                                <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center">
                                <img width='180' style={{borderRadius: '2px'}} src={PrintScreenOldApp4}></img>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center">
                                <img width='180' style={{borderRadius: '2px'}} src={PrintScreenOldApp3}></img>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center">
                                <img width='180' style={{borderRadius: '2px'}} src={PrintScreenOldApp2}></img>
                            </Grid>
                            <Typography component='p' variant='caption' textAlign='center' pt={1}>Print screens of the Lung Function Module and main menu of InspirerKids</Typography>
                        </Grid>
                         
                    </Grid>

                    <Typography variant="body" maxWidth='sm' component='p' pb={3}>
                            My initial goal was to create an experience where patients could monitor their condition while also having fun and feeling connected to it. It was brought to my attention that the current state of the app seems too "standardized" for teenagers, so I focused on understanding this audience through papers and interviews.
                    </Typography>
                <Box width='100%'>
                    <Stack bgcolor='background.paper' borderRadius={1} width={'100%'} justifyContent='center' alignItems={'center'} py={5} sx={{my: {xs: 1, sm: 1, md: 3, lg: 5}}}>
                        <Typography variant="bigText" maxWidth='sm' component='p' px={{xs: 2, sm: 2, md:4}}>
                            At this stage, <Typography variant="bigText" component='span' sx={{color: 'text.highlight'}}>teens begin to seek more independence and responsibility</Typography>, allowing me to create a <Typography variant="bigText" component='span' sx={{color: 'text.highlight'}}>positive experience without relying heavily on parents or caregivers.</Typography>
                        </Typography>
                    </Stack>
                </Box>       
                    <Stack direction={{xs: 'column', sm: 'column', lg: 'row'}} spacing={4} maxWidth='md' pt={3} pb={3}>
                        <Stack direction='column' spacing={3}>
                            <Typography variant="body" maxWidth='sm' component='p'>
                                By making disease management more engaging, I aimed to alleviate anxiety and depression common in this age group. Additionally, I believed this approach will increase adherence to asthma treatment, consequently reducing exacerbations in the adolescent population.
                            </Typography>

                            <Typography variant="body" maxWidth='sm' component='p'>
                                I reviewed literature on asthma, particularly in teenagers, as well as related topics. One of these topics was the Forced Expiratory Maneuver (FEM), which will have great importance in this project, applied in the lung function module. The video above demonstrates this technique in the context of spirometry.
                            </Typography>
                        </Stack>
                        
                        <Box sx={{textAlign: 'center', display: {xs: 'none', sm: 'block', md: 'block'}}}>
                            <iframe loading="lazy" width="460" height="315" src="https://www.youtube.com/embed/FV-Rb_LJ1j4?si=t9gOP1nkFKihoXlD&amp;controls=0&amp;start=37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <Typography component='p' variant='caption' maxWidth='sm'>Forced Expiratory Maneuver in the context of spirometry</Typography>
                        </Box>
                    </Stack>
                    
                    <Box sx={{textAlign: 'center', display: {xs: 'block', sm: 'none', md: 'none'}}}>
                        <iframe loading="lazy" width="350" height="157.5" src="https://www.youtube.com/embed/FV-Rb_LJ1j4?si=t9gOP1nkFKihoXlD&amp;controls=0&amp;start=37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <Typography component='p' variant='caption' maxWidth='sm'>Forced Expiratory Maneuver in the context of spirometry</Typography>
                    </Box> 
                    <Box sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                            md: 'block',
                            lg: 'block'
                        },
                        position: 'sticky',
                        width: 650
                        }}
                        py={5}>
                        <LibraryCard></LibraryCard>
                    </Box>
                    <Box mx='auto' sx={{
                            color: "#ffffff",
                            background: "#17192b",
                            width: '100%',
                            borderRadius: 2,
                            p: 2,
                            display: {
                                xs: 'block',
                                sm: 'none',
                                md: 'none',
                                lg: 'none'
                            }
                        }}>
                    <Typography>
                        "Instructions to make the FEM with a mobile phone in the Lung Function module" available on tablet/desktop.
                    </Typography>
                    </Box>
                <Stack direction='column' spacing={2} maxWidth='sm' pb={3} pt={{
                                xs: 4,
                                sm: 4,
                                md: 3,
                                lg: 3
                            }}>
                    <Typography variant="h3" maxWidth='sm' component='h3' width={'100%'} pt={{
                                xs: 4,
                                sm: 4,
                                md: 3,
                                lg: 3
                            }}>Interview Guide & User Persona</Typography>
                    <Typography variant="body" component='p'>
                        Interviews with both adolescents and adults with asthma were conducted not only at the project's initial stage but throughout its duration. Finding participants was challenging due to privacy concerns and bureaucratic obstacles.
                    </Typography>
                </Stack>
                    
<Box width='100%'>
                <Stack bgcolor='background.paper' borderRadius={1} width={'100%'} justifyContent='center' alignItems={'center'} py={5} sx={{my: {xs: 1, sm: 1, md: 3, lg: 5}}}>
                    <Typography variant="bigText" maxWidth='sm' component='p' px={{xs: 2, sm: 2, md:4}}>I conducted <Typography variant="bigText" component='span' sx={{color: 'text.highlight'}}>semi-structured interviews</Typography> using: a <Typography variant="bigText" component='span' sx={{color: 'text.highlight'}}>thematic question guide and mind maps</Typography>; obtained <Typography variant="bigText" component='span' sx={{color: 'text.highlight'}}>recording permissions and participant consent</Typography>; and planned to start with easy questions while maintaining a compassionate approach.</Typography>
                </Stack>
</Box>
                <Typography variant="body" maxWidth='sm' component='p' pt={3}>
                    An Informed Consent Form was developed and consisted of two parts: an Information Sheet, which provided details about the study, and a Certificate of Consent for signatures if you chose to participate, including an assent form for children under 16.
                </Typography>

                <Stack direction='column' textAlign={'center'} sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                            md: 'block'
                        }
                    }}>
                        <Stack spacing={3} direction='row' justifyContent='center' alignItems={'center'} textAlign={'center'} pt={2} pb={!showIframeInterview ? 4 : 0} mb={3}>                                                             
                            <Button variant="outlined" component='button'
                                sx={{
                                    background: showIframeInterview ? '#e2b92133' : 'unset',
                                    '&:hover':{
                                        background: showIframeInterview ? '#e2b92133' : 'unset',
                                    }
                                }}
                                color="primary"
                                onClick={() => setShowIframeInterview(prev => !prev)}>
                                {showIframeInterview ? "Hide Interview Guide & User Persona" : "View Interview Guide & User Persona"}
                            </Button>
                        </Stack>
                        

                        {showIframeInterview && (
                            <Box mt={4}>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FTawtNI1VrduA3p9H2oGNW2%2FPerfil-and-Interview-Guide---Miller-Village(English)%3Fnode-id%3D0-1%26t%3DFHXsDqmyNUFLqJGf-1" />                          
                            </Box>
                        )}
                    
                    </Stack>
                    
                    <Box sx={{
                        pb:{
                                xs: 4,
                                sm: 4,
                                md: 3,
                                lg: 3
                            },
                    }}>
                        <Box mx='auto' sx={{
                            color: "#ffffff",
                            background: "#17192b",
                            width: '100%',
                            borderRadius: 2,
                            p: 2,
                            display: {
                                xs: 'block',
                                sm: 'none',
                                md: 'none',
                                lg: 'none'
                            }
                        }}>
                            <Typography>
                                Interview Guide and User Persona available on tablet/desktop.
                            </Typography>
                        </Box>
                    </Box>
                </ProjectSection>
            }
            secondProjectStep={
                <ProjectSection topic="Concept">
                    <Typography variant="body" maxWidth='sm' component='p' pb={3}>
                        Lung Function allows users to record the sound of their breathing by following simple instructions and then send this information directly to their doctor.
                        According to my research, incorporating gamification centered around the Forced Expiratory Maneuver procedure would be the most effective approach to engage adolescents with asthma, ages 14 to 17, and make the process more appealing to them.
                    </Typography>
<Box width='100%'>
                    <Stack bgcolor='background.paper' borderRadius={1} width={'100%'} justifyContent='center' alignItems={'center'} py={5} sx={{my: {xs: 1, sm: 1, md: 3, lg: 5}}}>
                        <Typography variant="bigText" maxWidth='sm' component='p' px={{xs: 2, sm: 2, md:4}}>
                            To understand the current preferences of Portuguese teenagers, I <Typography variant="bigText" component='span' sx={{color: 'text.highlight'}}>conducted both literary and online research</Typography>. Additionally, I held <Typography variant="bigText" component='span' sx={{color: 'text.highlight'}}>in-person meetings and phone calls to create mood boards</Typography> that explored their interests, such as games, TV shows, colors, and fashion.
                        </Typography>
                    </Stack>
                    </Box>
                    <Box pb={3}>
                        <Typography variant="body" maxWidth='sm' component='p' py={4}>
                        Exploring themes ranging from race cars to vessels reminiscent of the Age of Discovery, various ideas were considered. Ultimately, the concept of a 'city builder' resonated most with the user, offering an endless, engaging process. The progression of structures and technologies, coupled with strategic village planning, promises players a visually immersive journey rich in challenges and social interactions. This is particularly true when integrating the trading feature, allowing players to engage with others facing similar health challenges.
                    </Typography>
                    </Box>
                    
                </ProjectSection> 
            }
            thirdProjectStep={
                <ProjectSection topic="Wireframing">
                    <Typography variant="body" maxWidth='sm' component='p'>
                        Developing task flows and user flows allows us to comprehend the user's journey in completing the FEM. This results in a comprehensive mapping of all functionalities and information embedded in the app.
                    </Typography>
                    

                            
                        <Stack direction='column' textAlign={'center'}  sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                            md: 'block'
                        }
                    }}>
                        <Stack direction='row' justifyContent='center' alignItems={'center'} textAlign={'center'} py={4}>                                                                
                            <Button variant="outlined" component='button'
                                sx={{
                                    background: showIframeUserTaskFlow ? '#e2b92133' : 'unset',
                                    '&:hover':{
                                        background: showIframeUserTaskFlow ? '#e2b92133' : 'unset',
                                    }
                                }}
                                color="primary"
                                onClick={() => setShowIframeUserTaskFlow(prev => !prev)}>
                                {showIframeUserTaskFlow ? "Hide Flows" : "View Flows"}
                            </Button>
                        </Stack>
                        

                        {showIframeUserTaskFlow && (
                            <Box mt={4}>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEm9ZNkCqoUxySenf1v2VtM%2FTask-Flow-and-User-Flow%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D1xt2Blq4oJUjDshT-1" />                          
                            </Box>
                        )}
                    
                    </Stack>
                    <Box mx='auto' sx={{
                        color: "#ffffff",
                        background: "#17192b",
                        width: '100%',
                        borderRadius: 2,
                        p: 2,
                        display: {
                            xs: 'block',
                            sm: 'none',
                            md: 'none',
                            lg: 'none'
                        }
                    }}>
                        <Typography>
                            Task flow and User Flow available on tablet/desktop.
                        </Typography>
                    </Box>

                    <Typography variant="body" maxWidth='sm' component='p'>
                        Bringing the concept to fruition was a deliberate and necessary endeavor. As you can observe in the version history, meticulous notes were taken, and various sketches were crafted. Through 9 iterations, numerous heuristic issues were identified and rectified, granting us a degree of assurance as we embark on creating the low-fi prototype.
                    </Typography>
                        <Box  mx='auto' 
                    pt={5}
                    pb={3}
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                            md: 'block'
                        }
                    }}>
                                                    <iframe width="720" 
                                                        height="450"
                                                        allowFullScreen
                                                        src="https://embed.figma.com/board/3tBzqbZD6XZVq20BINEqnn/Wireframes?node-id=0-1&embed-host=share" allowfullscreen>
                                                    </iframe>

                        </Box>
                        
                    <Box mx='auto' sx={{
                            color: "#ffffff",
                        background: "#17192b",
                        width: '100%',
                        borderRadius: 2,
                        p: 2,
                        display: {
                            xs: 'block',
                            sm: 'none',
                            md: 'none',
                            lg: 'none'
                        }
                    }}>
                        <Typography>
                            Wireframes and User Flow available on tablet/desktop.
                        </Typography>
                    </Box>
                </ProjectSection>
            }
            fourthProjectStep={
                <ProjectSection topic="Prototype" mt={4} mb={4}>
                    <Typography variant="body" maxWidth='sm' component='p'>
                        After gathering positive feedback from small casual tests, I felt confident enough to proceed with the development of the high-fidelity prototype and the design system.
                    </Typography>
                    <Box mx='auto' 
                    pt={5}
                    pb={3}
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                            md: 'block'
                        }
                    }}>
                        <iframe allowFullScreen width="720" height="750" src="https://embed.figma.com/proto/s0OQx8uxyLyBD134jB3W4f/Hi-Fi-FEM?node-id=1-4&starting-point-node-id=1%3A2&show-proto-sidebar=1&embed-host=share"></iframe> 
                    </Box>
                    <Box mx='auto' sx={{
                        color: "#ffffff",
                        background: "#17192b",
                        width: '100%',
                        borderRadius: 2,
                        p: 2,
                        mb: 5,
                        display: {
                            xs: 'block',
                            sm: 'none',
                            md: 'none',
                            lg: 'none'
                        }
                    }}>
                        <Typography>
                            Hi-Fi Prototype available on tablet/desktop.
                        </Typography>
                    </Box>

                    <Stack direction='column' textAlign={'center'} sx={{
                        display: {
                            xs: 'none',
                            sm: 'block',
                            md: 'block'
                        }
                    }}>
                        <Stack spacing={3} direction='row' justifyContent='center' alignItems={'center'} textAlign={'center'} pt={0} pb={2}>                                                           
                            <Button variant="outlined" component='button'
                                sx={{
                                    background: showIframeDesignSystem ? '#e2b92133' : 'unset',
                                    '&:hover':{
                                        background: showIframeDesignSystem ? '#e2b92133' : 'unset',
                                    }
                                }}
                                color="primary"
                                onClick={() => setShowIframeDesignSystem(prev => !prev)}>
                                {showIframeDesignSystem ? "Hide Design System" : "View Design System"}
                            </Button>
                        </Stack>
                        
                        {showIframeDesignSystem && (
                            <Box mt={4} pb={5}>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F5dkB8O9OnEH5UvA9JGxzYx%2FDesign-System-of-Miller-Village-Tycoon%3Fnode-id%3D0-1%26t%3DGMrMy2bq17s5TG5w-1" />                          
                            </Box>
                        )}
                    </Stack>

                    <Box mx='auto' sx={{
                        color: "#ffffff",
                        background: "#17192b",
                        width: '100%',
                        borderRadius: 2,
                        p: 2,
                        display: {
                            xs: 'block',
                            sm: 'none',
                            md: 'none',
                            lg: 'none'
                        }
                    }}>
                        <Typography>
                            Design System available on tablet/desktop.
                        </Typography>
                    </Box>
                </ProjectSection>       
            }
            fifthProjectStep={
                <ProjectSection topic="Evaluation">
                    <Typography variant="body" maxWidth='sm' component='p' pb={2}>
                        Once I had conceptualized and illustrated all the elements that make up the design system and its subsequent prototype, it was time to put my solution to the test with a diverse range of users.
                    </Typography>
                    <Typography variant="h3" maxWidth='sm' component='h3' width={'100%'}>Executive Summary</Typography>
                    <Box maxWidth='77ch' pb={3}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography variant="regularText">Execution of the FEM Process</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={<Typography variant="regularText">Participants managed to complete the process without performing a forced expiration maneuver. However, some hesitated at steps with <strong>lengthy text</strong> or when <strong>button labels were unclear</strong>, such as “Play” and “Finish.”</Typography>}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={<Typography variant="regularText"><strong>The “Repeat” button</strong>, present at the end of each maneuver, <strong>caused confusion for some participants</strong>. When the character mentioned, “Great! Two more to go!”, participants mistakenly associated “Repeat” with a new maneuver within the “Today’s FEM” count, ignoring the “Next One” button.</Typography>}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={<Typography variant="regularText">The <strong>lack of a consistent narrative or storytelling</strong> could potentially make the experience demotivating.</Typography>}
                                        />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion> 
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography variant="regularText">Efficiency of Feedback During the FEM Process (successful vs. unsuccessful maneuvers)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                variant: "regularText"
                                            }}
                                            primary={<Typography variant="regularText">One participant did <strong>not understand when a maneuver was unsuccessful</strong>.</Typography> }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                        </ListItemIcon>
                                        <ListItemText
                                            primaryTypographyProps={{
                                                variant: "regularText"
                                            }}
                                            primary={<Typography variant="regularText">Other participants <strong>preferred an illustrative image to describe the correct way to perform the maneuver</strong> rather than text descriptions.</Typography>}
                                        />
                                    </ListItem>
                                </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography variant="regularText">Usefulness of FAST FEM</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">Since its goal is to eliminate at least two steps from the process (the number of FEMs to be performed daily can vary among users) — both identical, involving the configuration of the expiration recording duration —  <strong>the process becomes faster</strong>.</Typography>}
                                    />
                                </ListItem>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography variant="regularText">Harmony Between UI and Game Art</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">The counting screen environment, where the windmill is located, was described twice as having a <strong>“post-apocalyptic” feel</strong>.</Typography>}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">The character Madalena should be a guide, not a FEM process specialist, especially since she is always accompanied by configuration or navigation buttons.</Typography>}                           
                                    />
                                </ListItem>        
                                </AccordionDetails>                         
                            </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography variant="regularText">Evaluation of the Help Section's Utility</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">Only one participant accessed the help section, <strong>but it only demonstrated how to perform the maneuver correctly, not how to navigate</strong> the FEM process, which was the participant’s purpose.</Typography>}                            
                                    />
                                </ListItem>    
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                    <Typography variant="h3" maxWidth='sm' component='h3' width={'100%'}>Method</Typography>
                    <Box maxWidth='77ch' pb={3}>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography variant="regularText">Evaluation of the Help Section's Utility</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="regularText" pb={5}>
                                    Two expert reviewers analyzed the prototype according to the <strong>"Playability Heuristics for Mobile Games"</strong> by Korhonen, H., & Koivisto, E. M. I. (2006). Although some aspects could not be assessed using the severity ranking due to the prototype's lack of interaction, inability to simulate maneuvers, and menu navigation, it is important to mention some of the feedback provided by the reviewers outside the context of the documentation, which can be found in the appendix, but discussed here in free dialogue:
                                </Typography>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            The target audience seems to be around 14 and 15 y/ old, given the use of a windmill as an interactive element when the maneuver is performed;
                                            </Typography>}                            
                                        />
                                </ListItem>    
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            There is a lack of a consistent narrative with a beginning, middle, and end. An example provided to illustrate this aspect was Doug Dietz's approach to the poor experience most children had during MRI scans, which led him to redesign a "kid-friendly" MRI machine and create a new, engaging experience during the examination process;
                                        </Typography>}                            
                                        />
                                </ListItem>   
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Since the age group in question tends to lose motivation more easily, the maneuver needs to be more integrated into the game to enhance motivation;
                                        </Typography>}                            
                                        />
                                </ListItem>   
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Rewards should be tied to the game narrative.
                                        </Typography>}                            
                                        />
                                </ListItem>   
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            The term "Fast FEM" should be changed to fit into the game narrative.
                                        </Typography>}                            
                                        />
                                </ListItem>  
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            The character Madalena should not be a specialist but a guide.
                                        </Typography>}                            
                                        />
                                </ListItem>  
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Introduce elements of humor.
                                        </Typography>}                            
                                        />
                                </ListItem>  
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            There should be more motivational feedback.
                                        </Typography>}                            
                                        />
                                </ListItem>  
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            There are no significant navigation issues, but there is too much reliance on text, which can detract from the experience.
                                        </Typography>}                            
                                        />
                                </ListItem>  
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography variant="regularText">Usability Testing</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="regularText">
                                    Following the five usability metrics (learnability, efficiency, memorability, errors, and satisfaction), the following topics are the purpose of the entire research:                                
                                </Typography>

                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Evaluate the FEM (Forced Expiratory Maneuver) process;
                                        </Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Assess the efficiency of the feedback provided at certain steps of the FEM (successful maneuvers and maneuver errors);
                                        </Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Evaluate the usefulness of Fast FEM;
                                        </Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Evaluate the functional aspects of the user interface (buttons, inputs, etc.).
                                        </Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Evaluate the usefulness of the help section.
                                        </Typography>}                            
                                        />
                                </ListItem>
                            </AccordionDetails>
                        </Accordion>
                    </Box>

                    <Stack
                        direction={{
                            xs:'column',
                            sm:'column',
                            md: 'row'
                        }}
                        justifyContent="space-between"
                        alignItems="stretch"
                        spacing={2}
                        py={4}
                        mb={3}
                    >
                        <Paper elevation={1}> 
                            <List
                                subheader={<ListSubheader sx={{color:'text.primary'}}>Equipment & software used in online testing:</ListSubheader>}>
                                <ListItem>
                                    <ListItemIcon>
                                        <img height="24" src={MsTeamsIcon} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Microsoft Teams"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <img height="24" src={FigmaIcon} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Figma Web"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <LaptopMacIcon color="action" fontSize='large'></LaptopMacIcon>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Laptop"
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                        <Paper elevation={1}>
                            <List
                                subheader={<ListSubheader sx={{color:'text.primary'}}>Equipment used in in-person testing:</ListSubheader>}>
                                <ListItem>
                                    <ListItemIcon>
                                        <img height="24" src={FigmaIcon} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Figma App Mobile"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <SmartphoneIcon color="action" fontSize='large'></SmartphoneIcon>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Smartphone (video & audio recording)"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <DeviceHubIcon color="action" fontSize='large'></DeviceHubIcon>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Tripod"
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                        <Paper elevation={1} sx={{
                            backgroundImage: 'unset'
                        }}>
                            <List
                                subheader={<ListSubheader sx={{color:'text.primary'}}>Ideal Profile Characteristics:</ListSubheader>}>
                                <ListItem>
                                    <ListItemIcon>
                                        <CakeIcon color="action" fontSize='large'/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="14 to 17 y/ old (most important)"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocalHospitalIcon color="action" fontSize='large' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Asthmatic"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <SportsEsportsIcon color="action" fontSize='large' />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Gamer"
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <img width="35" src={Portugal}/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Portuguese"
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                    </Stack>
    
                <Stack direction='column' spacing={2} maxWidth='sm' pb={3}>
                    <Typography variant="h3" maxWidth='sm' component='h3' width={'100%'}>User Profiles</Typography>

                    <Typography variant="body" component='p'>
                        Although seven out of the eight participants possessed at least two of the highlighted characteristics, it was not possible to find someone with the ideal profile. A request was made to a health center to invite potential patients for testing, but there has been no progress to date. Additionally, the adolescents approached in other instances were reluctant to participate.                           
                    </Typography>
                </Stack>

                    <Box py={3} maxWidth='lg' sx={{ width: '100%'}}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell sx={{
                                            position: 'sticky',
                                            left: 0,
                                            zIndex: 1,
                                        }}><Typography variant="regularText" fontWeight="700">Participant</Typography></StyledTableCell>
                                        <StyledTableCell><Typography variant="regularText" fontWeight="700">P1</Typography></StyledTableCell>
                                        <StyledTableCell><Typography variant="regularText" fontWeight="700">P2</Typography></StyledTableCell>
                                        <StyledTableCell><Typography variant="regularText" fontWeight="700">P3</Typography></StyledTableCell>
                                        <StyledTableCell><Typography variant="regularText" fontWeight="700">P4</Typography></StyledTableCell>
                                        <StyledTableCell><Typography variant="regularText" fontWeight="700">P5</Typography></StyledTableCell>
                                        <StyledTableCell><Typography variant="regularText" fontWeight="700">P6</Typography></StyledTableCell>
                                        <StyledTableCell><Typography variant="regularText" fontWeight="700">P7</Typography></StyledTableCell>
                                        <StyledTableCell><Typography variant="regularText" fontWeight="700">P8</Typography></StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow>
                                        <TableCell sx={{
            position: 'sticky',
            left: 0,
            zIndex: 1,
            backgroundColor: 'background.paper',
        }}><Typography variant="regularText" fontWeight="700">Age</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">12</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">35</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">29</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">16</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">14</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">14</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">14</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">24</Typography></TableCell>
                                    </StyledTableRow>
                                    <StyledTableRow>
                                        <TableCell sx={{
            position: 'sticky',
            left: 0,
            zIndex: 1,
            backgroundColor: 'background.paper',
        }}><Typography variant="regularText" fontWeight="700">Gender</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">M</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">M</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">F</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">M</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">F</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">F</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">F</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">M</Typography></TableCell>
                                    </StyledTableRow>

                                    <StyledTableRow>
                                        <TableCell sx={{
            position: 'sticky',
            left: 0,
            zIndex: 1,
            backgroundColor: 'background.paper',
        }}><Typography variant="regularText" fontWeight="700">Asthmatic</Typography></TableCell>

                                        <TableCell><Typography variant="regularText">No</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">No</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Yes</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">No</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">No</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">No</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">No</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Yes</Typography></TableCell>
                                    </StyledTableRow>

                                    <StyledTableRow>
                                        <TableCell sx={{
            position: 'sticky',
            left: 0,
            zIndex: 1,
            backgroundColor: 'background.paper',
        }}><Typography variant="regularText" fontWeight="700">Test type</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">In-person</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Online</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">In-person</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Online</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Online</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Online</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Online</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">In-person</Typography></TableCell>
                                    </StyledTableRow>
                                    
                                    <StyledTableRow>
                                        <TableCell sx={{
            position: 'sticky',
            left: 0,
            zIndex: 1,
            backgroundColor: 'background.paper',
        }}><Typography variant="regularText" fontWeight="700">Accompanied</Typography></TableCell>

                                        <TableCell><Typography variant="regularText">No</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">No</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">No</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Yes</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Yes</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Yes</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Yes</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">No</Typography></TableCell>
                                    </StyledTableRow>

                                    <StyledTableRow>
                                        <TableCell sx={{
            position: 'sticky',
            left: 0,
            zIndex: 1,
            backgroundColor: 'background.paper',
        }}><Typography variant="regularText" fontWeight="700">Test environment</Typography></TableCell>

                                        <TableCell><Typography variant="regularText">Home</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Home</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Office</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Home</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Home</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Home</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Home</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Office</Typography></TableCell>
                                    </StyledTableRow>

                                    <StyledTableRow>
                                        <TableCell sx={{
            position: 'sticky',
            left: 0,
            zIndex: 1,
            backgroundColor:'background.paper',
        }}><Typography variant="regularText" fontWeight="700">Profession</Typography></TableCell>

                                        <TableCell><Typography variant="regularText">Student</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Interior Designer</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">UX Designer</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Student</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Student</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Student</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">Student</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">UI Designer</Typography></TableCell>
                                    </StyledTableRow>

                                    <StyledTableRow>
                                        <TableCell sx={{
            position: 'sticky',
            left: 0,
            zIndex: 1,
            backgroundColor: 'background.paper',
        }}><Typography variant="regularText" fontWeight="700">Nationality</Typography></TableCell>

                                        <TableCell><Typography variant="regularText">PT</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">PT</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">PT</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">PT</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">PT</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">PT</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">PT</Typography></TableCell>
                                        <TableCell><Typography variant="regularText">PT</Typography></TableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>

                    <Box pb={3} maxWidth='77ch' sx={{ width: '100%'}}>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography variant="regularText">Script</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Two minutes are dedicated to a brief introduction of the person guiding the test, and permission is requested to record the process;
                                        </Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            In less than five minutes, I describe the product and its main objective (including the definition of FEM and presenting a video demonstrating the maneuver to be performed);</Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            In one minute, the user is informed about the duration of the test. It's emphasized that the application is being tested—not the user's performance—and it's important for them to share their thoughts as they encounter tasks, steps, or new elements during the test (think-aloud protocol);
                                        </Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Five to ten minutes are allocated for completing all tasks;
                                        </Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Two minutes are set aside for general opinion questions;
                                        </Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Two minutes are spent completing the SUS.
                                        </Typography>}                            
                                        />
                                </ListItem>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography variant="regularText">Tasks</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Completing the FEM process from start to finish;
                                        </Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Send a note to the doctor;
                                        </Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Perform the Fast FEM;</Typography>}                            
                                        />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="regularText">
                                            Return to the main menu;
                                        </Typography>}                            
                                        />
                                </ListItem>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            >
                                <Typography variant="regularText">Results</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                            <Divider>Usability Tests Rates</Divider>
                                <Stack useFlexGap flexWrap="wrap" mt={2} mb={4} direction="row" spacing={2} justifyContent="center">
                                    <Box>
                                        <Typography variant="regularText">Success Rate</Typography>
                                        <BarChart
            width={330}
            height={300}
            series={[
                { 
                    data: successData, 
                    valueFormatter: (value) => `${value}%` // Format values in tooltip & legend
                }
            ]}
            xAxis={[{ 
                data: xLabels, 
                scaleType: 'band',
                tickLabelStyle: { fill: prefersDarkMode ? '#f5f5f5' : '#181818'}
            }]}
            yAxis={[{
                valueFormatter: (value) => `${value}%`,
                tickLabelStyle: { fill: prefersDarkMode ? '#f5f5f5' : '#181818'} 
            }]}
            slotProps={{
                legend: {
                    labelStyle: {
                    fill: prefersDarkMode ? '#f5f5f5' : '#181818' // Legend text color
                    }
                },
                axis: {
                    x: {
                    stroke: 'white',
                    tickLabelStyle: {
                        fill: prefersDarkMode ? '#f5f5f5' : '#181818' // X-Axis styling
                    }
                    },
                    y: {
                    stroke: 'white',
                    tickLabelStyle: {
                        fill: prefersDarkMode ? '#f5f5f5' : '#181818' // Y-Axis styling
                    }
                    }
                }
            }}
            sx={{
                '& .MuiChartsAxis-root line': { stroke: prefersDarkMode ? '#f5f5f5' : '#181818' }, // Make axis lines white
                '& .MuiChartsAxis-tickLabel': { fill: prefersDarkMode ? '#f5f5f5' : '#181818'}, // Ensure tick labels are white
                '& .MuiChartsAxis-tick': { stroke: prefersDarkMode ? '#f5f5f5' : '#181818'} // Ensure axis ticks are white
            }}
        />
                                    </Box>
                                    <Box>
                                        <Typography variant="regularText">Error/Confusion Rate</Typography>
                                        <BarChart
                                            width={330}
                                            height={300}
                                            series={[
                                                { data: [7, 0, 2, 2] },
                                                { data: [3, 0, 3, 1] }
                                            ]}
                                            xAxis={[{ 
                                                data: xLabels, 
                                                scaleType: 'band',
                                                tickLabelStyle: { fill: prefersDarkMode ? '#f5f5f5' : '#181818'} 
                                            }]}
                                            yAxis={[{
                                                tickLabelStyle: { fill: prefersDarkMode ? '#f5f5f5' : '#181818'} 
                                            }]}
                                            slotProps={{
                                                legend: { labelStyle: { fill: prefersDarkMode ? '#f5f5f5' : '#181818'}  }, // Legend text color
                                                axis: {
                                                    x: { stroke: '#181818', tickLabelStyle: { fill: prefersDarkMode ? '#f5f5f5' : '#181818'}  }, // X-Axis styling
                                                    y: { stroke: '#181818', tickLabelStyle: { fill: prefersDarkMode ? '#f5f5f5' : '#181818'}  }  // Y-Axis styling
                                                }
                                            }}
                                            sx={{
                                                '& .MuiChartsAxis-root line': { stroke: '#181818' }, // Make axis lines white
                                                '& .MuiChartsAxis-tickLabel': { fill: prefersDarkMode ? '#f5f5f5' : '#181818'}, // Ensure tick labels are white
                                                '& .MuiChartsAxis-tick': { stroke: '#181818' } // Ensure axis ticks are white
                                            }}
                                        />
                                    </Box>
                                </Stack>
                                <Divider>System Usability Scale</Divider>
                                <Stack direction="row" spacing={2} justifyContent="center" mt={3} pb={2}>
                                    <Typography variant="regularText">
                                        The grading result for SUS KEY is B - Excellent, with a score ranging between 85 and 91.9.
                                    </Typography>
                                </Stack>
                            </AccordionDetails>
                        </Accordion>
                    </Box>

                    <Stack direction='column' spacing={2} maxWidth='sm' pb={1}>
                        <Typography variant="h3" maxWidth='sm' component='h3' width={'100%'}>Human Results</Typography>
                        <Typography variant="body" component='p'>Below, I have compiled the concrete issues detected during usability testing, screen by screen.</Typography>
                    </Stack>

                    <Stack pb={4} direction='column' textAlign={'center'} sx={{
                                        display: {
                                            xs: 'none',
                                            sm: 'block',
                                            md: 'block'
                                        }
                                    }}>
                                        <Stack spacing={3} direction='row' justifyContent='center' alignItems={'center'} textAlign={'center'}>                                            
                                            <Button variant="outlined" component='button'
                                                sx={{
                                                    background: showIframeHumanResults ? '#e2b92133' : 'unset',
                                                    '&:hover':{
                                                        background: showIframeHumanResults ? '#e2b92133' : 'unset',
                                                    }
                                                }}
                                                color="primary"
                                                onClick={() => setShowIframeHumanResults(prev => !prev)}>
                                                {showIframeHumanResults ? "Hide Human Results" : "View Human Results"}
                                            </Button>
                                        </Stack>
                                        
                                        {showIframeHumanResults && (
                                            <Box mt={4}>
                                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FAdnr2VrucX5ZQwjK9kV2BB%2FHuman-Results%3Fnode-id%3D0-1%26t%3DDpYpsbRUnbq4V665-1" />                          
                                        
                                                </Box>
                                        )}
                                
                    </Stack>

                    <Box mx='auto' sx={{
                        color: "#ffffff",
                        background: "#17192b",
                        width: '100%',
                        borderRadius: 2,
                        p: 2,
                        display: {
                            xs: 'block',
                            sm: 'none',
                            md: 'none',
                            lg: 'none'
                        }
                    }}>
                        <Typography>
                        Human results available on tablet/desktop.
                        </Typography>
                    </Box>

    <Typography variant="h3" maxWidth='sm' component='h3' pt={{
                                xs: 4,
                                sm: 4,
                                md: 3,
                                lg: 3
                            }} width={'100%'}>Findings and recommendations</Typography>
    
    <Box maxWidth='77ch'>
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            >
                <Typography variant="regularText" width={'100%'}>Findings</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            Some participants hesitated in areas with a lot of text;                                                 
                        </Typography>}                            
                        />
                </ListItem>    
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            The text did not seem sufficient to distinguish buttons of the same hierarchy;
                        </Typography>}                            
                        />
                </ListItem>   
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            The options "Play" and "Finish" confused several participants at the end of the FEM process;
                        </Typography>}                            
                        />
                </ListItem>   
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            The concept of FAST FEM will need to be distinguished in another way, as there were participants who thought it was a quick way to complete the process to play immediately afterward;
                        </Typography>}                            
                        />
                </ListItem>   
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            The "Repeat" button does not specify whether we repeat the maneuver or restart the process;
                        </Typography>}                            
                        />
                </ListItem>  
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            Game prototypes without movement hinder the progress of the test;
                        </Typography>}                            
                        />
                </ListItem>  
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            Users did not understand the "Stop" button during the countdown;
                        </Typography>}                            
                        />
                </ListItem>  
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            The user must be far from the presence of the disease, so the input for sending a message to the doctor will need to be "camouflaged".
                        </Typography>}                            
                        />
                </ListItem>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
            >
                <Typography variant="regularText">Recommendations</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            The buttons that control the sound, "Play" and "Stop," should be icon buttons with the respective symbols and, if possible, designate their function;
                        </Typography>}                            
                        />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            Assess the efficiency of the feedback provided at certain steps of the FEM (successful maneuvers and maneuver errors);
                        </Typography>}                            
                        />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            The help and error feedback should contain images;
                        </Typography>}                            
                        />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            The exit button from the pause menu should be changed to "Exit to main menu".
                        </Typography>}                            
                        />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                    </ListItemIcon>
                    <ListItemText
                        primary={<Typography variant="regularText">
                            Evaluate the usefulness of the help section.
                        </Typography>}                            
                        />
                </ListItem>
            </AccordionDetails>
        </Accordion>
    </Box>
    <Typography variant="body" maxWidth='sm' component='p' pb={4}>In conclusion, the usability tests revealed several areas for improvement, particularly in terms of clarity button labeling, and user guidance. Participants hesitated in text-heavy sections and found some button functions ambiguous, highlighting the need for clearer visual cues and improved feedback mechanisms. Additionally, the distinction between different FEM process stages must be reinforced to avoid confusion. To address these challenges, key adjustments will include refining button design, enhancing feedback with visuals, and reevaluating the help section’s effectiveness. These changes will aim to create a more intuitive and seamless user experience when the project is resumed.</Typography>
    <Stack maxWidth='sm' direction="column" width={'100%'}>
        <LinkRoute to={'/'} key={2}><Typography variant='body' color='text.link' component='p' height={50} alignContent='end'>Return home</Typography></LinkRoute>
    </Stack>
                </ProjectSection>     
            }
        />
    </>
    )
}

export default MillerVillageTycoonPage
