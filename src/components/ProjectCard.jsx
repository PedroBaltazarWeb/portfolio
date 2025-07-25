import React, { useEffect, useState } from 'react';
import { Typography, Grid, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';

const ProjectCard = ({ imageSrc, altText, company, projectTitle, projectSubtitle, projectType, footerSubjects, onLoad }) => {

  const handleImageLoad = () => {
    if (onLoad) {
      onLoad();
    }
  };

  return (
  <>
    <Paper
      bgcolor="background.paper" 
      borderRadius={1}
      sx={{
        p: 4,
        borderWidth: 1,
        borderColor: 'yellow',
        borderStyle: 'solid',
        height: 490
      }}
    >
      <Grid container 
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        height={'100%'}>
      <Grid item container direction="row" spacing={1} justifyContent="space-between"
        alignItems="stretch">
        <Grid item xs={9}>
          <Typography variant='h3'>{projectTitle}</Typography>
        </Grid>
        <Grid item xs={3} textAlign={'right'}>
          <Typography variant='body'>{company}</Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <img src={imageSrc} alt={altText} onLoad={handleImageLoad} style={{borderRadius: 16, borderWidth: 1,
        borderColor: '#fff',
        borderStyle: 'solid'}}/>
      </Grid>
      <Grid item container direction="row">
        <Grid item xs={8} sx={{height: 111}}>
            <Stack direction="column" justifyContent='space-between' alignItems="stretch" sx={{height: '100%'}}>
              {footerSubjects.map((value) => (
                <Typography variant='body'>{value}</Typography>
              ))}
            </Stack>
        </Grid>
        <Grid item xs={4} textAlign='right'>
          <Typography variant='body'>{projectType}</Typography>
        </Grid>
      </Grid>
    </Grid>
    </Paper>


    
    </>
  );
};

export default ProjectCard;