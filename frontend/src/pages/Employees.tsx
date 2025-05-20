// pages/employee.tsx
import React from 'react';
import { Paper, Typography } from '@mui/material';
import Layout from '../components/Layout';

const Employee: React.FC = () => (
  <Layout>
    <Paper elevation={1} sx={{ p: 2, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom>
        Employees
      </Typography>
      {/* TODO: сложи тук твоя DataGrid или форма за служители */}
    </Paper>
  </Layout>
);

export default Employee;
