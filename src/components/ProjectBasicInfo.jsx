import { Typography, Box } from "@mui/material"
import * as React from "react"
import theme from '../../themes/mui-theme'

const ProjectBasicInfo = ({info}) => {
    return (
        <Box sx={{
            border: '1px solid #E8B80E',
            borderRadius: 2,
            zIndex: 1
        }} bgcolor={'#181C4F'} maxWidth={700} p={5} mt={'-70px'} mb={{
            xs: 0,
            sm: 0,
            md: 0,
            lg: '150px',
            xl: '150px'
          }}>
            <Typography variant="regularText">{info}</Typography>
        </Box>
    )
}

export default ProjectBasicInfo