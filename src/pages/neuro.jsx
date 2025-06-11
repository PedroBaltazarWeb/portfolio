import React from 'react';
import { useState } from 'react';
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import ProjectBasicInfo from '../components/ProjectBasicInfo';
import ProjectSteps from '../components/ProjectSteps';
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from '../../themes/mui-theme';
import IframeWithLoading from '../components/IframeWithLoading';
import ProjectSection from '../components/ProjectSection';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {StyledTableCell, StyledTableRow} from '../../src/styles/millerVillage/useStyles';
import Paper from '@mui/material/Paper';
import { Stack, Button } from "@mui/material";


const useStyles ={
    '&.MuiTableContainer-root':{
        background: "#0B1231",
        "& .MuiTableCell-root":{
           color: "#fff" 
        }
    }
  }
  

const NeuroPage = () => {

    const [showIframeInterviewGuide, setShowIframeInterviewGuide] = useState(false);
    const [showIframeUserPersonas, setShowIframeUserPersonas] = useState(false);
    const [showIframeDesignSystem, setShowIframeDesignSystem] = useState(false);

    return (
    <>
        <ThemeProvider theme={theme}>
                <LayoutProject
                    header={
                        <ProjectHeader
                            projectTitle='Neuropsychological: Digital and remote application of Cognitive Deficit Screening Tests' 
                            entities='Fraunhofer & Universidade do Porto' 
                            year='2022/2023'
                        ></ProjectHeader>
                    }
                    projectSteps={
                        <Box display='flex'
                            justifyContent="center"
                            alignItems="center"
                            flexDirection='column'
                            pb={5}>
                            <ProjectBasicInfo 
                                info="The Portuguese Directorate-General of Health (DGS) highlights the importance of cognitive screening, recommending assessments for suspected cognitive decline and dementia. Key tests like the MMSE, Corsi Block-Tapping Test, and MoCA are essential in clinical practice but face challenges due to geographical barriers and patients' psychomotor limitations. To address this, I collaborated with a healthcare professional to develop a digital version of these tests, prioritizing interviews and contextual research.">
                            </ProjectBasicInfo>
                            
                            <ProjectSteps topic="Research & Interviews" isFifthSlotHidden={true}>
                            </ProjectSteps>
                        </Box>
                    }
                    firstProjectStep={
                        <ProjectSection topic="Introduction">
                                <Typography variant="pRegularText" component='p' sx={{
                                pb: {
                                xs: theme.spacing(5),
                                sm: theme.spacing(5),
                                },
                            }}>
                                    The COVID-19 pandemic highlighted the necessity for digital alternatives to traditional cognitive screening tests, as remote interventions became crucial during lockdowns. These digital tools, such as the online versions of the MMSE, Corsi Block-Tapping Test, and MoCA, have proven effective in overcoming geographical and psychomotor limitations. They also significantly reduced healthcare costs and increased the efficiency of neurocognitive rehabilitation.
                                </Typography>

                                <Typography variant="emphasisRegularText" component='p'>
                                    This platform, designed for healthcare professionals working with the elderly, addresses <Typography variant="emphasisRegularText" component='span' sx={{color: 'rgb(174 187 255)', [theme.breakpoints.up('md')]: {
          padding: 0
        }}}>challenges such as reduced emotional contact and technical interruptions</Typography> during remote assessments, ensuring <Typography variant="emphasisRegularText" component='span' sx={{color: 'rgb(174 187 255)', [theme.breakpoints.up('md')]: {
          padding: 0
        }}}>more effective and accessible cognitive evaluations</Typography>.
                                </Typography>

                                <Typography variant="pRegularText" component='p' >   
                                    Cognitive screening tools like the Mini Mental State Examination (MMSE), Corsi Block-Tapping Test, and Montreal Cognitive Assessment (MoCA) are essential in clinical settings. The MMSE assesses multiple cognitive domains with a 30-point scale but has few digital alternatives. The Corsi Block-Tapping Test evaluates visuo-spatial working memory, with digital versions enhancing administration and data tracking. The MoCA, designed to detect mild cognitive impairment, has several digital versions for remote use, including Telephone MoCA and MoCA duo, improving accessibility and integration with Electronic Health Records (EHR).
                                </Typography>
                        </ProjectSection>

                    }
                    secondProjectStep={
                        <ProjectSection topic="Research & Interviews">
                            <Typography variant="pRegularText" component='p'>   
                                The research aims to examine healthcare professionals perceptions of digital tools and compare them with existing literature. Additionally, it seeks to identify the main challenges encountered when administering cognitive screening tests in remote or digital settings.
                            </Typography>




                            <Stack direction='column' textAlign={'center'} sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                    md: 'block'
                                }
                            }}>
                                <Stack spacing={3} direction='row' justifyContent='center' alignItems={'center'} textAlign={'center'}>
                                                                                                 
                                    <Button variant="outlined"
                                        sx={{
                                            width: 260,
                                            background: showIframeInterviewGuide ? '#e2b92133' : 'unset',
                                            '&:hover':{
                                                background: showIframeInterviewGuide ? '#e2b92133' : 'unset',
                                            }
                                        }}
                                        color="primary"
                                        onClick={() => setShowIframeInterviewGuide(prev => !prev)}>
                                        {showIframeInterviewGuide ? "Hide Interview Guide" : "View Interview Guide"}
                                    </Button>
                                </Stack>
                                
      
                                {showIframeInterviewGuide && (
                                    <Box mt={4}>
                                    <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FAmTjzEYYrXNZxjUqrVl2dH%2FInterview-Guide-and-Terms---Neuro-(English)%3Fnode-id%3D0-1%26t%3DSzk3UmdhtH4WcSlA-1" />                          
                            
                                    </Box>
                                )}
                          
                           </Stack>


                            <Box mx='auto' sx={{
                                color: "#ffffff",
                                background: "#17192b",
                                width: '100%',
                                borderRadius: 2,
                                mb:  theme.spacing(3),
                                p: theme.spacing(2),
                                display: {
                                    xs: 'block',
                                    sm: 'none',
                                    md: 'none',
                                    lg: 'none'
                                }
                            }}>
                                <Typography>
                                    Interview Guide available on tablet/desktop.
                                </Typography>
                            </Box>

                            <Typography variant="pRegularText" component='p' sx={{
                                mb: 4,
                                pb: {
                                xs: theme.spacing(5),
                                sm: theme.spacing(5),
                                },
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                    md: 'block'
                                }
                            }}>
                                Six participants, including clinical psychologists, researchers, senior diagnostic and therapeutic technicians, were selected based on specific criteria: they were healthcare professionals experienced in administering the tests under review. Recruitment involved contacting eight individuals, resulting in six positive responses, no negative responses, and two unanswered contacts. Interviews were conducted via Zoom (four) and in a mixed setting (two), with a designated online room and a scheduled date/time. Each session included a moderator guiding the interview and an observer noting key details. Before commencing, participants received an introduction covering researcher introductions, gratitude for participation, consent for audio and screen recording and explanation of interview goals. Informed consent was also obtained, ensuring ethical standards were met throughout the process.
                            </Typography>

                            <Typography variant="stepTitleHeader" pt={4}>
                                Characterization of the participants                           
                            </Typography>

                            <Typography variant="pRegularText">
                                The participants were classified based on the number of applications, on average per week in any context, as follows: zero applications correspond to no experience, up to two applications indicate little experience, between two and four applications represent moderate experience, and more than four applications signify extensive experience.            
                            </Typography>

                            <Box pb={1} sx={{ width: '100%'}}>
                                <TableContainer sx={useStyles["&.MuiTableContainer-root"]} component={Paper}>
                                    <Table  sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell sx={{
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#0B1231',
                  zIndex: 1,
                }}><Typography variant="regularText" fontWeight="700">Participant</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="regularText" fontWeight="700">P1</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="regularText" fontWeight="700">P2</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="regularText" fontWeight="700">P3</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="regularText" fontWeight="700">P4</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="regularText" fontWeight="700">P5</Typography></StyledTableCell>
                                                <StyledTableCell><Typography variant="regularText" fontWeight="700">P6</Typography></StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <StyledTableRow>
                                                <TableCell  sx={{
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#0B1231',
                  zIndex: 1,
                }}><Typography variant="regularText" fontWeight="700">Age</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">31</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">32</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">27</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">33</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">36</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">26</Typography></TableCell>
                                            </StyledTableRow>
                                            <StyledTableRow>
                                                <TableCell sx={{
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#0B1231',
                  zIndex: 1,
                }}><Typography variant="regularText" fontWeight="700">Gender</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">F</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">M</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">F</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">M</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">M</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">F</Typography></TableCell>
                                            </StyledTableRow>

                                            <StyledTableRow>
                                                <TableCell sx={{
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#0B1231',
                  zIndex: 1,
                }}><Typography variant="regularText" fontWeight="700">Education</Typography></TableCell>

                                                <TableCell><Typography variant="regularText">Clinical and Health Psychology, Specialization in Neuropsychology</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Clinical and Health Psychology</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Clinical and Health Psychology, Specialization in Neuropsychology</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Clinical and Health Psychology, Specialization in Neuropsychology</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Occupational Therapy</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Clinical and Health Psychology</Typography></TableCell>
                                            </StyledTableRow>

                                            <StyledTableRow>
                                                <TableCell sx={{
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#0B1231',
                  zIndex: 1,
                }}><Typography variant="regularText" fontWeight="700">Profession</Typography></TableCell>

                                                <TableCell><Typography variant="regularText">Psychologist and Researcher</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Researcher</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Researcher</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Psychologist</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">University Professor</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Psychologist</Typography></TableCell>
                                            </StyledTableRow>

                                            
                                            <StyledTableRow>
                                                <TableCell sx={{
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#0B1231',
                  zIndex: 1,
                }}><Typography variant="regularText" fontWeight="700">MoCA</Typography></TableCell>

                                                <TableCell><Typography variant="regularText">Extensive experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Extensive experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Moderate experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Extensive experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Extensive experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Little experience</Typography></TableCell>
                                            </StyledTableRow>
                                            
                                            <StyledTableRow>
                                                <TableCell sx={{
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#0B1231',
                  zIndex: 1,
                }}><Typography variant="regularText" fontWeight="700">Corsi Test</Typography></TableCell>

                                                <TableCell><Typography variant="regularText">Little experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Extensive experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">No experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">No experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">No experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">No experience</Typography></TableCell>
                                            </StyledTableRow>

                                            <StyledTableRow>
                                                <TableCell sx={{
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#0B1231',
                  zIndex: 1,
                }}><Typography variant="regularText" fontWeight="700">MMSE</Typography></TableCell>

                                                <TableCell><Typography variant="regularText">Little experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Little experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Little experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Extensive experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Extensive experience</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Little experience</Typography></TableCell>
                                            </StyledTableRow>

                                            <StyledTableRow>
                                                <TableCell sx={{
                  position: 'sticky',
                  left: 0,
                  backgroundColor: '#0B1231',
                  zIndex: 1,
                }}><Typography variant="regularText" fontWeight="700">Digital Literacy</Typography></TableCell>

                                                <TableCell><Typography variant="regularText">Considers themselves Proficient</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Considers themselves Proficient</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Considers themselves Proficient</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Considers themselves Proficient</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Considers themselves Proficient</Typography></TableCell>
                                                <TableCell><Typography variant="regularText">Considers themselves Proficient</Typography></TableCell>
                                            </StyledTableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Box>

                            <Typography variant="pRegularText">
                                Overall, participants reported several challenges in remote test applications, including connection issues affecting communication and therapeutic relationships, low technological literacy among patients, poor camera resolution hindering facial expression reading, difficulties with visuospatial tasks, challenges in ensuring patients understand instructions, and assessing the validity of responses in temporal and spatial orientation tasks.

                                For improvements, they suggested implementing a call quality notification with latency indicators, an instructional video with a pre-test, a pointer to clarify references, continuous display of the patient’s camera feed, and the ability for professionals to add notes to tests.

                                Advantages of remote testing included increased productivity by eliminating travel time and broader participation from rural areas. However, disadvantages included fatigue from connection-related disruptions and the inability to control the testing environment.    
                            </Typography>


                            <Typography variant="stepTitleHeader" pt={4}>User personas</Typography>

                            <Typography variant="pRegularText" component='p'>
                                The analysis of exploratory interviews with healthcare professionals using cognitive screening tests highlighted the heterogeneity of both examiners and examinees. While all interviewed professionals considered themselves technologically proficient, they acknowledged varying levels of digital literacy among their peers and noted some skepticism toward digital tools in healthcare. To address this, personas were created to represent different digital literacy profiles.
                            </Typography>
                            
                            <Stack direction='column' textAlign={'center'} sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                    md: 'block'
                                }
                            }}>
                                <Stack spacing={3} direction='row' justifyContent='center' alignItems={'center'} textAlign={'center'}>
                                                                                                    
                                    <Button variant="outlined"
                                         sx={{
                                            width: 260,
                                            background: showIframeUserPersonas ? '#e2b92133' : 'unset',
                                            '&:hover':{
                                                background: showIframeUserPersonas ? '#e2b92133' : 'unset',
                                            }
                                        }}
                                        color="primary"
                                        onClick={() => setShowIframeUserPersonas(prev => !prev)}>
                                        {showIframeUserPersonas ? "Hide User Personas" : "View User Personas"}
                                    </Button>
                                </Stack>
                                
                                {showIframeUserPersonas && (
                                    <Box mt={4}>
                                        <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fp9TUzzu4SdiAyRuNJCuOC2%2FPerfis---Neuro-(English)%3Fnode-id%3D0-1%26t%3DVvEdpHEOGnH7z6g2-1" />                          
                                    </Box>
                                )}
                           </Stack>

                            <Box mx='auto' sx={{
                                color: "#ffffff",
                                background: "#17192b",
                                width: '100%',
                                borderRadius: 2,
                                mt:  theme.spacing(2),
                                mb:  theme.spacing(3),
                                p: theme.spacing(2),
                                display: {
                                    xs: 'block',
                                    sm: 'none',
                                    md: 'none',
                                    lg: 'none'
                                }
                            }}>
                                <Typography>
                                    User Personas available on tablet/desktop.
                                </Typography>
                            </Box>
                            
                        </ProjectSection>
                    }
                    fifthProjectStep={
                        <ProjectSection topic='Wireframing & Prototype'>

                            <Typography variant="pRegularText" component='p'>
                                The prototype was designed to integrate cognitive screening tests into Microsoft Teams through a plugin, utilizing a widely accessible and commonly used tool. This approach aims to simplify the application of the tests, make it easier for users with lower digital literacy, and minimize technical issues.                            
                            </Typography>
                            
                            <Box mt={4} sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                    md: 'block'
                                }
                            }}>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FwpvE3OmVxZ2BTa68hw27IF%2FLow-Fi-Neuro-(English)%3Fnode-id%3D0-1%26t%3DlDoyLjseq94urjJj-1" />                          
                            </Box>
                            <Box mx='auto' sx={{
                                color: "#ffffff",
                                background: "#17192b",
                                width: '100%',
                                borderRadius: 2,
                                mt:  theme.spacing(2),
                                mb:  theme.spacing(3),
                                p: theme.spacing(2),
                                display: {
                                    xs: 'block',
                                    sm: 'none',
                                    md: 'none',
                                    lg: 'none'
                                }
                            }}>
                                <Typography>
                                    Low-Fi available on tablet/desktop.
                                </Typography>
                            </Box>


                            <Typography variant="pRegularText" component='p'>
                            The Neuro tab in Teams allows healthcare professionals to access patient files, initiate cognitive screening tests via video call, and securely store data. Both the professional and the patient can see each other's cursors in real time, facilitating guidance. A text box is available for note-taking, and the system provides feedback based on the patient’s test history. At the end of the test, the professional can review scores, notes, and schedule the next session, while the patient does not have access to these screens.                            </Typography>

                            <Box mx='auto' sx={{
                                my:  theme.spacing(2),
                                pb: {
                                xs: theme.spacing(5),
                                sm: theme.spacing(5),
                                },
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                    md: 'block'
                                }
                            }}>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FA0z9HuAPSZifD06fjf49BO%2FUntitled%3Fnode-id%3D1-210%26t%3D498JcVWfI5LTyK4F-1%26scaling%3Dcontain%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A210%26show-proto-sidebar%3D1" />
                            </Box>

                            <Typography variant="pRegularText" component='p'>
                                For the patients, the Neuro tab in Teams allows to access the system using their credentials or a simple 4-digit PIN, facilitating access for those with mild cognitive decline. Patients wait for the healthcare professional to initiate the call. Emotional connection is enhanced through avatars that patients can send as feedback on their emotional state. To address connection issues, patients can continue exercises even if the signal is lost, with system feedback informing them of reconnection attempts. This ensures they remain engaged and aware of technical difficulties without disrupting the test.
                            </Typography>

                            <Box mx='auto' sx={{
                                color: "#ffffff",
                                background: "#17192b",
                                width: '100%',
                                borderRadius: 2,
                                mt:  theme.spacing(2),
                                mb:  theme.spacing(3),
                                p: theme.spacing(2),
                                display: {
                                    xs: 'block',
                                    sm: 'none',
                                    md: 'none',
                                    lg: 'none'
                                }
                            }}>
                                <Typography>
                                    Hi-Fi available on tablet/desktop.
                                </Typography>
                            </Box>

                            <Stack direction='column' textAlign={'center'} sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'block',
                                    md: 'block'
                                }
                            }}>
                                <Stack spacing={3} direction='row' justifyContent='center' alignItems={'center'} textAlign={'center'}>
                                                                                                    
                                    <Button variant="outlined"
                                        sx={{
                                            width: 260,
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
                                    <Box mt={4}>
                                        <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FaotvAKYQufaIaoWPTMm2ky%2FNeuro---Design-System%3Fnode-id%3D0-1%26t%3D5kFkKPZDLZE0g8dX-1" />                          
                                    </Box>
                                )}
                          
                           </Stack>


                            

                            <Box mx='auto' sx={{
                                color: "#ffffff",
                                background: "#17192b",
                                width: '100%',
                                borderRadius: 2,
                                mt:  theme.spacing(2),
                                mb:  theme.spacing(3),
                                p: theme.spacing(2),
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

                            <Typography variant="pRegularText" component='p'>
                             The MoCA Test was the most explored in prototyping, as it is the most widely used cognitive screening tool, while the MMSE was excluded due to its decreasing relevance. Integrating tests into Microsoft Teams offers advantages like security and familiarity but has limitations, such as the inability to use the full screen. Future improvements could include expanding screen usage for more features.

Challenges like patients’ low digital literacy, connectivity issues, and poor camera quality remain unsolved within this platform. Some healthcare professionals’ recommendations were incorporated, such as visible cursors for guidance, constant camera visibility, and note-taking options.


To address emotional distancing in remote sessions, avatars replaced emojis as they better represent facial expressions, and keeping the participants' video feeds visible enhances connection. Future solutions could include icebreaker activities or pre-recorded voice messages for network failures.

Additionally, a report generation feature or the ability to export results to digital health platforms could be valuable future enhancements.                           </Typography>

                        </ProjectSection>
                    
                    }
                />
        </ThemeProvider>
    </>
    )
}

export default NeuroPage
