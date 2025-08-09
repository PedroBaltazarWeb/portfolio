import React from 'react';
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "../../css/main.min.css";
import MpdsWoundsPreview from '../images/mpdsWoundsPreview.webp';
import SmMpdsWebPreview from '../images/sm_mpdsWebPreview.webp'
import NeuroPreview from '../images/neuroPreview.svg';
import PrismaProduzEsocialPreview from '../images/prismaPreview.webp';
import MillerVillagePreview from '../images/millerVillagePreview.svg';
import { Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import withLazyLoad from '../components/WithLazyLoading';
import ProjectCard from '../components/ProjectCard';
import MUILink from '@mui/material/Link';
import logo from '../images/logo.svg';

const LazyProjectCard = withLazyLoad(ProjectCard);

const projectCardsProps = [
  {
    id: 1,
    itemGrid: { xs: 12, sm: 6},
    path: '/millerVillageTycoon',
    imageSrc: MillerVillagePreview, 
    altText: 'Miller Village Tycoon Image Preview',
    company: 'Cintesis & Univ. do Porto',
    projectTitle: 'Miller Village Tycoon',
    projectType: 'Case Study',
    footerSubjects: ['Wireframing & Prototyping', 'Interviews & Usability Tests', 'Illustration']
  },
  {
    id: 2,
    itemGrid: { xs: 12, sm: 6},
    path: '/neuro',
    imageSrc: NeuroPreview,
    altText: 'Neuropsychological: Digital and remote application of Cognitive Deficit Screening Tests Preview Image',
    company: 'Fraunhofer & Univ. do Porto',
    projectTitle: 'Neuropsychological: Digital and remote application of Cognitive Deficit Screening Tests',
    projectType: 'Case Study',
    projectSubtitle: 'Digital and remote application of Cognitive Deficit Screening Tests',
    footerSubjects: ['Wireframing & Prototyping', 'Interviews', '-']
  },
  {
    id: 3,
    itemGrid: { xs: 12, sm: 6},
    path: '/prismaEsocialProduz',
    imageSrc: PrismaProduzEsocialPreview,
    altText: 'Prisma, eSocial & Produz Image Preview',
    company: 'F3M',
    projectTitle: 'Prisma, eSocial & Produz',
    projectType: 'Show Case',
    footerSubjects: ['Front-End Development', 'UX Design', 'Logo Design & Illustration']
  },
  {
    id: 4,
    itemGrid: { xs: 12, sm: 6 },
    path: '/mpdsWounds',
    imageSrc: MpdsWoundsPreview,
    altText: 'MpDS Wounds Image Preview',
    company: 'F3M & Fraunhofer',
    projectTitle: 'MpDS Wounds',
    projectType: 'Show Case',
    footerSubjects: ['Android Development', 'Wireframing & Prototyping', 'Illustration & Logo Design']
  },
  {
    id: 5,
    itemGrid: { xs: 12, sm: 6},
    path: '/mpdsWeb',
    imageSrc: SmMpdsWebPreview,
    altText: 'MpDS Web Image Preview',
    company: 'F3M',
    projectTitle: 'MpDS Web',
    projectType: 'Show Case',
    footerSubjects: ['Front-end Development', 'Illustration & Logo Design', '-']
  }
];

const Home = () => {
  return (
          <>
              <Container maxWidth="md" disableGutters component='header' bgcolor='background.default'>
                <Grid container spacing={4} py={3} sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Grid item size="auto" md={3}>
                  <img height="175" src={logo} alt='Logo Pedro Baltazar'></img>
                </Grid>
                <Grid item xs={12} md={9}>
                  <Typography variant="body" component="p">
                    Olá! Mainly in healthcare, I’ve been branding, designing and developing intuitive UIs for enterprise digital products. Along the way, I’ve also crafted experiences for industries like textile manufacturing, eyewear, and daycare — picking up fresh ideas and new perspectives from each field. Over the past few years, I’ve become increasingly interested in creating design systems and making products accessible. Take a look!
                  </Typography>
                </Grid>
              </Grid>
              </Container>
 
            <Container maxWidth="md" disableGutters component='main' bgcolor='background.default'>
              <Stack direction={{
                          xs: "column",
                          sm: "row"
                        }} spacing={1} py={4} sx={{
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}>
                <Typography variant="h1" component="h1">Product Projects</Typography>
                <Typography variant="body" component="p" >5 units</Typography>
              </Stack>
              
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                pb={4}
                spacing={{
                  xs: 1,
                  lg: 1
                }}
                className="grid-container"
                sx={{
                  '@-moz-document url-prefix()': {
                    textAlign: 'center',
                  },
                  '@supports (-webkit-hyphens: none) and (not (hyphens: none))': {
                    textAlign: 'center',
                  },
                }}>
                {projectCardsProps.map((props) => (
                    <Grid item xs={props.itemGrid.xs} 
                        sm={props.itemGrid.sm}
                        md={props.itemGrid.md} 
                        lg={props.itemGrid.lg}
                        >
                          <LazyProjectCard {...props} />
                    </Grid>
                ))}
              </Grid>
              </Container>
          </>
  )
}

export default Home;
