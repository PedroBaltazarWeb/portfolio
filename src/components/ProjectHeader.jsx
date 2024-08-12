import * as React from "react"
import { Typography, Stack } from "@mui/material"

const ProjectHeader = ({projectTitle, entities, year}) => {
    return (
        <Stack 
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            pt={5}
            pb={12}>
            <Typography variant="projectInfoHeader">Project</Typography>
            <Typography variant="projectTitleHeader" maxWidth={600} textAlign='center'>{projectTitle}</Typography>
            <Typography variant="projectInfoHeader">{entities}</Typography>
            <Typography variant="projectInfoHeader">{year}</Typography>
        </Stack>
    )
}

export default ProjectHeader