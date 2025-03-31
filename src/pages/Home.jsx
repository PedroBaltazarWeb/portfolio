import React from 'react';
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "@fontsource/manrope";
import "@fontsource/archivo"; // Defaults to weight 400
import "@fontsource/archivo/400.css"; // Specify weight
import "@fontsource/archivo/400-italic.css"; // Specify weight and style
import "../../css/main.min.css";
import MpdsWoundsPreview from '../images/mpdsWoundsPreview.webp';
import SmMpdsWebPreview from '../images/sm_mpdsWebPreview.webp'
import NeuroPreview from '../images/neuroPreview.svg';
import PrismaProduzEsocialPreview from '../images/prismaPreview.webp';
import MillerVillagePreview from '../images/millerVillagePreview.svg';
import { Typography, Chip, Hidden } from "@mui/material";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { keyframes } from '@emotion/react';
import Container from '@mui/material/Container';
import withLazyLoad from '../components/WithLazyLoading';
import ProjectCard from '../components/ProjectCard';
import Separator from '../images/separator.svg';
import WIP from '../images/WIP.png';
import MUILink from '@mui/material/Link';
import {
    Link
} from "react-router-dom";
import backgroundAfter from '../images/pedro_baltazar_cracha.svg';
import shining from '../images/shining.webp';
import logo from '../images/logo.svg';
import theme from '../../themes/mui-theme';
import badgeOne from './../images/badge_one.svg';
import badgeTwo from './../images/badge_two.svg';
import badgeThree from './../images/badge_three.svg';
import badgeFour from './../images/badge_four.svg';
import badgeFive from './../images/badge_five.svg';

const LazyProjectCard = withLazyLoad(ProjectCard);

const flashEffect = keyframes`
  0% { opacity: 0; transform: scale(1); }
  50% { opacity: 0; transform: scale(1); }
  95% { opacity: 1; transform: scale(1); }
`;

const projectCardsProps = [
  {
    id: 1,
    numberBadge: <><img width={120} src={badgeOne} /></>,
    itemGrid: { xs: 12, sm: 6, md: 6, lg: 4},
    path: './millerVillageTycoon',
    imageSrc: MillerVillagePreview, 
    altText: 'Miller Village Tycoon Image Preview',
    company: 'Cintesis & Univ. do Porto',
    projectTitle: 'Miller Village Tycoon',
    projectType: 'Case Study',
    footerSubjects: <>
      <ul style={{ textAlign: 'center', width: '100%', padding: 0, listStyle: 'none'}}>
        <li style={{ marginBottom: 5 }}>Wireframing & Prototyping</li>
        <li style={{ marginBottom: 5 }}>Interviews & Usability Tests</li>
        <li style={{ marginBottom: 5 }}>Illustration</li>
      </ul>
</>,
  },
  {
    id: 2,
    numberBadge: <><img width={120} src={badgeTwo} /></>,
    itemGrid: { xs: 12, sm: 6, md: 6, lg: 4},
    path: '/neuro',
    imageSrc: NeuroPreview, // Example image URL
    altText: 'Neuropsychological: Digital and remote application of Cognitive Deficit Screening Tests Preview Image',
    company: 'Fraunhofer & Univ. do Porto',
    projectTitle: 'Neuropsychological',
    projectType: 'Case Study',
    projectSubtitle: 'Digital and remote application of Cognitive Deficit Screening Tests',
    footerSubjects: <>

      <ul style={{ textAlign: 'center', width: '100%', padding: 0, listStyle: 'none'}}>
        <li style={{ marginBottom: 5 }}>Wireframing & Prototyping</li>
        <li style={{ marginBottom: 5 }}>Interviews</li>
      </ul>
    </>,
  },
  {
    id: 3,
    numberBadge: <><img width={120} src={badgeThree} /></>,
    itemGrid: { xs: 12, sm: 12, md: 12, lg: 4},
    path: '/prismaEsocialProduz',
    imageSrc: PrismaProduzEsocialPreview, // Example image URL
    altText: 'Prisma, eSocial & Produz Image Preview',
    company: 'F3M',
    projectTitle: 'Prisma, eSocial & Produz',
    projectType: 'Show Case',
    footerSubjects: <>
      <ul style={{ textAlign: 'center', width: '100%', padding: 0, listStyle: 'none'}}>
        <li style={{ marginBottom: 5 }}>Front-End Development</li>
        <li style={{ marginBottom: 5 }}>UX Design</li>
        <li style={{ marginBottom: 5 }}>Logo Design</li>
        <li style={{ marginBottom: 5 }}>Illustration</li>
      </ul>
    </>,
  },
  {
    id: 4,
    numberBadge: <><img width={120} src={badgeFour} /></>,
    itemGrid: { xs: 12, sm: 6 },
    path: '/mpdsWounds',
    imageSrc: MpdsWoundsPreview, // Example image URL
    altText: 'MpDS Wounds Image Preview',
    company: 'F3M & Fraunhofer',
    projectTitle: 'MpDS Wounds',
    projectType: 'Show Case',
    footerSubjects: <>
      <ul style={{ textAlign: 'center', width: '100%', padding: 0, listStyle: 'none'}}>
        <li style={{ marginBottom: 5 }}>Android Development</li>
        <li style={{ marginBottom: 5 }}>Wireframing & Prototyping</li>
        <li style={{ marginBottom: 5 }}>Illustration</li>
        <li style={{ marginBottom: 5 }}>Motion Design</li>
      </ul>
    </>,
  },
  {
    id: 5,
    numberBadge: <><img width={120} src={badgeFive} /></>,
    itemGrid: { xs: 12, sm: 6},
    path: '/mpdsWeb',
    imageSrc: SmMpdsWebPreview,
    altText: 'MpDS Web Image Preview',
    company: 'F3M',
    projectTitle: 'MpDS Web',
    projectType: 'Show Case',
    footerSubjects: <>
      <ul style={{ textAlign: 'center', width: '100%', padding: 0, listStyle: 'none'}}>
        <li style={{ marginBottom: 5 }}>React Dev.</li>
        <li style={{ marginBottom: 5 }}>Logo Design</li>
        <li style={{ marginBottom: 5 }}>Illustration</li>
      </ul>
    </>,
  }
];

