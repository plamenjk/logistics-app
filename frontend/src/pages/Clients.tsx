import { useEffect, useState } from 'react';
import api from '../api/api';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';

interface Client {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

export default function Clients() {
  const [rows, setRows] = useState<Client[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    api.get('/clients?page=1&limit=50')
      .then(res => {
        setRows(res.data.data);
        setTotal(res.data.total);
      })
      .catch(console.error);
  }, []);

  const columns: GridColDef[] = [
    { field: 'id',    headerName: 'ID',    width: 70 },
    { field: 'name',  headerName: 'Name',  width: 200 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Phone', width: 150 },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>Clients</Typography>
      <Box sx={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          rowCount={total}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 20, page: 0 },
            },
          }}
          paginationModel={{ pageSize: 20, page: 0 }}
          pagination
        />
      </Box>
    </Box>
  );
}
