import React from 'react';
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

const NeuroPage = () => {
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
                            bgcolor={theme.palette.primary.light}
                            pb={5}>
                            <ProjectBasicInfo 
                                info="The Portuguese Directorate-General of Health (DGS) emphasizes the importance of cognitive screening tests, recommending cognitive assessments in specialized consultations for patients with suspected cognitive decline and dementia. Widely used tests such as the Mini Mental State Examination (MMSE), Corsi Block-Tapping Test, and Montreal Cognitive Assessment (MoCA) play a crucial role in clinical practice. However, administering these tests can be challenging due to geographical barriers and patients' psychomotor limitations. To overcome these challenges, a digital version of these cognitive screening tests has been developed.">
                            </ProjectBasicInfo>
                            <ProjectSteps topic="1. Research & Interviews" isFifthSlotHidden={true}>
                            </ProjectSteps>
                        </Box>
                    }
                    firstProjectStep={
                        <ProjectSection topic="Introduction">
                            <Box mb={10}>
                                <Typography variant="pRegularText" component='p' sx={{
                                pb: {
                                xs: theme.spacing(5),
                                sm: theme.spacing(5),
                                },
                            }}>
                                    The COVID-19 pandemic highlighted the necessity for digital alternatives to traditional cognitive screening tests, as remote interventions became crucial during lockdowns. These digital tools, such as the online versions of the MMSE, Corsi Block-Tapping Test, and MoCA, have proven effective in overcoming geographical and psychomotor limitations. They also significantly reduced healthcare costs and increased the efficiency of neurocognitive rehabilitation.
                                </Typography>

                                <Typography variant="emphasisRegularText" component='p' sx={{
                                pb: {
                                xs: theme.spacing(5),
                                sm: theme.spacing(5),
                                },
                            }}>
                                    This platform, designed for healthcare professionals working with the elderly, addresses challenges such as reduced emotional contact and technical interruptions during remote assessments, ensuring more effective and accessible cognitive evaluations.
                                </Typography>

                                <Typography variant="pRegularText" component='p' >   
                                    Cognitive screening tools like the Mini Mental State Examination (MMSE), Corsi Block-Tapping Test, and Montreal Cognitive Assessment (MoCA) are essential in clinical settings. The MMSE assesses multiple cognitive domains with a 30-point scale but has few digital alternatives. The Corsi Block-Tapping Test evaluates visuo-spatial working memory, with digital versions enhancing administration and data tracking. The MoCA, designed to detect mild cognitive impairment, has several digital versions for remote use, including Telephone MoCA and MoCA duo, improving accessibility and integration with Electronic Health Records (EHR).
                                </Typography>
                            </Box>
                        </ProjectSection>

                    }
                    secondProjectStep={
                        <ProjectSection topic="1. Research & Interviews">
                            <Typography variant="pRegularText" component='p' sx={{
                                pb: {
                                xs: theme.spacing(5),
                                sm: theme.spacing(5),
                                },
                            }}>   
                                The research aims to examine healthcare professionals' perceptions of digital tools and compare them with existing literature. Additionally, it seeks to identify the main challenges encountered when administering cognitive screening tests in remote or digital settings.
                            </Typography>

                          
                            <Box mx='auto' sx={{
                                pb: {
                                xs: theme.spacing(5),
                                sm: theme.spacing(5),
                                },
                            }}>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FAmTjzEYYrXNZxjUqrVl2dH%2FInterview-Guide-and-Terms---Neuro-(English)%3Fnode-id%3D0-1%26t%3DSzk3UmdhtH4WcSlA-1" />                          
                            </Box>

                            <Typography variant="pRegularText" component='p' sx={{
                                pb: {
                                xs: theme.spacing(5),
                                sm: theme.spacing(5),
                                },
                            }}>
                                Exploratory Interviews: Six participants, including clinical psychologists, researchers, and senior diagnostic and therapeutic technicians, were selected based on specific criteria: they were healthcare professionals experienced in administering the tests under review. Recruitment involved contacting eight individuals, resulting in six positive responses, no negative responses, and two unanswered contacts. Interviews were conducted via Zoom (four) and in a mixed setting (two), with a designated online room and a scheduled date/time. Each session included a moderator guiding the interview and an observer noting key details. Before commencing, participants received an introduction covering researcher introductions, gratitude for participation, consent for audio and screen recording, explanation of interview goals, and use of the interview guide (attached). Informed consent was also obtained, ensuring ethical standards were met throughout the process.
                            </Typography>


                            <Typography variant="stepTitleHeader" mb={2}>User personas</Typography>
                            <Box mx='auto'>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2Fp9TUzzu4SdiAyRuNJCuOC2%2FPerfis---Neuro-(English)%3Fnode-id%3D0-1%26t%3DVvEdpHEOGnH7z6g2-1" />                          
                            </Box>

                            
                        </ProjectSection>
                    }
                    thirdProjectStep={
                        <ProjectSection>
                            <Box mx='auto'>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FwpvE3OmVxZ2BTa68hw27IF%2FLow-Fi-Neuro-(English)%3Fnode-id%3D0-1%26t%3DlDoyLjseq94urjJj-1" />                          
                            </Box>
                            <Box mx='auto'>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FA0z9HuAPSZifD06fjf49BO%2FUntitled%3Fnode-id%3D1-210%26t%3D498JcVWfI5LTyK4F-1%26scaling%3Dcontain%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A210%26show-proto-sidebar%3D1" />
                            </Box>
                            <Box mx='auto'>
                                <IframeWithLoading src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FaotvAKYQufaIaoWPTMm2ky%2FNeuro---Design-System%3Fnode-id%3D0-1%26t%3D5kFkKPZDLZE0g8dX-1" />  
                            </Box>
                        </ProjectSection>
                    }
                />
        </ThemeProvider>
    </>
    )
}

export default NeuroPage
