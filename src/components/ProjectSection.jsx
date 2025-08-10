import * as React from "react"
import { Stack, Typography } from "@mui/material"

const ProjectSection = ({topic='1. Topic', children, mt=0, mb=0, backgroundColor='background.default', pb=0}) => {
    return ( <Stack direction='column' spacing={3} alignItems="center" margin='0 auto' pb={pb} marginTop={mt} marginBottom={mb} bgcolor={backgroundColor}>
            <Typography sx={{
                        maxWidth: 'sm',
                        width: '100%'}} py={4} variant="h2" component='h2'>{topic}</Typography>
            {children}
            </Stack>
    )
}



export default ProjectSection