import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box, Stack } from '@mui/material';

const ImageGallery =  ({ images, widthGallery = 800, marginTop = 0, heightGallery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const currentImage = images[currentIndex];

  return (
    <Box textAlign="center" alignSelf="center" mt={marginTop}>
   
          <Card sx={{width: widthGallery}}>
            <CardMedia
              component="img"
              image={currentImage.src}
              alt={currentImage.title}
              height={heightGallery}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {currentImage.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {currentImage.description}
              </Typography>
            </CardContent>
          </Card>

      <Stack direction={"row"} spacing={2} justifyContent="center"
              alignItems="center" mt={2}>
        <Button variant="contained" onClick={handlePrevious} sx={{background: "#44a28c", 
        '&:hover':{
          background: "#206d5b"
        }}}>
          Previous
        </Button>
        <Button variant="contained" sx={{background: "#44a28c", '&:hover':{
          background: "#206d5b"
        }}} onClick={handleNext}>
          Next
          </Button>
        </Stack>
    </Box>
  );
};

export default ImageGallery;