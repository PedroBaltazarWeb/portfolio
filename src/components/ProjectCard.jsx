import React, { useEffect } from 'react';
import { Grid, Link, Stack, Box, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const ProjectCard = ({ imageSrc, altText, company, projectTitle, description, footerSubjects, onLoad, isNotACaseStudy }) => {
  const useStyles = {
    '&.MuiLink-root': {
      '&:hover': {
        color: '#fff'
      }
    }
  };

  const handleImageLoad = () => {
    if (onLoad) {
      onLoad();
    }
  };

  return (
    
        <Stack direction="column"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2}
          className="project-square"
          height="100%">

          <Box>
            <img src={imageSrc} alt={altText} width='100%' onLoad={handleImageLoad} />
            <Typography component="h5" my={2} variant="cardCompanyHeader">{company}</Typography>
            <Typography component="span" pr={1} variant="cardProjectTitle">
              {projectTitle}
            </Typography>
            <EastIcon pl={2} sx={{ verticalAlign: 'text-bottom' }}></EastIcon>
            <Typography variant="regularText" component='p' fontWeight={500} fontStyle='italic' color={'#00ff7b'} hidden={isNotACaseStudy}>Case Study</Typography>
            <Typography variant="regularText" component='p' mb={4} mt={1}>
              {description}
            </Typography>
          </Box>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}>
            {footerSubjects}
          </Stack>
        </Stack>
  );
};

export default ProjectCard;