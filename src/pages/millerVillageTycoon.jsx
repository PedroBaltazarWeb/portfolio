import React from 'react';
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import ProjectBasicInfo from '../components/ProjectBasicInfo';
import ProjectSteps from '../components/ProjectSteps';
import ProjectSection from '../components/ProjectSection';
import { Typography, Stack, Avatar, Accordion, AccordionSummary, Tooltip, AccordionDetails, Box, Link, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider } from "@mui/material";
import theme from '../../themes/mui-theme'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PrintScreenOldApp1 from '../images/millerVillageTycoonProject/pic1.jpg';
import PrintScreenOldApp2 from '../images/millerVillageTycoonProject/pic2.jpg';
import PrintScreenOldApp3 from '../images/millerVillageTycoonProject/pic3.jpg';
import PrintScreenOldApp4 from '../images/millerVillageTycoonProject/pic4.jpg';
import Portugal from '../images/millerVillageTycoonProject/portugal.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { BarChart } from '@mui/x-charts/BarChart';
import Slide from '@mui/material/Slide';
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
import {StyledTableCell, StyledTableRow} from '../../src/pages/styles/millerVillage/useStyles'
import Grid from '@mui/material/Grid';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const useStyles ={
    '&.MuiTableContainer-root':{
        background: "#0B1231",
        "& .MuiTableCell-root":{
           color: "#fff" 
        }
    }
  }
  
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MillerVillageTycoonPage = () => {

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
    <>
        <ThemeProvider theme={theme}>
                <LayoutProject
                    header={
                        <ProjectHeader
                            projectTitle='Miller Village Tycoon' 
                            entities='Cintesis & Universidade do Porto' 
                            year='2022/2023'
                        ></ProjectHeader>
                    }
                    projectSteps={
                        <Box display='flex'
                            justifyContent="center"
                            alignItems="center"
                            flexDirection='column'
                            bgcolor={theme.palette.primary.light}
                            pb={{
                                xs: 1,
                                sm: 2,
                                md: 3,
                                lg: 4,
                                xl: 5
                            }}>
                            <ProjectBasicInfo 
                                info="Miller Village Tycoon gamifies the asthma monitoring process (Forced Expiratory Maneuver) for adolescents aged 14 to 17 by integrating it into a village-building game, aiming to enhance adherence to disease monitoring. Nevertheless, the main and only objective is to seamlessly incorporate the maneuver into the game's storyline.">
                            </ProjectBasicInfo>
                            <ProjectSteps topic="1. Research & Interviews">
                            </ProjectSteps>
                        </Box>
                    }
                    firstProjectStep={
                        <ProjectSection topic="1. Research & Interviews" >
                            <Box mb={10}>
                                <Typography variant="pRegularText" component='p' >
                                    All started with InspirersKids, an extension of the <Link sx={{color: '#00B9C4'}} href="https://cintesis.eu/en/portfolio-items/airdoc/">AIRDOC ecosystem</Link> by MEDIDA and CINTESIS, which developed a mobile app for caregivers of children and adolescents with chronic or acute respiratory conditions to securely transmit medical data to a central server.
                                </Typography>


                                <Grid container 
                                    spacing={2} 
                                    pt={4} 
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Grid item sm={6} md={4} lg={3} textAlign="center">
                                        <img width='150' height='308' style={{borderRadius: '2px'}} src={PrintScreenOldApp1}></img>
                                    </Grid>
                                    <Grid item sm={6} md={4} lg={3} textAlign="center">
                                        <img width='150' height='308' style={{borderRadius: '2px'}} src={PrintScreenOldApp2}></img>
                                    </Grid>
                                    <Grid item sm={6} md={4} lg={3} textAlign="center">
                                        <img width='150' height='308' style={{borderRadius: '2px'}} src={PrintScreenOldApp3}></img>
                                    </Grid>
                                    <Grid item sm={6} md={4} lg={3} textAlign="center">
                                        <img width='150' height='308' style={{borderRadius: '2px'}} src={PrintScreenOldApp4}></img>
                                    </Grid>
                                </Grid>

                                <Typography variant="caption" component='p' pb={3} pt={2} textAlign='center'>Print screens of the Lung Function Module and main menu of InspirerKids</Typography>

                                <Typography variant="pRegularText" component='p' sx={{
                                            pb: {
                                            xs: theme.spacing(5),
                                            sm: theme.spacing(5),
                                            md: theme.spacing(0),
                                            },
                                        }}>
                                    The Lung Function module allowed users to record the sound of their respiration by following simple instructions and then send this information directly to their doctor.
                                    My objective was to implement gamification on it, — oriented to the Forced Expiratory Maneuver procedure — for adolescents with asthma, aged 14 to 17. 
                                </Typography>

                                <Typography variant="emphasisRegularText" component='p' sx={{
                                            pb: {
                                            xs: theme.spacing(5),
                                            sm: theme.spacing(5),
                                            md: theme.spacing(0),
                                            },
                                        }}>
                                    At this stage, teens begin to seek more independence and responsibility, allowing us to create a positive experience without relying heavily on parents or caregivers.
                                </Typography>

                                <Typography variant="pRegularText" component='p'>
                                    By making disease management more engaging, I aimed to alleviate anxiety and depression common in this age group. Additionally, I believed this approach will increase adherence to asthma treatment, consequently reducing exacerbations in the adolescent population.
                                </Typography>

                                <Box pb={2} pt={5} sx={{textAlign: 'center'}}>
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/RvKJQWcq8fQ?si=fQcRLi6qrt510hk6&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    <Typography variant="caption" component='p' pb={3} pt={2} textAlign='center'>What is FEM?</Typography>
                                </Box> 

                                <Typography variant="pRegularText" component='p'>
                                    I reviewed literature on asthma and related topics, initially collaborating with two colleagues whose contributions were irrelevant due to their locations in Mozambique and Russia, leading them to leave the project which focused on the Portuguese context.
                                </Typography>
                            </Box>
                            <Typography variant="stepTitleHeader" mb={2}>Interview Guide & User Persona</Typography>
                            <Typography variant="pRegularText" component='p' sx={{
                                            pb: {
                                            xs: theme.spacing(5),
                                            sm: theme.spacing(5),
                                            md: theme.spacing(0),
                                            },
                                        }}>
                                Interviews with both adolescents and adults with asthma were conducted not only at the project's initial stage but throughout its duration. Finding participants was challenging due to privacy concerns and bureaucratic obstacles.
                            </Typography>
                            <Typography variant="emphasisRegularText" component='p' sx={{
                                            pb: {
                                            xs: theme.spacing(5),
                                            sm: theme.spacing(5),
                                            md: theme.spacing(0),
                                            },
                                        }}>I conducted semi-structured interviews using a thematic question guide and mind maps, obtained recording permissions and participant consent, and planned to start with easy questions while maintaining a compassionate approach.</Typography>

                        <Typography pt={2} variant="pRegularText" component='p' sx={{
                                            pb: {
                                            xs: theme.spacing(5),
                                            sm: theme.spacing(5),
                                            md: theme.spacing(5),
                                            },
                                        }}>
                            The Informed Consent Form consisted of two parts: an Information Sheet, which provided details about the study, and a Certificate of Consent for signatures if you chose to participate, including an assent form for children under 16.
                        </Typography>

                        <Box mx='auto'>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FTawtNI1VrduA3p9H2oGNW2%2FPerfil-and-Interview-Guide---Miller-Village(English)%3Fnode-id%3D0-1%26t%3DFHXsDqmyNUFLqJGf-1" />                          
                            </Box>
            
                        </ProjectSection>
                    }
                    secondProjectStep={
                        <ProjectSection topic="2. Concept">
                            <Typography variant="pRegularText" component='p'>"Exploring themes ranging from race cars to vessels reminiscent of the Age of Discovery, various ideas were considered. Ultimately, the concept of a 'city builder' resonated most with me, offering an endless, engaging process. The progression of structures and technologies, coupled with strategic village planning, promises players a visually immersive journey rich in challenges and social interactions. This is particularly true when integrating the trading feature, allowing players to engage with others facing similar health challenges." MOODBOARDS</Typography>
                        </ProjectSection> 
                    }
                    thirdProjectStep={
                        <ProjectSection topic="3. Wireframing">
                            <Typography variant="pRegularText" component='p' sx={{
                                            pb: {
                                            xs: theme.spacing(5),
                                            sm: theme.spacing(5),
                                            md: theme.spacing(5),
                                            },
                                        }}>
                                Developing task flows and user flows allows us to comprehend the user's journey in completing the FEM. This results in a comprehensive mapping of all functionalities and information embedded in the app.
                                Desde inicio eu fiz Functional Requirements: Structure of the mobile app do insirer kids
                            </Typography>
                            <Box mx='auto' sx={{
                                            pb: {
                                            xs: theme.spacing(5),
                                            sm: theme.spacing(5),
                                            md: theme.spacing(0),
                                            },
                                        }}>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEm9ZNkCqoUxySenf1v2VtM%2FTask-Flow-and-User-Flow%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D1xt2Blq4oJUjDshT-1" />                          
                            </Box>
                            <Typography variant="pRegularText" component='p' sx={{
                                            pb: {
                                            xs: theme.spacing(5),
                                            sm: theme.spacing(5),
                                            md: theme.spacing(5),
                                            },
                                        }}>
                                "Bringing the concept to fruition was a deliberate and necessary endeavor. As you can observe in the version history, meticulous notes were taken, and various sketches were crafted. Through 9 iterations, numerous heuristic issues were identified and rectified, granting us a degree of assurance as we embark on creating the low-fi prototype."
                            </Typography>
                            <Box mx='auto'>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2F3tBzqbZD6XZVq20BINEqnn%2FWireframes---Miller-Village-Tycoon%3Fnode-id%3D0-1%26t%3DiR8lBorzdulONkkw-1" />
                            </Box>
                        </ProjectSection>
                    }
                    fourthProjectStep={
                        <ProjectSection topic="4. Prototype">
                            <Typography variant="stepTitleHeader" mb={2}>Hi-Fi</Typography>
                            <Box mx='auto'>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fs0OQx8uxyLyBD134jB3W4f%2FHi-Fi-FEM%3Fnode-id%3D1-4%26starting-point-node-id%3D1%253A2%26show-proto-sidebar%3D1%26scaling%3Dscale-down%26t%3D8lX1z6yzrlFYKqLF-1" />
                            </Box>
                            <Typography variant="stepTitleHeader" mb={2}>Design System</Typography>
                            <Box mx='auto'>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F5dkB8O9OnEH5UvA9JGxzYx%2FDesign-System-of-Miller-Village-Tycoon%3Fnode-id%3D0-1%26t%3DGMrMy2bq17s5TG5w-1" />
                            </Box>
                        </ProjectSection>       
                    }
                    fifthProjectStep={
                        <ProjectSection backgroundColor="#0B1231" topic="5. Evaluation">
                            <Typography variant="stepTitleHeader" mb={2} >Executive Summary</Typography>
                            <Box sx={{[theme.breakpoints.up('md')]: {padding: '32px 160px'}}}>
                                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                    >
                                        <Typography variant="regularText" fontWeight={700}>Execution of the FEM Process</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <List dense>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightAltIcon color="action"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="regularText">Participants managed to complete the process without performing a forced expiration maneuver. However, some hesitated at steps with <strong><u>lengthy text</u></strong> or when <strong><u>button labels were unclear</u></strong>, such as “Play” and “Finish.”</Typography>}
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightAltIcon color="action"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="regularText"><strong><u>The “Repeat” button</u></strong>, present at the end of each maneuver, <strong><u>caused confusion for some participants</u></strong>. When the character mentioned, “Great! Two more to go!”, participants mistakenly associated “Repeat” with a new maneuver within the “Today’s FEM” count, ignoring the “Next One” button.</Typography>}
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightAltIcon color="action"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="regularText">The <strong><u>lack of a consistent narrative or storytelling</u></strong> could potentially make the experience demotivating.</Typography>}
                                                />
                                            </ListItem>
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}> 
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                    >
                                        <Typography variant="regularText" fontWeight={700}>Efficiency of Feedback During the FEM Process (successful vs. unsuccessful maneuvers)</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <List dense>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightAltIcon color="action"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primaryTypographyProps={{
                                                        variant: "regularText"
                                                    }}
                                                    primary={<Typography variant="regularText">One participant did <strong><u>not understand when a maneuver was unsuccessful</u></strong>.</Typography> }
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <ArrowRightAltIcon color="action"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primaryTypographyProps={{
                                                        variant: "regularText"
                                                    }}
                                                    primary={<Typography variant="regularText">Other participants <strong><u>preferred an illustrative image to describe the correct way to perform the maneuver</u></strong> rather than text descriptions.</Typography>}
                                                />
                                            </ListItem>
                                        </List>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                    >
                                        <Typography variant="regularText" fontWeight={700}>Usefulness of FAST FEM</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">Since its goal is to eliminate at least two steps from the process (the number of FEMs to be performed daily can vary among users) — both identical, involving the configuration of the expiration recording duration —  <strong><u>the process becomes faster</u></strong>.</Typography>}
                                            />
                                        </ListItem>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                    >
                                        <Typography variant="regularText" fontWeight={700}>Harmony Between UI and Game Art</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">The counting screen environment, where the windmill is located, was described twice as having a <strong><u>“post-apocalyptic” feel</u></strong>.</Typography>}
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">The character Madalena should be a guide, not a FEM process specialist, especially since she is always accompanied by configuration or navigation buttons.</Typography>}                           
                                            />
                                        </ListItem>        
                                        </AccordionDetails>                         
                                    </Accordion>
                                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                                    aria-controls="panel3-content" 
                                    id="panel3-header"
                                    >
                                        <Typography variant="regularText" fontWeight={700}>Evaluation of the Help Section's Utility</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">Only one participant accessed the help section, <strong><u>but it only demonstrated how to perform the maneuver correctly, not how to navigate</u></strong> the FEM process, which was the participant’s purpose.</Typography>}                            
                                            />
                                        </ListItem>    
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                            <Typography variant="stepTitleHeader" mt={2} mb={2}>Method</Typography>
                            <Box sx={{[theme.breakpoints.up('md')]: {padding: '32px 160px'}}}>
                                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                                    aria-controls="panel3-content" 
                                    id="panel3-header"
                                    >
                                        <Typography variant="regularText" fontWeight={700}>Evaluation of the Help Section's Utility</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="regularText">
                                            Two expert reviewers analyzed the prototype according to the <strong><u>"Playability Heuristics for Mobile Games"</u></strong> by Korhonen, H., & Koivisto, E. M. I. (2006). Although some aspects could not be assessed using the severity ranking due to the prototype's lack of interaction, inability to simulate maneuvers, and menu navigation, it is important to mention some of the feedback provided by the reviewers outside the context of the documentation, which can be found in the appendix, but discussed here in free dialogue:
                                        </Typography>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    The target audience seems to be around 14 and 15 years old, given the use of a windmill as an interactive element when the maneuver is performed;
                                                    </Typography>}                            
                                                />
                                        </ListItem>    
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    There is a lack of a consistent narrative with a beginning, middle, and end. An example provided to illustrate this aspect was Doug Dietz's approach to the poor experience most children had during MRI scans, which led him to redesign a "kid-friendly" MRI machine and create a new, engaging experience during the examination process;
                                                </Typography>}                            
                                                />
                                        </ListItem>   
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    Since the age group in question tends to lose motivation more easily, the maneuver needs to be more integrated into the game to enhance motivation;
                                                </Typography>}                            
                                                />
                                        </ListItem>   
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    Rewards should be tied to the game narrative.
                                                </Typography>}                            
                                                />
                                        </ListItem>   
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    The term "Fast FEM" should be changed to fit into the game narrative.
                                                </Typography>}                            
                                                />
                                        </ListItem>  
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    The character Madalena should not be a specialist but a guide.
                                                </Typography>}                            
                                                />
                                        </ListItem>  
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    Introduce elements of humor.
                                                </Typography>}                            
                                                />
                                        </ListItem>  
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    There should be more motivational feedback.
                                                </Typography>}                            
                                                />
                                        </ListItem>  
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    There are no significant navigation issues, but there is too much reliance on text, which can detract from the experience.
                                                </Typography>}                            
                                                />
                                        </ListItem>  
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                                    aria-controls="panel3-content" 
                                    id="panel3-header"
                                    >
                                        <Typography variant="regularText" fontWeight={700}>Usability Testing</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="regularText" display='block' fontWeight={700}>
                                            Objectives                                
                                        </Typography>

                                        <Typography variant="regularText">
                                            Following the five usability metrics (learnability, efficiency, memorability, errors, and satisfaction), the following topics are the purpose of the entire research:                                
                                        </Typography>

                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    Evaluate the FEM (Forced Expiratory Maneuver) process;
                                                </Typography>}                            
                                                />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    Assess the efficiency of the feedback provided at certain steps of the FEM (successful maneuvers and maneuver errors);
                                                </Typography>}                            
                                                />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    Evaluate the usefulness of Fast FEM;
                                                </Typography>}                            
                                                />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    Evaluate the functional aspects of the user interface (buttons, inputs, etc.).
                                                </Typography>}                            
                                                />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
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
    direction="column"
    justifyContent="space-around"
    alignItems="center"
    spacing={2}
    mt={3}
    mb={5}
