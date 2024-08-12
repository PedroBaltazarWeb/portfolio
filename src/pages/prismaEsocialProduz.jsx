import * as React from "react"
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "../../css/main.min.css";
import { ThemeProvider } from "@mui/material";
import theme from '../../themes/mui-theme'
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import Link from '@mui/material/Link';
import ProjectSection from '../components/ProjectSection';
import EsocialFirstIlus from '../images/prismaEsocialProduz/esocialIlust1.svg';
import designSprintOne from '../images/prismaEsocialProduz/designsprint1.jpg';
import designSprintTwo from '../images/prismaEsocialProduz/designsprint2.jpg';
import designSprintThree from '../images/prismaEsocialProduz/designsprint3.jpg';
import PrismaFirstIlus from '../images/prismaEsocialProduz/prismaIlust1.svg';
import PrismaSecondIlus from '../images/prismaEsocialProduz/prismaIlust2.svg';
import ProduzFirstIlus from '../images/prismaEsocialProduz/produzIlust1.svg';
import ProduzSecondIlus from '../images/prismaEsocialProduz/produzIlust2.svg';
import f3mLogo from '../images/techsIcons/f3m.svg';
import downloadTheApp from '../images/mpdsAndroidProject/downloadTheApp.svg';
import PrismaLogin from '../images/prismaEsocialProduz/prismaLogin.png';
import PrismaLogo from '../images/prismaEsocialProduz/prismaLogo.svg';
import ProduzLogo from '../images/prismaEsocialProduz/produzLogo.svg';
import EsocialLogo from '../images/prismaEsocialProduz/esocialLogo.svg';
import AllThree from '../images/prismaEsocialProduz/allThree.png';
import Layout from '../components/Layout';

import { Typography, Stack, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ImageGallery from "../components/ImageGallery";

const imagesFirstGallery = [
  {
    src: designSprintOne,
    title: 'Mpds To the Moon Illustration',
    description: 'Mpds To the Moon Illustration;'
  },
  {
    src: designSprintTwo,
    title: 'Mpds To the Moon Illustration',
    description: 'Mpds To the Moon Illustration;'
  },
  {
    src: designSprintThree,
    title: 'Mpds To the Moon Illustration',
    description: 'Mpds To the Moon Illustration;'
  }
];

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "Noto Sans, sans-serif"
  //fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const briefCase = {
  fontFamily: "Work Sans, sans-serif",
  fontSize: 30,
  fontWeight: 500,
  paddingRight: 75
}

const detailsCase = {
  fontFamily: "Work Sans, sans-serif",
  fontSize: 14,
  color: "#5a498f",
  fontWeight: 700
}

const detail = {
  fontSize: 14,
  color: "#5a498f",
  fontWeight: 600
}


// markup
const PrismaProduzESocialPage = () => {
  return (
  <>
     <ThemeProvider theme={theme}>
            
            <LayoutProject
                header={
                    <ProjectHeader
                        projectTitle='Prisma, eSocial & Produz' 
                        entities='F3M' 
                        year='2017 until Now'
                    ></ProjectHeader>
                }
                firstProjectStep={
                  <ProjectSection topic="The Family" >
     
                    <Typography variant="pRegularText" component='p' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                    }}>
                      At our company, we pride ourselves on developing innovative software solutions that cater to diverse industry needs. By bringing together three large-scale products under one development base, we foster a collaborative environment where different sectors can share insights and drive progress. This setup exemplifies our commitment to flexibility and teamwork, as our development teams and business managers work hand-in-hand to deliver exceptional results.
                      </Typography>
                  <Box textAlign='center' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                        mx: 'auto'
                    }}
                    width={{
                          xs: 400,
                          sm: 700,
                          md: 800,
                          lg: 800
                        }}
                    >
                    <img 
                      src={PrismaLogin} 
                      alt="Prisma Login"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderRadius: '8px'
                      }}
                    />
                  </Box>
                      
                      <Typography variant="pRegularText" component='p' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                    }}>
                      Prisma offers advanced software solutions specifically designed for the management of the optics sector, ensuring efficient operations and seamless integration for businesses within the optical industry. Produz provides comprehensive management software tailored for the textile industry, enhancing productivity and streamlining processes. eSocial is dedicated to the management of Institutions for Social Solidarity (IPSS), such as elderly care and child care facilities, facilitating effective administration and care delivery.
                      </Typography>
                  <Stack direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'row'
                        }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                    sx={{
                      pb: {
                        xs: theme.spacing(5),
                        sm: theme.spacing(5),
                      },
                  }}
                     >
                      <img width='auto' height='400'
                        style={{
                          borderRadius: '8px'
                        }}
                      src={PrismaFirstIlus} alt="Prisma Illustration"/>
                      <img width='auto' height='400'
                        style={{
                          borderRadius: '8px'
                        }}
                      src={ProduzFirstIlus} alt="Produz Illustration"/>
                      <img width='auto' height='400'
                        style={{
                          borderRadius: '8px'
                        }}
                      src={EsocialFirstIlus} alt="eSocial Illustration"/>  
                  </Stack>
                  <Typography variant="pRegularText" component='p' sx={{
                        pb: {
                          xs: theme.spacing(5),
                          sm: theme.spacing(5),
                        },
                    }}>
                    Our development base hosts three large-scale products, each serving distinct industries: optics, textile, and social care. This unique setup fosters an environment where different areas share the same space, promoting collaboration and innovation. It’s a testament to our flexibility and teamwork, as development teams and business managers seamlessly integrate their efforts to achieve common goals.                      
                  </Typography>

                  <Box textAlign='center' width={{
                          xs: 400,
                          sm: 700,
                          md: 800,
                          lg: 800
                        }}
                        sx={{
                          pb: {
                            xs: theme.spacing(5),
                            sm: theme.spacing(5),
                          },
                          mx: 'auto'
                      }}>
                    <img src={AllThree} style={{
                        maxWidth: '100%',
                        height: 'auto',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderRadius: '8px'
                      }}/>
                  </Box>
