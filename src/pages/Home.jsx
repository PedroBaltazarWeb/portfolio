import React from 'react';
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "../../css/main.min.css";
import MpdsWoundsPreview from '../images/mpdsWoundsPreview.webp';
import SmMpdsWebPreview from '../images/sm_mpdsWebPreview.webp'
import NeuroPreview from '../images/neuroPreview.webp';
import WoundsAIPreview from '../images/woundsAI_preview.webp';
import PrismaProduzEsocialPreview from '../images/prismaPreview.webp';
import MillerVillagePreview from '../images/millerVillagePreview.webp';
import { Typography, Link, Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import withLazyLoad from '../components/WithLazyLoading';
import ProjectCard from '../components/ProjectCard';
import PedroBaltazar from '../images/pedroBaltazar_foto.png';
import Divider from '@mui/material/Divider';
import { Dribbble, FileUser, Send } from 'lucide-react'; 

const LazyProjectCard = withLazyLoad(ProjectCard);

const projectCardsProps = [
  {
    id: 1,
    itemGrid: { xs: 12},
    path: '/millerVillageTycoon',
    imageSrc: MillerVillagePreview, 
    altText: 'Miller Village Tycoon Image Preview',
    company: 'Cintesis & Univ. do Porto',
    projectTitle: 'Miller Village Tycoon',
    description: 'Gamifies the asthma monitoring process: Forced Expiratory Maneuver — for adolescents aged 14 to 17 by integrating it into a village-building game, aiming to enhance adherence to disease monitoring.',
    projectType: 'Case Study',
    footerSubjects: ['Wireframing & Prototyping', 'Interviews & Usability Tests', 'Illustration']
  },
  {
    id: 2,
    itemGrid: { xs: 12},
    path: '',
    imageSrc: WoundsAIPreview,
    altText: 'Wounds AI',
    company: 'F3M & Fraunhofer',
    projectTitle: 'Wounds AI',
    description: 'An advanced tool that effectively captures wound images, analyzes their sizes and tissue compositions, and confidently provides diagnoses and tailored treatment recommendations from a clinical perspective.',
    projectType: 'Ongoing',
    projectSubtitle: 'Digital and remote application of CDS Tests',
    footerSubjects: ['Wireframing & Prototyping', 'Interviews', '-']
  },
  {
    id: 3,
    itemGrid: { xs: 12},
    path: '/prismaEsocialProduz',
    imageSrc: PrismaProduzEsocialPreview,
    altText: 'Prisma, eSocial & Produz Image Preview',
    company: 'F3M',
    projectTitle: 'Prisma, eSocial & Produz',
    description: 'Prisma provides software solutions for the optics sector to help businesses run efficiently and integrate smoothly. Produz offers management software for the textile industry that boosts productivity and simplifies processes. eSocial helps manage Institutions for Social Solidarity (IPSS), such as elderly care and child care facilities.',
    projectType: 'Show Case',
    footerSubjects: ['Front-End Development', 'UX Design', 'Logo Design & Illustration']
  },
  {
    id: 4,
    itemGrid: { xs: 12},
    path: '/mpdsWounds',
    imageSrc: MpdsWoundsPreview,
    altText: 'MpDS Wounds Image Preview',
    company: 'F3M & Fraunhofer',
    projectTitle: 'MpDS Wounds',
    description: 'Automatically captures images for the characterization and assessment of wounds using a pre-processing and segmentation algorithm based on the visual characteristics of various wounds.',
    projectType: 'Show Case',
    footerSubjects: ['Android Development', 'Wireframing & Prototyping', 'Illustration & Logo Design']
  },
  {
    id: 5,
    itemGrid: { xs: 12 },
    path: '/mpdsWeb',
    imageSrc: SmMpdsWebPreview,
    altText: 'MpDS Web Image Preview',
    company: 'F3M',
    projectTitle: 'MpDS Web',
    description: 'Enables users to efficiently manage and monitor the status of all patient processes. It is integrated with MPDS Wounds, serving as an extension of patient management that builds upon the mobile app.',
    projectType: 'Show Case',
    footerSubjects: ['Front-end Development', 'Illustration & Logo Design', '-']
  },
  {
    id: 6,
    itemGrid: { xs: 12},
    path: '/neuro',
    imageSrc: NeuroPreview,
    altText: 'Neuropsychological: Digital and remote application of CDS Tests Preview Image',
    company: 'Fraunhofer & Univ. do Porto',
    projectTitle: 'Neuropsychological: Digital and remote application of CDS Tests',
    description: 'The Portuguese Directorate-General of Health (DGS) highlights the need for cognitive screening to identify cognitive decline and dementia. Key tests include the Mini-Mental State Examination (MMSE), Corsi Block-Tapping Test, and Montreal Cognitive Assessment (MoCA). However, access can be difficult due to location and patients abilities. To address this, I collaborated with a healthcare professional to create digital versions of these tests, focusing on real-life interviews and research.',
    projectType: 'Case Study',
    projectSubtitle: 'Digital and remote application of CDS Tests',
    footerSubjects: ['Wireframing & Prototyping', 'Interviews', '-']
  },
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
            <Typography variant="bodyColorful" component="p" pr={{
              xs: 0,
              sm: 0,
              md: 4
            }}>
              Creates products for various sectors, primarily focusing on healthcare. Experience includes web and app design, front-end development, illustration, accessibility, and design systems.
            </Typography>
          </Grid>
          <Divider orientation="vertical" variant='middle' flexItem component="div" />
          <Grid item size="auto" xs={12} sm={2} md={2}>
             
            <Stack direction='column' spacing={2} justifyContent='bottom'>
              <Typography variant='body2' fontWeight={500} component='p' alignContent='end'>Let's connect</Typography>
              <Stack direction='column' spacing={1}>
                <Link href="mailto:pedrobaltazardesign@icloud.com" sx={{textDecoration: 'none', display: 'flex', alignItems: 'center' }}> 
                  <Send size={20}/>
                  <Typography variant='body' color='card.link' component='span' pl={1} alignContent='end'>Send e-mail</Typography>
                </Link>
                <Link href="/files/cv_pedro_baltazar.pdf" target="_blank" sx={{textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  <FileUser size={20}/>
                  <Typography variant='body' color='card.link' component='span' pl={1} alignContent='end'>Resume</Typography>
                </Link>
                <Link href="https://dribbble.com/PedroBaltazar" target="_blank" sx={{textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                  <Dribbble size={20}/>
                  <Typography variant='body' color='card.link' component='span' pl={1}  alignContent='end'>Dribbble</Typography>
                </Link>
              </Stack>
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