>
    <Box sx={{
        background: 'linear-gradient(to right, rgb(11 18 49 / 20%), #0B1231)',
        padding: '24px',
        borderRadius: '16px',
        maxWidth: 700,
        margin: '0 auto',
        backdropFilter: 'blur(12px)',
        border: 'rgb(255 255 255 / .1) solid 1px'
    }}>
        <Typography variant="regularText" component='p' fontStyle='italic' textAlign='center' pb={2}>
            Equipment & software used in online testing: 
        </Typography>

        <Stack direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            mb={3}>
            <Tooltip title="Laptop" arrow  placement="top">
                <LaptopMacIcon color="action" fontSize='large'></LaptopMacIcon>
            </Tooltip>
            <Tooltip title="Microsoft Teams" arrow  placement="top">
                <img height="35" src={MsTeamsIcon} />
            </Tooltip>
            <Tooltip title="Figma Web" arrow  placement="top">
                <img height="35" src={FigmaIcon} />
            </Tooltip>
        </Stack> 
    </Box>

    <Box sx={{
            background: 'linear-gradient(to right, rgb(11 18 49 / 20%), #0B1231)',
            padding: '24px',
            borderRadius: '16px',
            maxWidth: 700,
            margin: '0 auto',
            backdropFilter: 'blur(12px)',
            border: 'rgb(255 255 255 / .1) solid 1px'
        }}>
            <Typography variant="regularText" component='p' fontStyle='italic' textAlign='center' pb={2}>
                Equipment used in in-person testing:
            </Typography>

        <Stack direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            mb={2}>
            <Tooltip title="Figma App Mobile" arrow  placement="top">
                <img height="35" src={FigmaIcon} />
            </Tooltip>
            <Tooltip title="Smartphone for video and audio recording" arrow  placement="top">
                <VideocamIcon color="action" fontSize='large'></VideocamIcon>
            </Tooltip>
            <Tooltip title="Smartphone for user interaction" arrow  placement="top">
                <SmartphoneIcon color="action" fontSize='large'></SmartphoneIcon>
            </Tooltip>
            <Tooltip title="Tripod" arrow  placement="top">
                <DeviceHubIcon color="action" fontSize='large'></DeviceHubIcon>
            </Tooltip>
        </Stack> 
    </Box>

    <Box sx={{
            background: 'linear-gradient(to right, rgb(11 18 49 / 20%), #0B1231)',
            padding: '24px',
            borderRadius: '16px',
            maxWidth: 700,
            margin: '0 auto',
            backdropFilter: 'blur(12px)',
            border: 'rgb(255 255 255 / .1) solid 1px'
        }}>
            <Typography variant="regularText" component='p' fontStyle='italic' textAlign='center' pb={2}>
                Ideal Profile Characteristics:
            </Typography>

        <Stack direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            mb={2}>
            <Tooltip title="14 to 17 years old (most important)" arrow  placement="top">
                <CakeIcon color="action" fontSize='large'/>
            </Tooltip>
            <Tooltip title="Asthmatic" arrow  placement="top">
                <LocalHospitalIcon color="action" fontSize='large' />
            </Tooltip>
            <Tooltip title="Gamer" arrow  placement="top">
                <SportsEsportsIcon color="action" fontSize='large' />
            </Tooltip>
            <Tooltip title="Portuguese" arrow  placement="top">
                <img width="35" src={Portugal}/>
            </Tooltip>
        </Stack> 
    </Box>