<Typography>
<Typography variant="pRegularText" component='p' fontWeight={700}>In this products I:</Typography>
  <List dense sx={{padding: {
        xs: 0,
        sm: 0,
        md: '0px 160px'
      }
    }}>
    <ListItem>
        <ListItemIcon>
            <ArrowRightAltIcon color="action"/>
        </ListItemIcon>
        <ListItemText
            primary={<Typography variant="regularText">Designed and built components (UI oriented);</Typography>}
        />
    </ListItem>
    <ListItem>
        <ListItemIcon>
            <ArrowRightAltIcon color="action"/>
        </ListItemIcon>
        <ListItemText
            primary={<Typography variant="regularText">Collaborated with the Marketing Team to define and design the identity of the products;</Typography>}
        />
    </ListItem>
    <ListItem>
        <ListItemIcon>
            <ArrowRightAltIcon color="action"/>
        </ListItemIcon>
        <ListItemText
            primary={<Typography variant="regularText">Participated in usability tests;</Typography>}
        />
    </ListItem>
    <ListItem>
        <ListItemIcon>
            <ArrowRightAltIcon color="action"/>
        </ListItemIcon>
        <ListItemText
            primary={<Typography variant="regularText">Prototyped several features;</Typography>}
        />
    </ListItem>
    <ListItem>
        <ListItemIcon>
            <ArrowRightAltIcon color="action"/>
        </ListItemIcon>
        <ListItemText
            primary={<Typography variant="regularText">Visual tested on multiple browsers and devices;</Typography>}
        />
    </ListItem>
    <ListItem>
        <ListItemIcon>
            <ArrowRightAltIcon color="action"/>
        </ListItemIcon>
        <ListItemText
            primary={<Typography variant="regularText">Co-developed component libraries and design systems;</Typography>}
        />
    </ListItem>
    <ListItem>
        <ListItemIcon>
            <ArrowRightAltIcon color="action"/>
        </ListItemIcon>
        <ListItemText
            primary={<Typography variant="regularText">Designed logos and icons;</Typography>}
        />
    </ListItem>
    <ListItem>
        <ListItemIcon>
            <ArrowRightAltIcon color="action"/>
        </ListItemIcon>
        <ListItemText
            primary={<Typography variant="regularText">Participated in <Link color="secondary" href="https://www.gv.com/sprint/">Design Sprints</Link>.</Typography>}
        />
    </ListItem>
  </List>
</Typography>


<ImageGallery images={imagesFirstGallery} widthGallery={{
                          xs: 400,
                          sm: 700,
                          md: 800,
                          lg: 800
                        }} heightGallery={510} marginTop={4}/>

<Stack direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                        }} spacing={2} mt={5}>
                <iframe className="w-100" height="315" src="https://www.youtube.com/embed/1xWoAVe1ZwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe className="w-100" height="315" src="https://www.youtube.com/embed/N8vfrCBFaYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
              </Stack>
</ProjectSection>
              
                }
                
               
                />
                </ThemeProvider>
  </> )}

export default PrismaProduzESocialPage
