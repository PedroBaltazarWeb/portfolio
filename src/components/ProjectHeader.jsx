import * as React from "react"
import { Typography, Stack } from "@mui/material"
import badge from './../images/badge.webp'
import CssBaseline from '@mui/material/CssBaseline';
const ProjectHeader = ({projectTitle, entities, year}) => {
    return (<>
     <CssBaseline />
        <Stack 
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            pt={5}
            pb={16}
            position={'relative'}
            sx={{
                
                background: 'rgb(24,27,67)',
        background: 'linear-gradient(180deg, rgba(24,27,67,1) 0%, rgba(12,14,34,1) 100%)',
  
            }}>
                <img src={badge} height={250} style={{
                                                  position: 'absolute',
                                                  right: '20%',
                                                  top: '10%',
                                                  filter: 'blur(6px)',
                                                  opacity: '0.4'
                                                }}></img>
            <Typography variant="projectTitleHeader" maxWidth={600} textAlign='center'>{projectTitle}</Typography>
            <Typography variant="projectInfoHeader">{entities}</Typography>
            <Typography variant="projectInfoHeader">{year}</Typography>
        </Stack>

        </>
    )
}

export default ProjectHeader