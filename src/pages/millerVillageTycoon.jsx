import React from 'react';
import "../../css/main.min.css";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import { Link as LinkRoute } from "react-router-dom";
import { Typography, Stack, Button, Accordion, AccordionSummary, AccordionDetails, Box, Link, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
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
import { BarChart } from '@mui/x-charts/BarChart';
import {StyledTableCell, StyledTableRow} from '../../src/styles/millerVillage/useStyles'
import Grid from '@mui/material/Grid';
import MillerVillagePreview from '../images/millerVillagePreview.webp';
import MillerVillageSecondPreview from '../images/millerVillageTycoonProject/millerVillage2phonesPreview.webp';
import MillerVillageThirdPreview from '../images/millerVillageTycoonProject/millerVillage3phonesPreview.webp';
import Paper from '@mui/material/Paper';
import LibraryCard from './../components/LibraryCard';

const successData = [84, 100, 94, 78];
const xLabels = [
  'Task 1',
  'Task 2',
  'Task 3',
  'Task 4'
];

const MillerVillageTycoonPage = () => {

    /* const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
        noSsr: true,
    }); */

    const prefersDarkMode = true;

    return (
        <>
            <LayoutProject
                header={<ProjectHeader
                        projectTitle='Miller Village Tycoon' 
                        entities='Cintesis & Universidade do Porto' 
                        year='2022/2023'
                        roles='UX Research, UX Design, UI Design, Illustration'
                    ></ProjectHeader>}
                
                firstProjectStep={
                    <Stack direction='column' spacing={5}>
                        <img src={MillerVillagePreview} style={{borderRadius: '0.2rem'}} />

                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <Typography sx={{
                                maxWidth: 'sm',
                                width: '100%'}} variant='phaseProjectTitle' component='h2'>Research & Interviews</Typography>
                            <Typography variant="body" maxWidth='sm' component='p'>
                                It all began with <Link sx={{color: 'text.link'}} href="https://paceit.med.up.pt/conheca-a-app-inspirerskids/">InspirersKids</Link>, an extension of the <Link sx={{color: 'text.link'}} href="https://cintesis.eu/en/portfolio-items/airdoc/">AIRDOC ecosystem</Link> created by MEDIDA and CINTESIS. These companies created a mobile application for caregivers of children and adolescents with chronic or acute respiratory conditions. It allows for the secure transmission of medical data to healthcare professionals by integrating self-monitoring and self-management tools.
                            </Typography>
                        </Stack>

                        <Grid container spacing={5}
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
                                        <img width='180' height='370' style={{borderRadius: '2px'}} src={PrintScreenOldApp4}></img>
                                    </Grid>
                                
                                    <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center">
                                        <img width='180' height='370' style={{borderRadius: '2px'}} src={PrintScreenOldApp1}></img>
                                    </Grid>

                                    <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center">
                                        <img width='180' height='370' style={{borderRadius: '2px'}} src={PrintScreenOldApp2}></img>
                                    </Grid>
                                
                                    <Grid item xs={12} sm={6} md={3} lg={3} textAlign="center">
                                        <img width='180' height='370' style={{borderRadius: '2px'}} src={PrintScreenOldApp3}></img>
                                    </Grid>
                                <Typography component='p' variant='caption' textAlign='center' pt={2}>Status of the app at that time, including screenshots of the Lung Function Module and the main menu of InspirerKids.</Typography>
                            </Grid>
                        </Grid>

                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <Typography variant="body" maxWidth='sm' component='p'>
                                Cintesis asked me to make one app feature more engaging for teens aged 14 to 17. After researching their needs, I developed an interactive health monitoring tool designed to facilitate independent asthma management. This approach helps teenagers manage their care without parent intervention, aiming to enhance treatment adherence and reduce anxiety, depression, and flare-ups.
                            </Typography>
                        </Stack>

                        <Stack spacing={2}>
                            <img src={MillerVillageSecondPreview} style={{borderRadius: '0.2rem'}} />
                            <Typography component='p' variant='caption' textAlign='center'>Splash Screen, Menu, and In-Game Tutorial of the Miller Village Tycoon prototype.</Typography>
                        </Stack>
                        
                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <Typography variant="body" maxWidth='sm' component='p'>
                                After reviewing asthma literature and consulting Cintesis professionals, I identified the Forced Expiratory Maneuver (FEM) as a promising technique to achieve my objective. This method could be integrated into the existing Lung Function module developed by the initial team. The video below shows FEM as applied to spirometry. In our app, users should perform FEM only near the phone's microphone, without medical devices or accessories.
                            </Typography>
                        </Stack>

                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <iframe loading="lazy" width="100%" height="400" src="https://www.youtube.com/embed/FV-Rb_LJ1j4?si=t9gOP1nkFKihoXlD&amp;controls=0&amp;start=37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <Typography component='p' variant='caption' maxWidth='sm'>Forced Expiratory Maneuver in the context of spirometry</Typography>
                        </Stack>

                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <Typography variant="body" maxWidth='sm' component='p'>
                                At the project’s outset and throughout its duration, I conducted semi-structured interviews with adolescents and adults with asthma, guided by thematic questions and mind maps. Before each session, I obtained consent and recording permissions, beginning with simple questions and maintaining a compassionate tone. For reference, a link to the interview guide and a user persona is <Link sx={{color: 'text.link'}} target="_blank" href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FTawtNI1VrduA3p9H2oGNW2%2FPerfil-and-Interview-Guide---Miller-Village(English)%3Fnode-id%3D0-1%26t%3DFHXsDqmyNUFLqJGf-1">here</Link>.
                            </Typography>
                        </Stack>

                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <Typography sx={{
                                maxWidth: 'sm',
                                width: '100%'}} variant='phaseProjectTitle' component='h2'>Concept</Typography>
                            <Typography variant="body" maxWidth='sm' component='p'>
                                Research indicates that gamifying the Forced Expiratory Maneuver procedure is most effective in engaging users with asthma aged 14 to 17 and increasing participation. In response, I designed a standalone app focused on Lung Function, the most relevant feature for this group, separate from other InspirersKids functions. The module allows users to record their breathing sounds with clear instructions and send the data directly to their doctor.
                            </Typography>
                        </Stack>

                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <Box sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                    md: 'block',
                                    lg: 'block'
                                },
                                position: 'sticky',
                                width: 650
                                }}>
                                <LibraryCard></LibraryCard>
                            </Box>
                        
                            <Box mx='auto' sx={{
                            color: "#ffffff",
                            background: "#17192b",
                            width: '90%',
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
                        </Stack>

                        <Stack direction='column' spacing={2} alignItems="center" margin='0 auto'>
                            <Typography variant="body" maxWidth='sm' component='p'>
                                To understand Portuguese teenagers’ preferences, I conducted research and meetings, then used mood boards to explore their interests. Among various themes, the ‘city builder’ concept resonated most, as progression through structures and technologies, combined with strategic planning, creates a visually immersive experience with meaningful challenges and encourages social interaction. To further motivate connection among players with similar health challenges, a trading feature was planned for later implementation.
                            </Typography>
                            <Typography variant="body" maxWidth='sm' component='p'>
                                Each day, users are reminded — either when starting the game or via notification — that their mills need wind to generate electricity for the farms, village, or city. This integrates the FEM into the story.
                            </Typography>
                        </Stack>
                                                
                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <Typography sx={{
                                maxWidth: 'sm',
                                width: '100%'}} variant='phaseProjectTitle' component='h2'>Wireframing</Typography>
                            <Typography variant="body" maxWidth='sm' component='p'>
                                Developing task flows and user flows helped me understand the user journey in FEM. Provided me with a comprehensive map of all app features and information. Click <Link sx={{color: 'text.link'}} target="_blank" href="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FEm9ZNkCqoUxySenf1v2VtM%2FTask-Flow-and-User-Flow%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D1xt2Blq4oJUjDshT-1">here</Link> to see the flows.
                            </Typography>
                        </Stack>

                        <Stack spacing={2}>
                            <img src={MillerVillageThirdPreview} style={{borderRadius: '0.2rem'}} />
                            <Typography component='p' variant='caption' textAlign='center'>In-Game Menu, and two scenarios in which the user fails to perform the FEM as instructed.</Typography>
                        </Stack>

                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <Typography variant="body" maxWidth='sm' component='p'>
                                Bringing the concept to life was deliberate and essential. The version history shows careful notes and various sketches. Through 9 iterations, I identified and fixed many heuristic issues. This gives us confidence to start the low-fi prototype. Click <Link sx={{color: 'text.link'}} target="_blank" href="https://www.figma.com/board/3tBzqbZD6XZVq20BINEqnn/Wireframes?node-id=0-1&p=f&t=f3tFwOk0Pd5MeBdW-0">here</Link> to see it.
                            </Typography>
                        </Stack>

                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <Typography sx={{
                                maxWidth: 'sm',
                                width: '100%'}} variant='phaseProjectTitle' component='h2'>Protoype</Typography>

                            <Stack direction='column' spacing={2}>
                                <Typography variant="body" maxWidth='sm' component='p'>
                                    After gathering positive feedback from small casual tests, I felt confident enough to proceed with the development of the high-fidelity prototype.
                                </Typography>

                                <Typography variant="body" maxWidth='sm' component='p'>
                                    In the first flow, FEM, the user sees in the main menu that no Forced Expiratory Maneuver has been performed today. As an existing player, the user chooses to complete the health task before playing. The user then selects the CONTINUE button, follows Madalena’s instructions, sets the timer, and performs the FEM. After completing all three maneuvers, the user is ready to play as instructed.
                                </Typography>

                                <Typography variant="body" maxWidth='sm' component='p'>
                                    In the second flow, Fast FEM, the user selects the 'FAST FEM' button to complete only the FEM, without proceeding to play. The 'Save this time for the next today’s FEM' checkbox is selected by default in the time setting section. After completing all maneuvers, the user returns to the main menu.
                                </Typography>

                                <Typography variant="body" maxWidth='sm' component='p'>
                                    The third flow, Bad Maneuvers, illustrates what happens when the user fails to perform the FEM as instructed.
                                </Typography>        

                                <Typography variant="body" maxWidth='sm' component='p'>
                                    Click <Link sx={{color: 'text.link'}} target="_blank" href="https://www.figma.com/design/5dkB8O9OnEH5UvA9JGxzYx/UI-of-Miller-Village-Tycoon?node-id=0-1&t=NhcUFffw6Bz607Z3-1">here</Link> to see the UI library.     
                                </Typography>          
                            </Stack>
                        </Stack>
                        
                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <iframe allowFullScreen width="100%" height="750" src="https://embed.figma.com/proto/s0OQx8uxyLyBD134jB3W4f/Hi-Fi-FEM?node-id=1-4&starting-point-node-id=1%3A2&show-proto-sidebar=1&embed-host=share"></iframe> 
                        </Stack>

                        <Stack direction='column' spacing={3} alignItems="center" margin='0 auto'>
                            <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                                <Typography sx={{
                                    maxWidth: 'sm',
                                    width: '100%'}} variant='phaseProjectTitle' component='h2'>Evaluation</Typography>
                                <Typography variant="body" maxWidth='sm' component='p'>
                                    After developing and illustrating all elements and the prototype, I tested the solution with a diverse group of users.
                                </Typography>
                            </Stack>
                            <Stack direction='column' spacing={2} alignItems="center" margin='0 auto'>
                                <Typography variant="phaseProjectSubTitle" maxWidth='sm' component='h3' width={'100%'}>Evaluation Summary</Typography>
                                <Box maxWidth='sm' margin='0 auto'>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon/>}
                                        >
                                            <Typography variant="body">Execution of the FEM Process</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <List>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={<Typography variant="body">Participants managed to complete the process without performing a forced expiration maneuver. However, some hesitated at steps with <strong>lengthy text</strong> or when <strong>button labels were unclear</strong>, such as “Play” and “Finish.”</Typography>}
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={<Typography variant="body"><strong>The “Repeat” button</strong>, present at the end of each maneuver, <strong>caused confusion for some participants</strong>. When the character mentioned, “Great! Two more to go!”, participants mistakenly associated “Repeat” with a new maneuver within the “Today’s FEM” count, ignoring the “Next One” button.</Typography>}
                                                    />
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={<Typography variant="body">The <strong>lack of a consistent narrative or storytelling</strong> could potentially make the experience demotivating.</Typography>}
                                                    />
                                                </ListItem>
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion> 
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        >
                                            <Typography variant="body">Efficiency of Feedback During the FEM Process (successful vs. unsuccessful maneuvers)</Typography>
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
                                                        primary={<Typography variant="body">One participant did <strong>not understand when a maneuver was unsuccessful</strong>.</Typography> }
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
                                                        primary={<Typography variant="body">Other participants <strong>preferred an illustrative image to describe the correct way to perform the maneuver</strong> rather than text descriptions.</Typography>}
                                                    />
                                                </ListItem>
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        >
                                            <Typography variant="body">Usefulness of FAST FEM</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">Since its goal is to eliminate at least two steps from the process (the number of FEMs to be performed daily can vary among users) — both identical, involving the configuration of the expiration recording duration —  <strong>the process becomes faster</strong>.</Typography>}
                                                />
                                            </ListItem>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        >
                                            <Typography variant="body">Harmony Between UI and Game Art</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">The counting screen environment, where the windmill is located, was described twice as having a <strong>“post-apocalyptic” feel</strong>.</Typography>}
                                                />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">The character Madalena should be a guide, not a FEM process specialist, especially since she is always accompanied by configuration or navigation buttons.</Typography>}                           
                                                />
                                            </ListItem>        
                                            </AccordionDetails>                         
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        >
                                            <Typography variant="body">Evaluation of the Help Section's Utility</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">Only one participant accessed the help section, <strong>but it only demonstrated how to perform the maneuver correctly, not how to navigate</strong> the FEM process, which was the participant’s purpose.</Typography>}                            
                                                />
                                            </ListItem>    
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                            </Stack>
                            <Stack direction='column' spacing={2} alignItems="center" margin='0 auto'>
                                <Typography variant="phaseProjectSubTitle" maxWidth='sm' component='h3' width={'100%'}>Method</Typography>
                                <Box maxWidth='sm' margin='0 auto'>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        >
                                            <Typography variant="body">Heuristics</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="body" pb={5}>
                                                Two expert reviewers analyzed the prototype according to the <strong>"Playability Heuristics for Mobile Games"</strong> by Korhonen, H., & Koivisto, E. M. I. (2006). Although some aspects could not be assessed using the severity ranking due to the prototype's lack of interaction, inability to simulate maneuvers, and menu navigation, it is important to mention some of the feedback provided by the reviewers outside the context of the documentation, which can be found in the appendix, but discussed here in free dialogue:
                                            </Typography>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        The target audience seems to be around 14 and 15 y/ old, given the use of a windmill as an interactive element when the maneuver is performed;
                                                        </Typography>}                            
                                                    />
                                            </ListItem>    
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        There is a lack of a consistent narrative with a beginning, middle, and end. An example provided to illustrate this aspect was Doug Dietz's approach to the poor experience most children had during MRI scans, which led him to redesign a "kid-friendly" MRI machine and create a new, engaging experience during the examination process;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>   
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Since the age group in question tends to lose motivation more easily, the maneuver needs to be more integrated into the game to enhance motivation;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>   
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Rewards should be tied to the game narrative.
                                                    </Typography>}                            
                                                    />
                                            </ListItem>   
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        The term "Fast FEM" should be changed to fit into the game narrative.
                                                    </Typography>}                            
                                                    />
                                            </ListItem>  
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        The character Madalena should not be a specialist but a guide.
                                                    </Typography>}                            
                                                    />
                                            </ListItem>  
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Introduce elements of humor.
                                                    </Typography>}                            
                                                    />
                                            </ListItem>  
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        There should be more motivational feedback.
                                                    </Typography>}                            
                                                    />
                                            </ListItem>  
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
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
                                            <Typography variant="body">Usability Testing</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Stack direction='column' spacing={3}>
                                                <Box>
                                                    <Typography>
                                                        Equipment & software used in online testing:
                                                    </Typography>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Microsoft Teams
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Figma Web
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Laptop
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                </Box>

                                                <Box>
                                                    <Typography>
                                                        Equipment used in in-person testing:
                                                    </Typography>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Figma App Mobile
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Smartphone (video & audio recording)
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Tripod
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                </Box>

                                                <Box>
                                                    <Typography>
                                                        Ideal Profile Characteristics:
                                                    </Typography>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                14 to 17 y/ old
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Asthmatic
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Gamer
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Portuguese
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                </Box>

                                                <Box>
                                                    <Typography variant="body">
                                                        Following the five usability metrics (learnability, efficiency, memorability, errors, and satisfaction), the following topics are the purpose of the entire research:                                
                                                    </Typography>

                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Evaluate the FEM (Forced Expiratory Maneuver) process;
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Assess the efficiency of the feedback provided at certain steps of the FEM (successful maneuvers and maneuver errors);
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Evaluate the usefulness of Fast FEM;
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Evaluate the functional aspects of the user interface (buttons, inputs, etc.).
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={<Typography variant="body">
                                                                Evaluate the usefulness of the help section.
                                                            </Typography>}                            
                                                            />
                                                    </ListItem>
                                                </Box>
                                            </Stack>
                                            
                                            
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                            </Stack>
                            <Stack direction='column' spacing={2} alignItems="center" margin='0 auto'>
                                <Typography variant="phaseProjectSubTitle" maxWidth='sm' component='h3' width={'100%'}>User Profiles</Typography>
                                <Box maxWidth='sm' margin='0 auto'>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        >
                                            <Typography variant="body">Script</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Two minutes are dedicated to a brief introduction of the person guiding the test, and permission is requested to record the process;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        In less than five minutes, I describe the product and its main objective (including the definition of FEM and presenting a video demonstrating the maneuver to be performed);</Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        In one minute, the user is informed about the duration of the test. It's emphasized that the application is being tested—not the user's performance—and it's important for them to share their thoughts as they encounter tasks, steps, or new elements during the test (think-aloud protocol);
                                                    </Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Five to ten minutes are allocated for completing all tasks;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Two minutes are set aside for general opinion questions;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
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
                                            <Typography variant="body">Tasks</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Completing the FEM process from start to finish;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Send a note to the doctor;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Perform the Fast FEM;</Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
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
                                            <Typography variant="body">Results</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            
                                        <Divider>Usability Tests Rates</Divider>
                                            <Stack useFlexGap flexWrap="wrap" mt={2} mb={4} direction="row" spacing={2} justifyContent="center">
                                                <Box>
                                                    <Typography variant="body">Success Rate</Typography>
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
                                                    <Typography variant="body">Error/Confusion Rate</Typography>
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
                                                <Typography variant="body">
                                                    The grading result for SUS KEY is B - Excellent, with a score ranging between 85 and 91.9.
                                                </Typography>
                                            </Stack>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                            
                            <Stack pt={2} maxWidth='lg' direction='column' spacing={1} alignItems="center" margin='0 auto'>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell sx={{
                                                    position: 'sticky',
                                                    left: 0,
                                                    zIndex: 1,
                                                }}><Typography variant="body" fontWeight="700">Participant</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="body" fontWeight="700">P1</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="body" fontWeight="700">P2</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="body" fontWeight="700">P3</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="body" fontWeight="700">P4</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="body" fontWeight="700">P5</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="body" fontWeight="700">P6</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="body" fontWeight="700">P7</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="body" fontWeight="700">P8</Typography></StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <StyledTableRow>
                                                <TableCell sx={{
                    position: 'sticky',
                    left: 0,
                    zIndex: 1,
                }}><Typography variant="body" fontWeight="700">Age</Typography></TableCell>
                                                <TableCell><Typography variant="body">12</Typography></TableCell>
                                                <TableCell><Typography variant="body">35</Typography></TableCell>
                                                <TableCell><Typography variant="body">29</Typography></TableCell>
                                                <TableCell><Typography variant="body">16</Typography></TableCell>
                                                <TableCell><Typography variant="body">14</Typography></TableCell>
                                                <TableCell><Typography variant="body">14</Typography></TableCell>
                                                <TableCell><Typography variant="body">14</Typography></TableCell>
                                                <TableCell><Typography variant="body">24</Typography></TableCell>
                                            </StyledTableRow>
                                            <StyledTableRow>
                                                <TableCell sx={{
                    position: 'sticky',
                    left: 0,
                    zIndex: 1
                }}><Typography variant="body" fontWeight="700">Gender</Typography></TableCell>
                                                <TableCell><Typography variant="body">M</Typography></TableCell>
                                                <TableCell><Typography variant="body">M</Typography></TableCell>
                                                <TableCell><Typography variant="body">F</Typography></TableCell>
                                                <TableCell><Typography variant="body">M</Typography></TableCell>
                                                <TableCell><Typography variant="body">F</Typography></TableCell>
                                                <TableCell><Typography variant="body">F</Typography></TableCell>
                                                <TableCell><Typography variant="body">F</Typography></TableCell>
                                                <TableCell><Typography variant="body">M</Typography></TableCell>
                                            </StyledTableRow>

                                            <StyledTableRow>
                                                <TableCell sx={{
                    position: 'sticky',
                    left: 0,
                    zIndex: 1
                }}><Typography variant="body" fontWeight="700">Asthmatic</Typography></TableCell>

                                                <TableCell><Typography variant="body">No</Typography></TableCell>
                                                <TableCell><Typography variant="body">No</Typography></TableCell>
                                                <TableCell><Typography variant="body">Yes</Typography></TableCell>
                                                <TableCell><Typography variant="body">No</Typography></TableCell>
                                                <TableCell><Typography variant="body">No</Typography></TableCell>
                                                <TableCell><Typography variant="body">No</Typography></TableCell>
                                                <TableCell><Typography variant="body">No</Typography></TableCell>
                                                <TableCell><Typography variant="body">Yes</Typography></TableCell>
                                            </StyledTableRow>

                                            <StyledTableRow>
                                                <TableCell sx={{
                    position: 'sticky',
                    left: 0,
                    zIndex: 1,
                }}><Typography variant="body" fontWeight="700">Test type</Typography></TableCell>
                                                <TableCell><Typography variant="body">In-person</Typography></TableCell>
                                                <TableCell><Typography variant="body">Online</Typography></TableCell>
                                                <TableCell><Typography variant="body">In-person</Typography></TableCell>
                                                <TableCell><Typography variant="body">Online</Typography></TableCell>
                                                <TableCell><Typography variant="body">Online</Typography></TableCell>
                                                <TableCell><Typography variant="body">Online</Typography></TableCell>
                                                <TableCell><Typography variant="body">Online</Typography></TableCell>
                                                <TableCell><Typography variant="body">In-person</Typography></TableCell>
                                            </StyledTableRow>
                                            
                                            <StyledTableRow>
                                                <TableCell sx={{
                    position: 'sticky',
                    left: 0,
                    zIndex: 1
                }}><Typography variant="body" fontWeight="700">Accompanied</Typography></TableCell>

                                                <TableCell><Typography variant="body">No</Typography></TableCell>
                                                <TableCell><Typography variant="body">No</Typography></TableCell>
                                                <TableCell><Typography variant="body">No</Typography></TableCell>
                                                <TableCell><Typography variant="body">Yes</Typography></TableCell>
                                                <TableCell><Typography variant="body">Yes</Typography></TableCell>
                                                <TableCell><Typography variant="body">Yes</Typography></TableCell>
                                                <TableCell><Typography variant="body">Yes</Typography></TableCell>
                                                <TableCell><Typography variant="body">No</Typography></TableCell>
                                            </StyledTableRow>

                                            <StyledTableRow>
                                                <TableCell sx={{
                    position: 'sticky',
                    left: 0,
                    zIndex: 1
                }}><Typography variant="body" fontWeight="700">Test environment</Typography></TableCell>

                                                <TableCell><Typography variant="body">Home</Typography></TableCell>
                                                <TableCell><Typography variant="body">Home</Typography></TableCell>
                                                <TableCell><Typography variant="body">Office</Typography></TableCell>
                                                <TableCell><Typography variant="body">Home</Typography></TableCell>
                                                <TableCell><Typography variant="body">Home</Typography></TableCell>
                                                <TableCell><Typography variant="body">Home</Typography></TableCell>
                                                <TableCell><Typography variant="body">Home</Typography></TableCell>
                                                <TableCell><Typography variant="body">Office</Typography></TableCell>
                                            </StyledTableRow>

                                            <StyledTableRow>
                                                <TableCell sx={{
                    position: 'sticky',
                    left: 0,
                    zIndex: 1
                }}><Typography variant="body" fontWeight="700">Profession</Typography></TableCell>

                                                <TableCell><Typography variant="body">Student</Typography></TableCell>
                                                <TableCell><Typography variant="body">Interior Designer</Typography></TableCell>
                                                <TableCell><Typography variant="body">UX Designer</Typography></TableCell>
                                                <TableCell><Typography variant="body">Student</Typography></TableCell>
                                                <TableCell><Typography variant="body">Student</Typography></TableCell>
                                                <TableCell><Typography variant="body">Student</Typography></TableCell>
                                                <TableCell><Typography variant="body">Student</Typography></TableCell>
                                                <TableCell><Typography variant="body">UI Designer</Typography></TableCell>
                                            </StyledTableRow>

                                            <StyledTableRow>
                                                <TableCell sx={{
                    position: 'sticky',
                    left: 0,
                    zIndex: 1,
                }}><Typography variant="body" fontWeight="700">Nationality</Typography></TableCell>

                                                <TableCell><Typography variant="body">PT</Typography></TableCell>
                                                <TableCell><Typography variant="body">PT</Typography></TableCell>
                                                <TableCell><Typography variant="body">PT</Typography></TableCell>
                                                <TableCell><Typography variant="body">PT</Typography></TableCell>
                                                <TableCell><Typography variant="body">PT</Typography></TableCell>
                                                <TableCell><Typography variant="body">PT</Typography></TableCell>
                                                <TableCell><Typography variant="body">PT</Typography></TableCell>
                                                <TableCell><Typography variant="body">PT</Typography></TableCell>
                                            </StyledTableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Typography component='p' variant='caption' maxWidth='sm'>Data of the usability test's participants</Typography>
                            </Stack>

                            </Stack>
                            <Stack direction='column' spacing={2} alignItems="center" margin='0 auto'>
                                <Typography variant="phaseProjectSubTitle" maxWidth='sm' component='h3' width={'100%'}>Human Results</Typography>
                                <Typography variant="body" maxWidth='sm' component='p'>
                                    I have compiled the concrete issues detected during usability testing, screen by screen. Click <Link sx={{color: 'text.link'}} target="_blank" href="https://www.figma.com/design/Adnr2VrucX5ZQwjK9kV2BB/Human-Results?node-id=0-1&t=TPi8BCo5s3fUfzgs-1">here</Link> to see.
                                </Typography>
                            </Stack>
                            <Stack direction='column' spacing={2} alignItems="center" margin='0 auto'>
                                <Typography variant="phaseProjectSubTitle" maxWidth='sm' component='h3' width={'100%'}>Findings and recommendations</Typography>
                                <Box maxWidth='sm' margin='0 auto'>
                                    <Accordion>
                                        <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        >
                                            <Typography variant="body" width={'100%'}>Findings</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Some participants hesitated in areas with a lot of text;                                                 
                                                    </Typography>}                            
                                                    />
                                            </ListItem>    
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        The text did not seem sufficient to distinguish buttons of the same hierarchy;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>   
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        The options "Play" and "Finish" confused several participants at the end of the FEM process;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>   
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        The concept of FAST FEM will need to be distinguished in another way, as there were participants who thought it was a quick way to complete the process to play immediately afterward;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>   
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        The "Repeat" button does not specify whether we repeat the maneuver or restart the process;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>  
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Game prototypes without movement hinder the progress of the test;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>  
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Users did not understand the "Stop" button during the countdown;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>  
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
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
                                            <Typography variant="body">Recommendations</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        The buttons that control the sound, "Play" and "Stop," should be icon buttons with the respective symbols and, if possible, designate their function;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Assess the efficiency of the feedback provided at certain steps of the FEM (successful maneuvers and maneuver errors);
                                                    </Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        The help and error feedback should contain images;
                                                    </Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        The exit button from the pause menu should be changed to "Exit to main menu".
                                                    </Typography>}                            
                                                    />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CircleIcon sx={{ fontSize: 8 }} color="primary"/>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={<Typography variant="body">
                                                        Evaluate the usefulness of the help section.
                                                    </Typography>}                            
                                                    />
                                            </ListItem>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                            </Stack>
                        </Stack>

                        <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                            <Typography sx={{
                                maxWidth: 'sm',
                                width: '100%'}} variant='phaseProjectTitle' component='h2'>Conclusion</Typography>
                            <Typography variant="body" maxWidth='sm' component='p'>In conclusion, the usability tests revealed several areas for improvement, particularly in terms of clarity button labeling, and user guidance. Participants hesitated in text-heavy sections and found some button functions ambiguous, highlighting the need for clearer visual cues and improved feedback mechanisms. Additionally, the distinction between different FEM process stages must be reinforced to avoid confusion. To address these challenges, key adjustments will include refining button design, enhancing feedback with visuals, and reevaluating the help section’s effectiveness. These changes will aim to create a more intuitive and seamless user experience when the project is resumed.</Typography>  
                        </Stack>
                        
                        <Stack maxWidth='sm' direction="column" margin='0 auto' alignItems="center">
                            {typeof window !== "undefined" && (
                                <LinkRoute to={'/'} key={2}><Typography variant='body' sx={{color: 'text.link'}} component='p' height={50} alignContent='end'>Return home</Typography></LinkRoute>
                            )}
                        </Stack>
                    </Stack>
                }
            />
        </>
    )
}

export default MillerVillageTycoonPage