// pages/office.tsx
import React from 'react';
import { Paper, Typography } from '@mui/material';
import Layout from '../components/Layout';

const Office: React.FC = () => (
  <Layout>
    <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Office
      </Typography>
      {/* TODO: сложи тук карта, адреси или справка за офиси */}
    </Paper>
  </Layout>
);

export default Office;
