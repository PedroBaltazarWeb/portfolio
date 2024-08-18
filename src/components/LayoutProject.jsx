import * as React from "react"
import { Container, Box } from "@mui/material"
import Footer from "./Footer"
import theme from '../../themes/mui-theme'

const LayoutProject = ({header, projectSteps, firstProjectStep, secondProjectStep, thirdProjectStep, fourthProjectStep, fifthProjectStep}) => {
  return (
    <Box component="main" sx={{bgcolor: theme.palette.primary.main }}>
      {header}
      <Box sx={{bgcolor: '#283982' }}>
        <Container  maxWidth='lg'>
          {projectSteps}
        </Container>
      </Box>
      <Box sx={{bgcolor: '#0B1231' }} py={5}>
        <Container  maxWidth='lg'>
          {firstProjectStep}
        </Container>
      </Box>
      <Box py={5} hidden={secondProjectStep ? false : true}>
        <Container maxWidth='lg' py={5}>
          {secondProjectStep}
        </Container>
      </Box>
      <Box sx={{bgcolor: '#1E2647' }} py={5} hidden={thirdProjectStep ? false : true}>
        <Container maxWidth='lg'>
          {thirdProjectStep}
        </Container>
      </Box>
      <Box py={5} hidden={fourthProjectStep ? false : true}>
        <Container maxWidth='lg'>
          {fourthProjectStep}
        </Container>
      </Box>
      <Box sx={{bgcolor: '#0B1231'}} py={5} hidden={fifthProjectStep ? false : true}>
        <Container maxWidth='lg'>
          {fifthProjectStep}
        </Container>
      </Box>
    </Box>
  )
}

export default LayoutProject