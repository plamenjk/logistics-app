// pages/packages.tsx
import React from 'react';
import { Paper, Typography } from '@mui/material';
import Layout from '../components/Layout';

const Packages: React.FC = () => (
  <Layout>
    <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Packages
      </Typography>
      {/* TODO: добави тук списък с пакети или DataGrid */}
    </Paper>
  </Layout>
);

export default Packages;
