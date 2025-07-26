import * as React from "react"
import { Typography, Stack } from "@mui/material"

const ProjectHeader = ({projectTitle, entities, year}) => {
    return (<>
        <Stack 
            direction="column"
            >
            <Typography variant="projectTitleHeader">{projectTitle}</Typography>
            <Typography variant="projectInfoHeader">{entities}</Typography>
            <Typography variant="projectInfoHeader">{year}</Typography>
        </Stack>

        </>
    )
}

export default ProjectHeader