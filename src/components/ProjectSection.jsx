import * as React from "react"
import { Stack, Typography } from "@mui/material"

const ProjectSection = ({backgroundColor, topic='1. Topic', children}) => {
    return (
        <Stack direction='column' bgColor={backgroundColor} pt={4} pb={5} justifyContent="center" alignItems="center"> 
            <Typography variant="stepText" mb={2}>{topic}</Typography>
            {children}
        </Stack>
    )
}



export default ProjectSection