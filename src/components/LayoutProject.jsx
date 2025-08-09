import * as React from "react"
import { Container, Stack, Box } from "@mui/material";

const LayoutProject = ({header, projectSteps, firstProjectStep, secondProjectStep, thirdProjectStep, fourthProjectStep, fifthProjectStep}) => {
  return (
    <Stack component="main" width='100%' bgcolor='background.default'>
      {header}
      
        <Container disableGutters maxWidth="lg" sx={{bgcolor: 'background.paper', borderRadius: 1}}>
          {projectSteps}
        </Container>
        <Container disableGutters maxWidth="lg">
          {firstProjectStep}
        </Container>
        <Container disableGutters maxWidth="lg" hidden={secondProjectStep ? false : true}>
          {secondProjectStep}
        </Container>
        <Container disableGutters maxWidth="lg" hidden={thirdProjectStep ? false : true}>
          {thirdProjectStep}
        </Container>
        <Container disableGutters maxWidth="lg" hidden={fourthProjectStep ? false : true}>
          {fourthProjectStep}
        </Container>
        <Container disableGutters maxWidth="lg" hidden={fifthProjectStep ? false : true}>
          {fifthProjectStep}
        </Container>
    </Stack>
  )
}

export default LayoutProject