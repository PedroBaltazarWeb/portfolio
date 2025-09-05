import React from 'react';
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "../../css/main.min.css";
import MpdsWoundsPreview from '../images/mpdsWoundsPreview.webp';
import SmMpdsWebPreview from '../images/sm_mpdsWebPreview.webp'
import NeuroPreview from '../images/neuroPreview.svg';
import PrismaProduzEsocialPreview from '../images/prismaPreview.webp';
import MillerVillagePreview from '../images/millerVillagePreview.svg';
import { Typography, Link } from "@mui/material";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import withLazyLoad from '../components/WithLazyLoading';
import ProjectCard from '../components/ProjectCard';
import PedroBaltazar from '../images/pedroBaltazar_foto.png';
import Divider from '@mui/material/Divider';

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
        <Grid container spacing={3} pb={3} pt={4} sx={{
          alignItems: "center",
        }}>
          <Grid item size="auto" xs={12} sm={3} md={2} mr={{
            md:3
            }} borderRadius={'50%'}>
            <img height="155" style={{'border-radius': '50%', 'border': '2px #fff solid'}} src={PedroBaltazar} alt='Logo Pedro Baltazar'></img>
          </Grid>
          <Grid item xs={12} sm={6} md={7} lg={7} xl={7} spacing={4}>
            <Typography variant="intro" component="p" pb={2} pr={{
              xs: 0,
              sm: 0,
              md: 4
            }} >
              Pedro Baltazar is a Product Designer at <Typography variant="intro" component='span' fontWeight={600}>F3M Information Systems S.A.</Typography>
            </Typography>
            <Typography variant="body" component="p" pr={{
              xs: 0,
              sm: 0,
              md: 4
            }}>
              Develops enterprise products in multiple sectors, primarily focusing on healthcare. Experience includes web/app design, UI development, RWD, illustration, a11y, and design systems.
            </Typography>
          </Grid>
          <Divider orientation="vertical" variant='middle' flexItem component="div" />
          <Grid item size="auto" xs={12} sm={2} md={2}>
             
            <Stack direction='column' spacing={1} justifyContent='bottom'>
              <Typography variant='body2' fontWeight={500} component='p' alignContent='end'>Let's connect</Typography>
              <Link href="mailto:pedrobaltazardesign@icloud.com">
                <Typography variant='body' color='card.link' component='p' alignContent='end'>Send e-mail</Typography>
              </Link>
              <Link href="/files/cv_pedro_baltazar.pdf">
                <Typography variant='body' color='card.link' component='p' alignContent='end'>Download Resume</Typography>
              </Link>
              <Link href="https://dribbble.com/PedroBaltazar">
                <Typography variant='body' color='card.link' component='p' alignContent='end'>Dribbble</Typography>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md" disableGutters component='main' bgcolor='background.default'>
        <Stack direction={{
                    xs: "column",
                    sm: "row"
                  }} spacing={1} pt={4} pb={3} sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}>
          <Typography variant="h1" component="h1">Work</Typography>
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
