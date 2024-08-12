import * as React from "react"
import { Stack, Typography } from "@mui/material"
import theme from '../../themes/mui-theme'

const ProjectSection = ({backgroundColor= theme.palette.primary.dark, topic='1. Topic', children}) => {
    return (
        <Stack direction='column' bgColor={backgroundColor} pt={4} pb={5}> 
            <Typography variant="stepText" mb={2}>{topic}</Typography>
            {children}
        </Stack>
    )
}

export default ProjectSection