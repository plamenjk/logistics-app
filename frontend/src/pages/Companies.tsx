import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PageHeader from '../components/PageHeader';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import api from '../api/api';

interface Company {
  id: number;
  name: string;
  // TODO: добави други полета при нужда
}

const Companies: React.FC = () => {
  const [rows, setRows] = useState<Company[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(20);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await api.get('/companies', {
          params: { page: page + 1, limit: pageSize },
        });
        setRows(response.data.data);
        setTotal(response.data.total);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, [page, pageSize]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', flex: 1, minWidth: 150 },
    // TODO: добави колони за други полета
  ];

  return (
    <Layout>
      <Box sx={{ p: 3, backgroundColor: 'background.default', minHeight: '100vh' }}>
      <PageHeader
           title="Companies"
           actions={
             <Button variant="contained" startIcon={<AddIcon />}>
               Add Company
             </Button>
           }
         />
        <Box sx={{ height: 600, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            rowCount={total}
            pagination
            paginationMode="server"
            pageSizeOptions={[10, 20, 50]}
            paginationModel={{ page, pageSize }}
            onPaginationModelChange={(model) => {
              setPage(model.page);
              setPageSize(model.pageSize);
            }}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default Companies;
