import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface PageHeaderProps {
  title: string;
  actions?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, actions }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mb: 3,
      pt: 1,
      pb: 1,
      borderBottom: theme => `1px solid ${theme.palette.divider}`,
    }}
  >
    <Typography variant="h4">{title}</Typography>
    {actions && <Box>{actions}</Box>}
  </Box>
);

export default PageHeader;
