import React from 'react';
import "@fontsource/work-sans";
import "@fontsource/noto-sans";
import "@fontsource/manrope";
import "../../css/main.min.css";
import MpdsWoundsPreview from '../images/MpdsWoundsPreview.svg';
import SmMpdsWebPreview from '../images/sm_mpdsWebPreview.svg'
import NeuroPreview from '../images/neuroPreview.svg';
import PrismaProduzEsocialPreview from '../images/PrismaProduzEsocialPreview.svg';
import MillerVillagePreview from '../images/millerVillagePreview.svg';
import Ai from '../images/techsIcons/ai.svg';
import Affinity from '../images/techsIcons/affinity.svg';
import AffinityPhoto from '../images/techsIcons/affinityPhoto.svg';
import Icomoon from '../images/techsIcons/Icomoon.svg';
import Lottie from '../images/techsIcons/lottie.svg';
import Itchio from '../images/techsIcons/itchio.svg';
import Miro from '../images/techsIcons/miro.svg';
import Soundcloud from '../images/techsIcons/soundcloud.svg';
import Dribbble from '../images/techsIcons/dribbble.svg';
import CSS from '../images/techsIcons/css3.svg';
import HTML from '../images/techsIcons/html5.svg';
import JS from '../images/techsIcons/js.svg';
import Bootstrap from '../images/techsIcons/bootstrap.svg';
import Figma from '../images/techsIcons/figma.svg';
import Git from '../images/techsIcons/git.svg';
import Kotlin from '../images/techsIcons/Kotlin.svg';
import Material from '../images/techsIcons/materialui.svg';
import Ps from '../images/techsIcons/ps.svg';
import Ae from '../images/techsIcons/aftereffects.svg';
import ReactIcon from '../images/techsIcons/react.svg';
import Sass from '../images/techsIcons/sass.svg';
import Uxpin from '../images/techsIcons/uxpin.svg'
import Storybook from '../images/techsIcons/storybook.svg';
import Chromatic from '../images/techsIcons/chromatic.svg'
import Tooltip from '@mui/material/Tooltip';
import { Typography, Chip, Hidden } from "@mui/material";
import theme from '../../themes/mui-theme'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { keyframes } from '@emotion/react';
import Container from '@mui/material/Container';
import withLazyLoad from '../components/WithLazyLoading';
import ProjectCard from '../components/ProjectCard';
import IconButton from '@mui/material/IconButton';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

const LazyProjectCard = withLazyLoad(ProjectCard);

