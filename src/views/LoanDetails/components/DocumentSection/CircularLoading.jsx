import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function CircularLoading() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size="3vh" style={{ color: '#15284B' }} />
    </Box>
  );
}

export default CircularLoading;
