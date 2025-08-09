import * as React from "react"
import { Link } from "react-router-dom";
import { Typography, Stack } from "@mui/material"

const ProjectHeader = ({projectTitle, entities, year}) => {
    return (<>
            <Stack component='header' maxWidth='md' direction="column" spacing={1} py={5} mx='auto' width={'100%'} bgcolor='background.default'>
                <Link to={'/'} key={1}><Typography variant='body' color='text.link' component='p' height={50} alignContent='end'>Return home</Typography></Link>
                <Stack maxWidth='md' width='100%' direction="row" sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography variant="h1" component='h1' maxWidth='80%'>{projectTitle}</Typography>
                    <Typography variant="body" component='span'>{year}</Typography>
                </Stack>
                <Typography variant="h2" component='h2' width='100%' >{entities}</Typography>
            </Stack>
        </>
    )
}

export default ProjectHeader