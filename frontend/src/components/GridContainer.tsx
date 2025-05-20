import React from 'react';
import { Box } from '@mui/material';

const GridContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    sx={{
      height: 600,
      width: '100%',
      backgroundColor: 'background.paper',
      borderRadius: 1,
      boxShadow: 1,
      p: 1,
    }}
  >
    {children}
  </Box>
);

export default GridContainer;
