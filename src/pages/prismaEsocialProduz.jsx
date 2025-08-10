import * as React from "react";
import "../../css/main.min.css";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import ProjectSection from '../components/ProjectSection';
import EsocialFirstIlus from '../images/prismaEsocialProduz/esocialIlust1.webp';
import designSprintOne from '../images/prismaEsocialProduz/designsprint1.webp';
import designSprintTwo from '../images/prismaEsocialProduz/designsprint2.webp';
import designSprintThree from '../images/prismaEsocialProduz/designsprint3.webp';
import PrismaFirstIlus from '../images/prismaEsocialProduz/prismaIlust1.webp';
import ProduzFirstIlus from '../images/prismaEsocialProduz/produzIlust1.webp';
import PrismaLogin from '../images/prismaEsocialProduz/prismaLogin.webp';
import AllThree from '../images/prismaEsocialProduz/allThree.webp';
import ProjectBasicInfo from '../components/ProjectBasicInfo';
import { Link as LinkRoute } from "react-router-dom";
import { Typography, Stack, Box, List, ListItem, ListItemIcon, ListItemText, Grid } from "@mui/material";
import ImageGallery from "../components/ImageGallery";

const imagesFirstGallery = [
  {
    src: designSprintOne,
    title: 'Design Sprint Process',
    description: 'Photo of the team on the first day!'
  },
  {
    src: designSprintThree,
    title: 'Design Sprint Process',
    description: 'Turning storyboard into a prototype'
  },
  {
    src: designSprintTwo,
    title: 'Design Sprint Process',
    description: 'Interviewing users and learning by watching them react to your prototype'
  }
];

const PrismaProduzESocialPage = () => {
  return (
  <>
            <LayoutProject
                header={
                    <ProjectHeader
                        projectTitle='Prisma, eSocial & Produz' 
                        entities='F3M' 
                        year='2017 until Now'
                    ></ProjectHeader>
                }
                projectSteps={
                  <ProjectBasicInfo 
                      info="Developing innovative software solutions tailored to diverse industry needs is a key focus. By integrating three large-scale products into a single development base, I work alongside my colleagues to foster a collaborative environment where different sectors can share insights and drive progress. This approach reflects a strong commitment to flexibility and teamwork, as development teams and business managers collaborate closely to deliver exceptional results.">
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="stretch"
                      spacing={1}
                      maxWidth="lg"
                      pt={4}>
                      <Grid item xs={12} sm={12} md={4}>
                        <img
                          style={{
                            borderRadius: '8px',
                            maxWidth: '100%',
                            width: '100%',
                            height: 'auto',
                          }}
                          src={PrismaFirstIlus}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <img
                          style={{
                            borderRadius: '8px',
                            maxWidth: '100%',
                            width: '100%',
                            height: 'auto',
                          }}
                          src={ProduzFirstIlus}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <img
                          style={{
                            borderRadius: '8px',
                            maxWidth: '100%',
                            width: '100%',
                            height: 'auto',
                          }}
                          src={EsocialFirstIlus}
                        />
                      </Grid>
                    </Grid>
                  </ProjectBasicInfo>
                }
                firstProjectStep={
                  <ProjectSection topic="3 in 1" mb={4}>
                      <Typography variant="body" maxWidth='sm' component='p'>
                        Prisma offers advanced software solutions specifically designed for the management of the optics sector, ensuring efficient operations and seamless integration for businesses within the optical industry. Produz provides comprehensive management software tailored for the textile industry, enhancing productivity and streamlining processes. eSocial is dedicated to the management of Institutions for Social Solidarity (IPSS), such as elderly care and child care facilities, facilitating effective administration and care delivery.
                      </Typography>

                      <Stack textAlign='center' direction='column' sx={{
                          mx: 'auto',
                          py: 5
                      }}
                      width={{
                            xs: 330,
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
                        <Typography variant="caption" component='p' pt={2} textAlign='center'>Illustration for Prisma Log In</Typography>
                    </Stack>

                    <Typography variant="body" maxWidth='sm' component='p'>
                      Our development base hosts three large-scale products, each serving distinct industries: optics, textile, and social care. This unique setup fosters an environment where different areas share the same space, promoting collaboration and innovation. It’s a testament to our flexibility and teamwork, as development teams and business managers seamlessly integrate their efforts to achieve common goals.                      
                    </Typography>

                    <Stack textAlign='center' py={5} width={{
                            xs: 330,
                            sm: 700,
                            md: 800,
                            lg: 800
                          }}
                          >
                      <img src={AllThree} style={{
                          maxWidth: '100%',
                          height: 'auto',
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          borderRadius: '8px'
                        }}/>
                        <Typography variant="caption" component='p' pt={2} textAlign='center'>User interface of the procuts</Typography>
                    </Stack>

                      <Typography variant="body" maxWidth='sm' component='p'>In these products, I played a key role in both design and development, creating and building UI-focused components while collaborating closely with the Marketing Team to define and shape the product identity. I actively participated in usability tests, prototyped new features, and conducted visual testing across multiple browsers and devices to ensure a consistent user experience. Additionally, I co-developed component libraries and design systems, crafted logos, icons, and illustrations, and contributed to Design Sprints to drive innovation and align the team around shared goals.</Typography>
                  </ProjectSection>
                }
                secondProjectStep={
                      <ProjectSection topic="Videos"  backgroundColor="background.paper" pb={4}>
                 
                      
                      <Stack useFlexGap flexWrap="wrap" direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                        }} spacing={2} pb={5}  width={{
                          xs: 330,
                          sm: 700,
                          md: 800,
                          lg: 800
                        }}>
                        <iframe loading="lazy" width={'100%'}  height="315" src="https://www.youtube.com/embed/1xWoAVe1ZwQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe loading="lazy" width={'100%'}  height="315" src="https://www.youtube.com/embed/N8vfrCBFaYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
                      </Stack>
                  

                 </ProjectSection>

               }
thirdProjectStep={

 <ProjectSection topic="Design Sprints">


<ImageGallery images={imagesFirstGallery} widthGallery={{
                          xs: 330,
                          sm: 700,
                          md: 800,
                          lg: 800
                        }} heightGallery={510} marginTop={4}/>

<Typography variant="caption" component='p' pb={3} pt={2} textAlign='center'>I generated the illustrations used in this "Design Sprints" gallery in: https://lenimatic.com</Typography>
  <Stack maxWidth='sm' direction="column" width={'100%'}>
      <LinkRoute to={'/'} key={2}><Typography variant='body' color='text.link' component='p' height={50} alignContent='end'>Return home</Typography></LinkRoute>
  </Stack>

</ProjectSection>
                }
  />
  </> )}

export default PrismaProduzESocialPage
