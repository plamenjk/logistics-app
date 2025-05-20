import React from 'react';
import { Paper, Typography } from '@mui/material';
import Layout from '../components/Layout';

const Home: React.FC = () => (
  <Layout>
    <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="h4">Welcome to the Project</Typography>
    </Paper>
  </Layout>
);

export default Home;
