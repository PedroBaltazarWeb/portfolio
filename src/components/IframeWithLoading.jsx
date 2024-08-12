import React, { useState, useEffect, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const IframeWithLoading = ({ src }) => {
    const [loading, setLoading] = useState(true);
    const iframeRef = useRef(null);
  
    useEffect(() => {
      setLoading(true);
      const handleLoad = () => {
        setLoading(false);
      };
  
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.addEventListener('load', handleLoad);
      }
  
      return () => {
        if (iframe) {
          iframe.removeEventListener('load', handleLoad);
        }
      };
    }, [src]);
  
    return (
      <Box position="relative" width="100%" height="720">
        {loading && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)">
            <CircularProgress color="secondary"/>
          </Box>
        )}
        <iframe
            ref={iframeRef}
            src={src}
            width="720" 
            height="450" 
            allowFullScreen
        />
      </Box>
    );
  };

  export default IframeWithLoading;