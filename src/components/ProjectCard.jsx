import React, { useEffect, useState } from 'react';
import { Grid, Link, Stack, Box, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import flashsProjectCardFirst from './../images/flashsProjectCardFirst.webp';
import flashsProjectCardSecond from './../images/flashsProjectCardSecond.webp';
import shining from '../images/shining.webp';

const ProjectCard = ({ imageSrc, altText, company, projectTitle, numberBadge, projectSubtitle, projectType, footerSubjects, onLoad }) => {

  const handleImageLoad = () => {
    if (onLoad) {
      onLoad();
    }
  };

  return (
  <>
    <Box className="safari-center" sx={{
          position: 'absolute',
          top: -60,
          zIndex: 2,
          left: '50%',
          transform: 'translateX(-50%)'
    }}>
      {numberBadge}
    </Box>

    <Stack direction="column"
      justifyContent="space-between"
      alignItems="stretch"
      spacing={2}
      sx={{
        position: 'relative', // Keeps content above animations
        p: '16px',
        borderRadius: 2,
        background: 'rgba(24, 28, 79, 0.7)',
        border: '#E8B80E solid 1px',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
    
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          opacity: 0,
          zIndex: -1, // ✅ Keeps backgrounds behind content
        },
    
        '&::before': {
          backgroundImage: `url(${flashsProjectCardFirst}), url(${flashsProjectCardSecond})`,
          transform: 'scale(1.05)',
          backgroundBlendMode: 'color-dodge',
        },
    
        '&::after': {
          //backgroundImage: `url(${particlesFirst}), url(${particlesSecond})`,
          transform: 'scale(1.02)',
          backgroundBlendMode: 'multiply',
        },
    
        '&:hover': {
          transform: 'scale(1.01, 1.01)',
          color: '#fff',
          transition: 'opacity 1s ease-in-out, transform 0.5s ease-in-out',
    
          '&::before': {
            opacity: 0.7,
            animation: 'flashAnimation 3s infinite alternate ease-in-out',
          },
          '&::after': {
            //opacity: 0.3,
            //animation: 'particleAnimation 5s infinite alternate ease-in-out',
          },
        },
    
        '@keyframes flashAnimation': {
          '0%': { opacity: 0, transform: 'scale(1) translateY(-15px)' },
          '100%': { opacity: 0.7, transform: 'scale(1.1) translateY(5px)' },
        },
    
        '@keyframes particleAnimation': {
          '0%': { opacity: 0, transform: 'scale(1.02) translateX(-5px)' },
          '100%': { opacity: 0.5, transform: 'scale(1.07) translateX(5px)' },
        },
    
        '& img': {
          borderRadius: 2,
          border: '#fff solid 1px',
          position: 'relative', // ✅ Keeps text & images above the background
          zIndex: 2,
        },
      }}
      height="100%">
        
        <Typography component="p" textAlign='center' pt={5} variant="cardCompanyHeader">{company}</Typography>
        <Stack mt={2} flexGrow={1} justifyContent="center" alignItems="center">
          <Typography component="p" pr={1} pb={1} textAlign='center' variant="cardProjectTitle" >
            {projectTitle}
          </Typography>
          <Typography component="p" mb={1} pr={1} textAlign='center' variant="cardProjectSubtitle">
            {projectSubtitle}
          </Typography>
        </Stack>
        
        <Box mt={4}>
          <img position='absolute' src={imageSrc} alt={altText} width='100%' onLoad={handleImageLoad} />
        </Box>
        
        <Typography variant="projectType" 
        component='p' 
        textAlign={'center'}
        mt={3}
        color={'#00ff7b'}>{projectType}</Typography>
      

      <Stack
        direction="row"
        height={128}
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}>
        {footerSubjects}
      </Stack>
    </Stack>
    </>
  );
};

export default ProjectCard;