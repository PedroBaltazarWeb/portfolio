import * as React from "react"
import { Grid, Typography } from "@mui/material"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import CreateIcon from '@mui/icons-material/Create';
import AssessmentIcon from '@mui/icons-material/Assessment';

const useStyles={
    root: {

    }
}

const ProjectSteps = ({firstIcon = <SearchIcon fontSize="large" color='action'></SearchIcon>,
    firstStep = "1. Research & Interviews",
    firstStepDescription= "I interviewed people and read many papers about asthma in teenagers.",
    secondIcon = <EmojiObjectsIcon fontSize="large" color='action'></EmojiObjectsIcon>,
    secondStep = "2. Concept",
    secondStepDescription= "I interviewed people and read many papers about asthma in teenagers.",
    thirdIcon = <DashboardIcon fontSize="large" color='action'></DashboardIcon>,
    thirdStep= "3. Wireframing",
    thirdStepDescription= "I interviewed people and read many papers about asthma in teenagers.",
    fourthIcon = <CreateIcon fontSize="large" color='action'></CreateIcon>,
    fourthStep= "4. Prototype",
    fourthStepDescription= "I interviewed people and read many papers about asthma in teenagers.",
    fifthIcon = <AssessmentIcon fontSize="large" color='action'></AssessmentIcon>,
    fifthStep= "5. Evaluation",
    fifthStepDescription= "I interviewed people and read many papers about asthma in teenagers.",
    isFifthSlotHidden = false
}) => {
    return (
        <Grid container
            direction="row"
            spacing={2}
            my={5}
            py={5}
            justifyContent="center"
            alignItems="center"
             >
            <Grid item md={12} lg={6} xl={4}>
                <Stack direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center">
                    <Box
                        sx={{
                        width: 85,
                        height: 85,
                        borderRadius: 1,
                        bgcolor: '#107684',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {firstIcon}
                    </Box>
                    <Stack direction='column' width={300}>
                        <Typography variant="stepTitle">{firstStep}</Typography>
                        <Typography variant="regularText">{firstStepDescription}</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item md={12} lg={6} xl={4}>
                <Stack direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center">
                    <Box
                        sx={{
                        width: 85,
                        height: 85,
                        borderRadius: 1,
                        bgcolor: '#00B9C4',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {secondIcon}
                    </Box>
                    <Stack direction='column' width={300}>
                        <Typography variant="stepTitle">{secondStep}</Typography>
                        <Typography variant="regularText">{secondStepDescription}</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item md={12} lg={6} xl={4}>
                <Stack direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center">
                    <Box
                        sx={{
                        width: 85,
                        height: 85,
                        borderRadius: 1,
                        bgcolor: '#179EEA',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {thirdIcon}
                    </Box>
                    <Stack direction='column' width={300}>
                        <Typography variant="stepTitle">{thirdStep}</Typography>
                        <Typography variant="regularText">{thirdStepDescription}</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item md={12} lg={6} xl={4}>
                <Stack direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center">
                    <Box
                        sx={{
                        width: 85,
                        height: 85,
                        borderRadius: 1,
                        bgcolor: '#C043AC',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {fourthIcon}
                    </Box>
                
                    <Stack direction='column' width={300}>
                        <Typography variant="stepTitle">{fourthStep}</Typography>
                        <Typography variant="regularText">{fourthStepDescription}</Typography>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item md={12} lg={6} xl={4} hidden={isFifthSlotHidden}>
                <Stack direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center">
                    <Box
                        sx={{
                        width: 85,
                        height: 85,
                        borderRadius: 1,
                        bgcolor: '#C2614C',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {fifthIcon}
                    </Box>
                    <Stack direction='column' width={300}>
                        <Typography variant="stepTitle">{fifthStep}</Typography>
                        <Typography variant="regularText">{fifthStepDescription}</Typography>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default ProjectSteps