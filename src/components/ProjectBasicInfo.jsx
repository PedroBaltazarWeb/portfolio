import { Typography, Box, Stack } from "@mui/material"
import * as React from "react"

const ProjectBasicInfo = ({info, children}) => {
    return (
        <Box py={5}>
            <Stack direction='column' maxWidth='sm' margin='0 auto' spacing={2} px={{xs: 2, sm: 2, md:0}}>
                <Typography variant="h2" component='h2'>Description</Typography>
                <Typography component='p'  variant="body">{info}</Typography>
            </Stack>
            <Box maxWidth='md' margin='0 auto'>
                {children}
            </Box>
        </Box>
    )
}

export default ProjectBasicInfo