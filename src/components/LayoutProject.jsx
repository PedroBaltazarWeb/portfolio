import * as React from "react"
import { Container, Box } from "@mui/material";
import Footer from "./Footer";

const LayoutProject = ({header, projectSteps, firstProjectStep, secondProjectStep, thirdProjectStep, fourthProjectStep, fifthProjectStep}) => {
  return (
    <Box component="main">
      {header}
      <Box>
        <Container  maxWidth='lg'>
          {projectSteps}
        </Container>
      </Box>
      <Box sx={{bgcolor: '#0c0e22' }} py={5}>
        <Container maxWidth='lg'>
          {firstProjectStep}
        </Container>
      </Box>
      <Box sx={{bgcolor: '#181b43' }} py={5} hidden={secondProjectStep ? false : true}>
        <Container maxWidth='lg' py={5}>
          {secondProjectStep}
        </Container>
      </Box>
      <Box sx={{bgcolor: '#0c0e22' }} py={5} hidden={thirdProjectStep ? false : true}>
        <Container maxWidth='lg'>
          {thirdProjectStep}
        </Container>
      </Box>
      <Box sx={{bgcolor: '#181b43' }} py={5} hidden={fourthProjectStep ? false : true}>
        <Container maxWidth='lg'>
          {fourthProjectStep}
        </Container>
      </Box>
      <Box sx={{background: 'rgb(21,25,71)',
        background: 'linear-gradient(180deg, #0c0e22 55%, rgba(36,40,109,1) 100%)'}} py={5} hidden={fifthProjectStep ? false : true}>
        <Container maxWidth='lg'>
          {fifthProjectStep}
        </Container>
      </Box>
          <Footer />
    </Box>
  )
}

export default LayoutProject