import React, { useRef, useState, useEffect } from 'react';
import { Typography, Grid, Box, Divider } from '@mui/material';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const ProjectCard = ({ imageSrc, altText, company, projectTitle, id, projectType, onLoad, path, description}) => {

  /* const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', {
      noSsr: true,
  }); */

  const prefersDarkMode = true;
  
  const handleImageLoad = () => {
    if (onLoad) {
      onLoad();
    }
  };

  const textRef = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsTruncated(el.scrollHeight > el.clientHeight + 1);
    }
  }, [projectTitle]);

  const typographyElement = <Typography variant='h2' 
            component='h2'
            ref={textRef} 
            sx={{
              color:'text.primary'
          }}>{projectTitle}</Typography>

  return (
    <>
      <Paper
        bgcolor="background.paper" 
        borderRadius={0}
        sx={{
          p: 3,
          borderWidth: 1,
          borderColor: "card.border",
          borderStyle: 'solid',          
        }}>
        <Grid container 
          spacing={3}
          direction="row"
          height={'100%'}>
            <Grid item xs={12} md={4}>
              <Stack direction='column' spacing={1}>
                {typographyElement}

                <Box>
                  {projectType == 'Ongoing' ? null: <Typography variant='body' component='p'>{company}</Typography>}
                  <Typography variant='body' component='p' fontWeight={700}>{projectType}</Typography>
                  {projectType == 'Ongoing' ? null :
                  typeof window !== "undefined" && (
                    <Link to={path} key={id}><Typography variant='body' color='card.link' component='p' alignContent='end'>Open project</Typography></Link>
                  )}
                </Box>
              </Stack>
             
            </Grid>
            <Grid item md='auto' display={{xs:'none', md:'block'}}>
              <Divider orientation="vertical"  flexItem component="div" sx={{height: '100%'}} />
            </Grid>
            <Grid item xs={12} md={7}>
              
              <Typography variant='projectDescription'>
                {description}
              </Typography>
            </Grid>
            
            {/* <Grid 
              item
              spacing={4}
              direction="column"
              justifyContent="flex-start"
              alignItems="stretch"
              xs={5}>
                <Chip label="primary" color="primary" />
                <Chip label="success" color="success" />
            </Grid> */}
            <Grid item xs={12}>
              {typeof window !== "undefined" && (
              <Link to={projectType == 'Ongoing' ? null : path} key={id} style={{width: '100%', cursor: projectType == 'Ongoing' ? 'unset' : 'pointer'}}>
                <img src={imageSrc} alt={altText} onLoad={handleImageLoad} style={{borderRadius: 16, borderWidth: '0.1rem',
                borderColor: projectType == 'Ongoing' ? '#fff' : prefersDarkMode ? '#00D76D' : '#0002ff',
                borderStyle: 'solid',
                width: '100%', 
                height: 'auto' }}/>
              </Link>  
              )}
            </Grid>  
        </Grid>
      </Paper>
    </>
  );
};

export default ProjectCard;