const projectCardsProps = [
  {
    id: 1,
    itemGrid: { xs: 12, sm: 6, md: 6, lg: 4},
    path: './millerVillageTycoon',
    imageSrc: MillerVillagePreview, 
    altText: 'Miller Village Tycoon Image Preview',
    company: 'Cintesis & Univ. do Porto',
    projectTitle: 'Miller Village Tycoon',
    isNotACaseStudy: false,
    description: "Miller Village Tycoon gamifies asthma monitoring for teens with a daily Forced Expiratory Maneuver (FEM) using their smartphone's microphone. Successful FEMs earn rewards for upgrading structures and trading resources with other players. The app promotes daily asthma monitoring through interactive gameplay and a compelling storyline.",
    footerSubjects: <>
      <Stack direction="row" spacing={1} alignItems="center"><Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/>
          </svg>
        </Box>
        <Typography variant="subjectText">Wireframing & Prototyping</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
          </svg>
        </Box>
        <Typography variant="subjectText">Interviews & Usability Tests</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
          </svg>
        </Box>
        <Typography variant="subjectText">Illustration</Typography>
      </Stack>
</>,
  },
  {
    id: 2,
    itemGrid: { xs: 12, sm: 6, md: 6, lg: 4},
    path: '/neuro',
    imageSrc: NeuroPreview, // Example image URL
    altText: 'Neuropsychological: Digital and remote application of Cognitive Deficit Screening Tests Preview Image',
    company: 'Fraunhofer & Univ. do Porto',
    projectTitle: 'Neuropsychological: Digital and remote application of Cognitive Deficit Screening Tests',
    isNotACaseStudy: false,
    description: 'User research and design process for a digital version of cognitive deficit screening tests interface.',
    footerSubjects: <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/>
          </svg>
        </Box>
        <Typography variant="subjectText">Wireframing & Prototyping</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
          </svg>
        </Box>
        <Typography variant="subjectText">Interviews</Typography>
      </Stack>
    </>,
  },
  {
    id: 3,
    itemGrid: { xs: 12, sm: 12, md: 12, lg: 4},
    path: '/prismaEsocialProduz',
    imageSrc: PrismaProduzEsocialPreview, // Example image URL
    altText: 'Prisma, eSocial & Produz Image Preview',
    company: 'F3M',
    projectTitle: 'Prisma, eSocial & Produz',
    isNotACaseStudy: true,
    description: 'Prisma offers software tailored for optics sector management; Produz specializes in textile industry management software; and eSocial provides comprehensive software solutions for IPSS management, encompassing Elderly Care, Child Care, and related services.',
    footerSubjects: <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
          </svg>
        </Box>
        <Typography variant="subjectText">Front-End Development</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/>
          </svg>
        </Box>
        <Typography variant="subjectText">UX Design</Typography>
      </Stack>
      <Hidden smDown>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01q.269.27.484.605C8.246 5.097 8.5 6.459 8.5 8c0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a3 3 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
            </svg>
          </Box>
          <Typography variant="subjectText">Logo Design</Typography>
        </Stack>
      </Hidden>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
          </svg>
        </Box>
        <Typography variant="subjectText">Illustration</Typography>
      </Stack>
    </>,
  },
  {
    id: 4,
    itemGrid: { xs: 12, sm: 6 },
    path: '/mpdsWounds',
    imageSrc: MpdsWoundsPreview, // Example image URL
    altText: 'MpDS Wounds Image Preview',
    company: 'F3M & Fraunhofer',
    projectTitle: 'MpDS Wounds',
    isNotACaseStudy: true,
    description: 'A mobile application crafted to enhance the swift and automated gathering of clinical images depicting the healing progression of pressure ulcers and various other wounds.',
    footerSubjects: <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.9 8.9 0 0 1 8 5a8.9 8.9 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
        </Box>
        <Typography variant="subjectText">Android Development</Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/>
            </svg>
          </Box>
          <Typography variant="subjectText"> Wireframing & Prototyping</Typography>
        </Stack>
        <Hidden mdDown>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01q.269.27.484.605C8.246 5.097 8.5 6.459 8.5 8c0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a3 3 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
              </svg>
            </Box>
            <Typography variant="subjectText">Logo Design</Typography>
          </Stack>
        </Hidden>
        <Stack direction="row" spacing={1} alignItems="center">
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
            </svg>
          </Box>
          <Typography variant="subjectText">Illustration</Typography>
      </Stack>
    </>,
  },
  {
    id: 5,
    itemGrid: { xs: 12, sm: 6},
    path: '/mpdsWeb',
    imageSrc: SmMpdsWebPreview,
    altText: 'MpDS Web Image Preview',
    company: 'F3M',
    projectTitle: 'MpDS Web',
    isNotACaseStudy: true,
    description: "A web application that enables users to effortlessly oversee and access the status of every patient's processes, seamlessly integrated with MPDS Wounds.",
    footerSubjects: <>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0"/>
          </svg>
        </Box>
        <Typography variant="subjectText">React Dev.</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01q.269.27.484.605C8.246 5.097 8.5 6.459 8.5 8c0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a3 3 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
          </svg>
        </Box>
        <Typography variant="subjectText">Logo Design</Typography>
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Box>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
          </svg>
        </Box>
        <Typography variant="subjectText">Illustration</Typography>
      </Stack>
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

const colorChange = keyframes`
  0% {
    background-color: rgb(255, 218, 121);
  }
  25% {
    background-color: rgb(255, 171, 231);
  }
  50% {
    background-color: rgb(210, 188, 243);
  }
  75% {
    background-color: rgb(237, 243, 216);
  }
  100% {
    background-color: rgb(255, 218, 121);
  }
`;

const Home = () => {
  return (
          <>
            <Container maxWidth="lg" component='main' sx={useStyles["&.MuiContainer-root"]}>
              <Typography variant="stepTitle" component="p" fontWeight={500} pt={5} pb={5}>
                Hello! I'm Pedro Baltazar Relvas. Whether as a Product Designer or UI Developer, my goal is to create efficient and meaningful products. With a focus on healthcare, I enjoy collaborating in cross-functional teams, aiming for simplicity, usability, and a smooth user experience.
              </Typography>

            <Hidden smDown>
              <Box sx={{
                  background: 'linear-gradient(to right, rgb(11 18 49 / 20%), #0B1231)',
                  padding: '24px',
                  borderRadius: '16px',
                  maxWidth: 700,
                  margin: '0 auto',
                  backdropFilter: 'blur(12px)',
                  border: 'rgb(255 255 255 / .1) solid 1px'
                }}>
                <Typography variant="regularText" component='p' fontStyle='italic' textAlign='center' pb={2}>Designing and coding with:</Typography>
    
                <Stack direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                  mb={3}>
                    <Tooltip title="Kotlin" arrow  placement="top">
                      <img width="35" src={Kotlin}/>
                    </Tooltip>
                    <Tooltip title="HTML 5" arrow  placement="top">
                      <img width="35" src={HTML} />
                    </Tooltip>
                    
                    <Tooltip title="CSS 3" arrow  placement="top">
                      <img width="35" height="35" src={CSS}/>
                    </Tooltip>
                    
                    <Tooltip title="Javascript" arrow  placement="top">
                      <img width="35" src={JS}/>
                    </Tooltip>
                    
                    <Tooltip title="React.JS" arrow  placement="top">
                      <img width="35" src={ReactIcon}/>
                    </Tooltip>
                    
                    <Tooltip title="Bootstrap" arrow  placement="top">
                      <img width="35" src={Bootstrap} />
                    </Tooltip>
                    
                    <Tooltip title="Sass" arrow placement="top">
                      <img width="35" src={Sass} />
                    </Tooltip>
                    
                    <Tooltip title="Material" arrow  placement="top">
                      <img width="35" src={Material} /> 
                    </Tooltip>
                    
                    <Tooltip title="Git" arrow  placement="top">
                      <img width="35" src={Git} />
                    </Tooltip>
                    
                    <Tooltip title="Storybook" arrow  placement="top">
                      <img height="35" src={Storybook} />
                    </Tooltip>
                    
                    <Tooltip title="Chromatic" arrow  placement="top">
                      <img width="35" src={Chromatic} />
                    </Tooltip>
                </Stack>

                <Stack direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={0}
                  mt={1}>
                  <Tooltip title="Figma" arrow  placement="top">
                    <div className="my-auto"><img height="34" className="px-2" src={Figma} /> </div> 
                  </Tooltip>
                  <Tooltip title="UXPin" arrow  placement="top">
                  <div className="my-auto"><img width="50" className="px-2" src={Uxpin} /> </div> 
                  </Tooltip>
                  <Tooltip title="Adobe AI" arrow  placement="top">
                  <div className="my-auto"><img width="50" className="px-2" src={Ai} /></div>  
                  </Tooltip>
                  <Tooltip title="Adobe PS" arrow  placement="top">
                  <div className="my-auto"><img width="50" className="px-2" src={Ps} /></div>  
                  </Tooltip>
                  <Tooltip title="After Effects" arrow  placement="top">
                  <div className="my-auto"><img width="50" className="px-2" src={Ae} /></div>  
                  </Tooltip>
                  <Tooltip title="Affinity" arrow  placement="top">
                  <div className="my-auto"><img width="50" className="px-2" src={Affinity} /> </div> 
                  </Tooltip>
                  <Tooltip title="Affinity Photo" arrow  placement="top">
                  <div className="my-auto"><img width="50" className="px-2" src={AffinityPhoto} /> </div> 
                  </Tooltip>
                  <Tooltip title="Icomoon" arrow  placement="top">
                  <div className="my-auto"><img width="50" className="px-2" src={Icomoon} /> </div> 
                  </Tooltip>
                  <Tooltip title="Lottie Files" arrow  placement="top">
                  <div className="my-auto"><img width="50" className="px-2" src={Lottie} /> </div> 
                  </Tooltip>
                  <Tooltip title="Miro" arrow  placement="top">
                  <div className="my-auto"><img width="50" className="px-2" src={Miro} /> </div> 
                  </Tooltip>
                </Stack>
              </Box>
            </Hidden>
            <Box mt={3} textAlign='center'>
              <Chip
                label="&#128679; Under Maintenance (still, you can see the projects!) &#128679;"
                sx={{
                  animation: `${colorChange} 32s linear infinite`,
                  mx: 'auto',
                  color: '#444444',
                  fontWeight: 700,
                  fontFamily: 'Work Sans',
              }}/>
            </Box>
            
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="stretch"
                spacing={2}
                mb={5}
                mt={3}>
                {projectCardsProps.map((props, path) => (
                    <Grid item xs={props.itemGrid.xs} 
                        sm={props.itemGrid.sm}
                        md={props.itemGrid.md} 
                        lg={props.itemGrid.lg}>
                        <Link to={props.path} key={props.id} style={{textDecoration: 'none'}}>
                            <LazyProjectCard {...props} />
                        </Link>
                    </Grid>
                ))}
              </Grid>

              <Stack direction="column" spacing={1} alignItems="center" justifyContent="center"
                sx={{
                  background: 'linear-gradient(to right, rgb(11 18 49 / 20%), #0B1231)',
                  marginTop: '32px',
                  padding: '16px',
                  borderRadius: '16px',
                  maxWidth: 400,
                  margin: '0 auto',
                  backdropFilter: 'blur(12px)',
                  border: 'rgb(255 255 255 / .1) solid 1px'
                }}>
                  <Typography variant="regularText" component='p' fontStyle='italic' textAlign='center' pb={1}>Other Stops</Typography>
                  <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
                    <IconButton disableRipple aria-label="Soundcloud">
                      <a href="https://soundcloud.com/sarges-2" target="_blank" cursor="pointer">
                        <img width="35" height="35" src={Soundcloud} />
                      </a>
                    </IconButton>
                    <IconButton disableRipple aria-label="itch.io" >
                      <a href="https://baltazzzar.itch.io/" target="_blank">
                        <img width="35" height="35" src={Itchio} />
                      </a>
                    </IconButton>
                    <IconButton disableRipple aria-label="Dribbble">
                      <a href="https://www.dribbble.com/" target="_blank"  style={{ cursor: 'pointer' }}>
                        <img width="35" height="35" src={Dribbble} />
                      </a>
                    </IconButton>
                  </Stack>
              </Stack>      
            </Container>
          </>
  )
}

export default Home;
