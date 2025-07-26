import React from 'react';
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/400-italic.css"
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
import { Link } from "gatsby";
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
    imageSrc: NeuroPreview, // Example image URL
    altText: 'Neuropsychological: Digital and remote application of Cognitive Deficit Screening Tests Preview Image',
    company: 'Fraunhofer & Univ. do Porto',
    projectTitle: 'Neuropsychological',
    projectType: 'Case Study',
    projectSubtitle: 'Digital and remote application of Cognitive Deficit Screening Tests',
    footerSubjects: ['Wireframing & Prototyping', 'Interviews', '']
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
    footerSubjects: ['Front-End Development', 'UX Design', 'Illustration']
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
    footerSubjects: ['Android Development', 'Wireframing & Prototyping', 'Illustration', 'Illustration']
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
    footerSubjects: ['React Dev.', 'Illustration']
  }
];

const Home = () => {
  return (
          <>
              <Container maxWidth="md" component='header'>
                <Grid container spacing={4} py={5} px={3} sx={{
    justifyContent: "center",
    alignItems: "center",
  }}>
                <Grid item size="auto" md={3}>
                  <img height="175" src={logo}></img>
                </Grid>
                <Grid item xs={12} md={9} py={3}>
                  <Typography variant="body" component="p">

                    Olá! Mainly in <Typography variant="stepTitle">healthcare</Typography>, I've been branding, designing, and developing intuitive UI for enterprise digital products. Along the way, I’ve also crafted experiences for industries like <Typography variant="stepTitle">textile manufacturing, eyewear and daycare</Typography> — picking up fresh ideas and new perspectives on each field. Take a look around, and if you think I can help with something, just <MUILink href="mailto:pedrobaltazardesign@icloud.com">drop me a message</MUILink>!
                    
                  </Typography>
                </Grid>
              </Grid>
              </Container>
 
            <Container maxWidth="md" component='main'>
              <Stack direction="row" spacing={2} sx={{
                justifyContent: "space-between",
                alignItems: "center",
                pb: 4,
                pt: 5
              }}>
                <Typography variant="h1" component="h1">Product Projects</Typography>
                <Typography variant="body" component="p" >5 units</Typography>
              </Stack>
              
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="stretch"
                spacing={{
                  md: 2,
                  lg: 3
                }}
                mb={5}
                mt={3}
                className="grid-container"
                sx={{
                  '@-moz-document url-prefix()': {
                    textAlign: 'center',
                  },
                  '@supports (-webkit-hyphens: none) and (not (hyphens: none))': {
                    textAlign: 'center',
                  },
                }}>
                {projectCardsProps.map((props, path) => (
                    <Grid item mt={4} xs={props.itemGrid.xs} 
                        sm={props.itemGrid.sm}
                        md={props.itemGrid.md} 
                        lg={props.itemGrid.lg}>
                        <Link to={props.path} key={props.id} style={{textDecoration: 'none', position: 'relative'}}>
                            <LazyProjectCard {...props} />
                        </Link>
                    </Grid>
                ))}
              </Grid>
              </Container>
          </>
  )
}

export default Home;
