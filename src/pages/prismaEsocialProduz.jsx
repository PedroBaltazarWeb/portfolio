import * as React from "react";
import "../../css/main.min.css";
import LayoutProject from '../components/LayoutProject';
import ProjectHeader from '../components/ProjectHeader';
import EsocialFirstIlus from '../images/prismaEsocialProduz/esocialIlust1.webp';
import PrismaFirstIlus from '../images/prismaEsocialProduz/prismaIlust1.webp';
import ProduzFirstIlus from '../images/prismaEsocialProduz/produzIlust1.webp';
import { Typography, Stack, Box, Grid } from "@mui/material";
import PrismaProduzEsocialPreview from '../images/prismaPreview.webp';
import EsocialPreview from '../images/esocialPreview.webp';
import ProduzPreview from '../images/prismaEsocialProduz/produzPreview.webp';
import { Link as LinkRoute } from "react-router-dom";

const PrismaProduzESocialPage = () => {
  return (
  <>
            <LayoutProject
                header={
                    <ProjectHeader
                        projectTitle='Prisma, eSocial & Produz' 
                        entities='F3M' 
                        year='2017 until Now'
                        roles='Front-End Development, Co-Design Design Systems, Illustration, UX Design, Iconography'
                    ></ProjectHeader>
                }
                firstProjectStep={
                  <Stack direction='column' spacing={5}>
                    <Stack spacing={2}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="stretch"
                        spacing={1}
                        maxWidth="lg">
                        <Grid item xs={12} sm={12} md={4}>
                          <img
                            style={{
                              borderRadius: '0.2rem',
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
                              borderRadius: '0.2rem',
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
                              borderRadius: '0.2rem',
                              maxWidth: '100%',
                              width: '100%',
                              height: 'auto',
                            }}
                            src={EsocialFirstIlus}
                          />
                        </Grid>
                      </Grid>
                      <Typography component='p' variant='caption' textAlign='center'>Isometric illustrations of Prisma, Produz, and eSocial.</Typography>
                    </Stack>
                    
                    <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                      <Typography variant="body" maxWidth='sm' component='p'>
                        I have developed large-scale enterprise solutions for a range of industries, including Prisma, Produz, and eSocial, all integrated within a unified development platform. This is made possible through knowledge sharing and cross-sector collaboration. This approach reflects a commitment to adaptability and shared success, supporting both development teams, designers, and business managers in achieving strong results.
                      </Typography>
                    </Stack>

                    <Stack spacing={2}>
                      <img src={PrismaProduzEsocialPreview} style={{borderRadius: '0.2rem'}} />
                      <Typography component='p' variant='caption' textAlign='center'>Articles section on Prisma</Typography>
                    </Stack>

                    <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                      <Typography variant="body" maxWidth='sm' component='p'>
                        Prisma delivers advanced software for the optics sector, enabling efficient operations and seamless integration for optical businesses. Produz offers management solutions for the textile industry, improving productivity and streamlining processes. eSocial supports Institutions for Social Solidarity (IPSSs), such as elderly care facilities and child care centers, by facilitating effective administration and care delivery.
                      </Typography>
                    </Stack>

                    <Stack spacing={2}>
                      <img src={EsocialPreview} style={{borderRadius: '0.2rem'}} />
                      <Typography component='p' variant='caption' textAlign='center'>Service Users section on eSocial</Typography>
                    </Stack>

                    <Stack direction='column' spacing={1} alignItems="center" margin='0 auto'>
                      <Typography variant="body" maxWidth='sm' component='p'>For these products, I led both design and development efforts, building UI components and working closely with the Marketing Team to define product identity. I participated in usability tests, prototyped new features, and conducted visual testing across browsers and devices to ensure a consistent user experience. I also co-developed component libraries and design systems, created visual assets such as logos and icons, and supported Design Sprints to foster innovation and team alignment.</Typography>
                    </Stack>
                    
                    <Stack spacing={2}>
                      <img src={ProduzPreview} style={{borderRadius: '0.2rem'}} />
                      <Typography component='p' variant='caption' textAlign='center'>Clients section on Produz</Typography>
                    </Stack>

                    <Stack direction='column' spacing={2} alignItems="center" margin='0 auto'>
                      <Typography variant="body" maxWidth='sm' component='p'>Below are examples of Prisma in the Services section and Produz in the Add Article section, in use.</Typography>
                      <Box maxWidth='sm' margin='0 auto' spacing={2}>
                        <iframe referrerpolicy="no-referrer" loading="lazy" width={'100%'} height="315" src="https://www.youtube.com/embed/63C5xBjOlqk?si=YcL8xztyWmpZM_sp&amp;start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe referrerpolicy="no-referrer" loading="lazy" width={'100%'} height="315" src="https://www.youtube.com/embed/vezjG8Q9xg0?si=59_hZWP5-5_XMgqE&amp;start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
                      </Box>
                    </Stack>
                    <Stack maxWidth='sm' direction="column" margin='0 auto' alignItems="center">
                      {typeof window !== "undefined" && (
                      <LinkRoute to={'/'} key={2}><Typography variant='body' sx={{color: 'text.link'}}  component='p' height={50} alignContent='end'>Return home</Typography></LinkRoute>
                      )}
                    </Stack>
                  </Stack>
                } />
  </> )}

export default PrismaProduzESocialPage
