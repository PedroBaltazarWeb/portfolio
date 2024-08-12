import React, { useState, Suspense } from 'react';
import { Grid, CircularProgress } from '@mui/material';

const withLazyLoad = (Component) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
      setLoading(false);
    };

    return (
      <>
        {loading && (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: 50 }}
          >
            <CircularProgress />
          </Grid>
        )}
        <Suspense
          fallback={
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{ height: 50 }}
            >
              <CircularProgress />
            </Grid>
          }
        >
          <Component {...props} onLoad={handleLoad} />
        </Suspense>
      </>
    );
  };
};

export default withLazyLoad;