const useStyles ={
  '&.MuiContainer-root':{
    color: theme.palette.action.main,
    fontFamily: "Noto Sans, sans-serif",
    pb: 5
  } 
}

const Home = () => {
  return (
          <>
            <Box sx={{
              background: 'rgb(24,27,67)',
              background: 'radial-gradient(circle, rgb(13 16 60) 30%, rgba(12, 14, 34, 1) 100%)',
              position: 'relative',
              '&::after': {
                background: `url(${backgroundAfter})`,
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                height: 110,
                content: '""',
                width: '100%',
                position: 'absolute',
                left: 0,
                marginTop: '-45px',
                zIndex: 2
              },
              '&:before':{
                background: `url(${shining})`,
                height: 87,
                content: '""',
                width: 174,
                position: 'absolute',
                right: {
                  xs: '5%',
                  sm: '15%',
                  md: '15%',
                  lg: '15%'
                },
                zIndex: 3,
                bottom: -35,
                mixBlendMode: 'plus-lighter',
                animation: `${flashEffect} 3s 1`,
              }
            }}>
              <Container maxWidth="lg" component='header' sx={useStyles["&.MuiContainer-root"]}>
              <Box position='absolute' left={160} width={350} height={'100%'} mt={5} top={250} sx={{
                backgroundImage: `url(${WIP})`,
                backgroundSize: 350,
                backgroundRepeat: 'no-repeat',
                zIndex: 3,
                display: {lg:'block',
                  xs: 'none'
                }
              }}>
                
                <Typography sx={{
                  position:'absolute',
                  top: 50,
                  left: 55,
                  width: 200,
                  color: '#000',
                  fontFamily: '"Caveat", cursive',
                  fontSize: 22
                }}>There's a ton I'm still refining, but go ahead and check out my projects. More updates are on the way!</Typography>
              </Box>
                <Grid container spacing={4} py={5} px={3} sx={{
    justifyContent: "center",
    alignItems: "center",
  }}>
                <Grid item size="auto" py={2}>
                  <img height="200" src={logo}></img>
                </Grid>
                <Grid item xs={12} md={9} py={3}>
                  <Typography variant="stepTitle" component="p" fontWeight={500}>

                    Olá! Mainly in <Typography variant="stepTitle" color={theme.palette.secondary.main}>healthcare</Typography>, I've been branding, designing and developing intuitive UI for enterprise digital products. Along the way, I’ve also crafted experiences for industries like <Typography variant="stepTitle" color={theme.palette.secondary.main}>textile manufacturing, eyewear and daycare</Typography> — picking up fresh ideas and new perspectives on each field. Take a look around, and if you think I can help with something, just <MUILink color={theme.palette.primary.main} href="mailto:pedrobaltazardesign@icloud.com">drop me a message</MUILink>!
                    
                  </Typography>
                </Grid>
              </Grid>
              </Container>
              </Box>

              <Box mt={5} p={5} >
                <img src={Separator}/>
              </Box>

              <Typography textAlign='center' variant="h2" component="h2" fontWeight={500} mt={4} mb={5} pb={2} sx={{
                 color: theme.palette.action.main
              }}>
                  Projetos
              </Typography>

            <Container maxWidth="lg" component='main' sx={useStyles["&.MuiContainer-root"]}>
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
                mt={3}>
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
