import React, { useRef, useState, useEffect } from 'react';
import { Typography, Grid, Tooltip } from '@mui/material';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProjectCard = ({ imageSrc, altText, company, projectTitle, id, projectType, onLoad, path}) => {

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
            ref={textRef} 
            sx={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden',
              color:'text.primary',
              margin: 0,
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
        height: {
          xs: 425,
          sm: 490,
          md: 490,
        }
      }}
    >
      <Grid container 
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        height={'100%'}>
      <Grid item container direction="row" spacing={1} justifyContent="space-between"
        alignItems="stretch" minHeight={'5rem'} >
        <Grid item>
          {isTruncated ? 
            <Tooltip title={projectTitle}>
              {typographyElement}
            </Tooltip>
           : 
            typographyElement
        }
        </Grid>
      </Grid>
      <Grid item container >
        <Link to={path} key={id} style={{width: '100%'}}>
          <img src={imageSrc} alt={altText} onLoad={handleImageLoad} style={{borderRadius: 16, borderWidth: '0.1rem',
          borderColor: prefersDarkMode ? '#00D76D' : '#0002ff',
          borderStyle: 'solid',
          width: '100%', 
          height: 'auto' }}/>
        </Link>  
      </Grid>
      <Grid 
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch">
          <Typography variant='body' component='p'>{company}</Typography>
          <Typography variant='body' component='p'>{projectType}</Typography>
          <Link to={path} key={id}><Typography variant='body' color='card.link' component='p' height={50} alignContent='end'>Open project</Typography></Link>
      </Grid>
    </Grid>
    </Paper>


    
    </>
  );
};

export default ProjectCard;