import React, { useEffect } from 'react';
import { Container } from "@mui/material"
import Footer from '../components/Footer';
const Layout = ({children}) => {
  return (<>
   <Container  maxWidth="false" sx={{backgroundColor:"background.default"}}>
      {children}
      <Footer />
    </Container>
  </>
  )
}

export default Layout