</Stack>
          
            <Typography variant="stepTitleHeader" display='block' fontWeight={700}>
                User Profiles                            
            </Typography>

            <Typography variant="pRegularText">
                Although seven out of the eight participants possessed at least two of the highlighted characteristics, it was not possible to find someone with the ideal profile. A request was made to a health center to invite potential patients for testing, but there has been no progress to date. Additionally, the adolescents approached in other instances were reluctant to participate.                           
            </Typography>

            <Box pb={1}>
                <TableContainer sx={useStyles["&.MuiTableContainer-root"]} component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell><Typography variant="regularText" fontWeight="700">Participante</Typography></StyledTableCell>
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
                                <TableCell><Typography variant="regularText" fontWeight="700">Idade</Typography></TableCell>
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
                                <TableCell><Typography variant="regularText" fontWeight="700">Sexo</Typography></TableCell>
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
                                <TableCell><Typography variant="regularText" fontWeight="700">Asmático</Typography></TableCell>

                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">S</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">S</Typography></TableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <TableCell><Typography variant="regularText" fontWeight="700">Tipo de teste</Typography></TableCell>

                                <TableCell><Typography variant="regularText">Presencial</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Online</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Presencial</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Online</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">S</Typography></TableCell>
                            </StyledTableRow>
                            
                            <StyledTableRow>
                                <TableCell><Typography variant="regularText" fontWeight="700">Tipo de teste</Typography></TableCell>

                                <TableCell><Typography variant="regularText">Presencial</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Online</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Presencial</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Online</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">S</Typography></TableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <TableCell><Typography variant="regularText" fontWeight="700">Acompanhado</Typography></TableCell>

                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                                <TableCell><Typography variant="regularText">S</Typography></TableCell>
                                <TableCell><Typography variant="regularText">S</Typography></TableCell>
                                <TableCell><Typography variant="regularText">S</Typography></TableCell>
                                <TableCell><Typography variant="regularText">S</Typography></TableCell>
                                <TableCell><Typography variant="regularText">N</Typography></TableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <TableCell><Typography variant="regularText" fontWeight="700">Ambiente de teste</Typography></TableCell>

                                <TableCell><Typography variant="regularText">Casa</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Casa</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Escritório</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Casa</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Casa</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Casa</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Casa</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Escritório</Typography></TableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <TableCell><Typography variant="regularText" fontWeight="700">Profissão</Typography></TableCell>

                                <TableCell><Typography variant="regularText">Estudante</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Interior Designer</Typography></TableCell>
                                <TableCell><Typography variant="regularText">UX Designer</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Estudante</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Estudante</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Estudante</Typography></TableCell>
                                <TableCell><Typography variant="regularText">Estudante</Typography></TableCell>
                                <TableCell><Typography variant="regularText">UI Designer</Typography></TableCell>
                            </StyledTableRow>

                            <StyledTableRow>
                                <TableCell><Typography variant="regularText" fontWeight="700">Nacionalidade</Typography></TableCell>

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

            <Box mb={5}>
                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                    aria-controls="panel3-content" 
                    id="panel3-header"
                    >
                        <Typography variant="regularText" fontWeight={700}>Script</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightAltIcon color="action"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="regularText">
                                    Two minutes are dedicated to a brief introduction of the person guiding the test, and permission is requested to record the process;
                                </Typography>}                            
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightAltIcon color="action"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="regularText">
                                    In less than five minutes, I describe the product and its main objective (including the definition of FEM and presenting a video demonstrating the maneuver to be performed);</Typography>}                            
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightAltIcon color="action"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="regularText">
                                    In one minute, the user is informed about the duration of the test. It's emphasized that the application is being tested—not the user's performance—and it's important for them to share their thoughts as they encounter tasks, steps, or new elements during the test (think-aloud protocol);
                                </Typography>}                            
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightAltIcon color="action"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="regularText">
                                    Five to ten minutes are allocated for completing all tasks;
                                </Typography>}                            
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightAltIcon color="action"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="regularText">
                                    Two minutes are set aside for general opinion questions;
                                </Typography>}                            
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightAltIcon color="action"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="regularText">
                                    Two minutes are spent completing the SUS.
                                </Typography>}                            
                                />
                        </ListItem>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                    aria-controls="panel3-content" 
                    id="panel3-header"
                    >
                        <Typography variant="regularText" fontWeight={700}>Tasks</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightAltIcon color="action"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="regularText">
                                    Completing the FEM process from start to finish;
                                </Typography>}                            
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightAltIcon color="action"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="regularText">
                                    Send a note to the doctor;
                                </Typography>}                            
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightAltIcon color="action"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="regularText">
                                    Perform the Fast FEM;</Typography>}                            
                                />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <ArrowRightAltIcon color="action"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={<Typography variant="regularText">
                                    Return to the main menu;
                                </Typography>}                            
                                />
                        </ListItem>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                    aria-controls="panel3-content" 
                    id="panel3-header"
                    >
                        <Typography variant="regularText" fontWeight={700}>Results</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack direction="row" spacing={2} justifyContent="center">
                            <Box>
                                <Typography variant="regularText">Success Rates</Typography>
                                <BarChart
                                sx={{mx: 'auto'}}
                                    width={500}
                                    height={300}
                                    series={[
                                        { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
                                        { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
                                    ]}
                                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                                />
                            </Box>
                            <Box>
                                <Typography variant="regularText">Success Rates</Typography>
                                <BarChart
                                sx={{mx: 'auto'}}
                                    width={500}
                                    height={300}
                                    series={[
                                        { data: pData, label: 'pv', id: 'pvId', stack: 'total' },
                                        { data: uData, label: 'uv', id: 'uvId', stack: 'total' },
                                    ]}
                                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                                />
                            </Box>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            </Box>

            <Typography variant="stepTitleHeader" display='block' fontWeight={700}>
            Human Results                            
            </Typography>

            <Typography variant="pRegularText">
            Although seven out of the eight.            </Typography>


                            <Box pt={2} mx='auto'>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FAdnr2VrucX5ZQwjK9kV2BB%2FHuman-Results%3Fnode-id%3D0-1%26t%3DDpYpsbRUnbq4V665-1" />
                            </Box>


                            <Typography variant="stepTitleHeader" mt={2} mb={2}>Findings and recommendations</Typography>
                            <Box sx={{[theme.breakpoints.up('md')]: {padding: '32px 160px'}}}>
                                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                                    aria-controls="panel3-content" 
                                    id="panel3-header"
                                    >
                                        <Typography variant="regularText" fontWeight={700}>Findings</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    Some participants hesitated in areas with a lot of text;                                                 
                                                </Typography>}                            
                                                />
                                        </ListItem>    
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    The text did not seem sufficient to distinguish buttons of the same hierarchy;
                                                </Typography>}                            
                                                />
                                        </ListItem>   
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    The options "Play" and "Finish" confused several participants at the end of the FEM process;
                                                </Typography>}                            
                                                />
                                        </ListItem>   
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    The concept of FAST FEM will need to be distinguished in another way, as there were participants who thought it was a quick way to complete the process to play immediately afterward;
                                                </Typography>}                            
                                                />
                                        </ListItem>   
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    The "Repeat" button does not specify whether we repeat the maneuver or restart the process;
                                                </Typography>}                            
                                                />
                                        </ListItem>  
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    Game prototypes without movement hinder the progress of the test;
                                                </Typography>}                            
                                                />
                                        </ListItem>  
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    Users did not understand the "Stop" button during the countdown;
                                                </Typography>}                            
                                                />
                                        </ListItem>  
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    The user must be far from the presence of the disease, so the input for sending a message to the doctor will need to be "camouflaged".
                                                </Typography>}                            
                                                />
                                        </ListItem>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion sx={{bgcolor: "#1a2241", color: "#fff" }}>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{color: "#fff"}}/>}
                                    aria-controls="panel3-content" 
                                    id="panel3-header"
                                    >
                                        <Typography variant="regularText" fontWeight={700}>Recommendations</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="regularText" display='block' fontWeight={700}>
                                            Objectives                                
                                        </Typography>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    The buttons that control the sound, "Play" and "Stop," should be icon buttons with the respective symbols and, if possible, designate their function;
                                                </Typography>}                            
                                                />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    Assess the efficiency of the feedback provided at certain steps of the FEM (successful maneuvers and maneuver errors);
                                                </Typography>}                            
                                                />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    The help and error feedback should contain images;
                                                </Typography>}                            
                                                />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={<Typography variant="regularText">
                                                    The exit button from the pause menu should be changed to "Exit to main menu".
                                                </Typography>}                            
                                                />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <ArrowRightAltIcon color="action"/>
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
                        </ProjectSection>     
                    }
                />
        </ThemeProvider>
    </>
    )
}

export default MillerVillageTycoonPage
