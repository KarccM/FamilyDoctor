import React from "react"
import Table from '../../components/table';
import { tableColumns } from './data';
import { Backdrop, Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import Page from '../../components/Page';
import Breadcrumbs from '../../components/Breadcrumbs';
import { get } from "../../api/axios";
import { useQuery } from "react-query";

export default function Symptoms({ params, ...rest }) {
  const columns = React.useMemo(() => tableColumns, []);
  const { data: conclusion, isLoading } = useQuery(
    ['conclusion'],
    () => get('conclusion').then(data => data.data),
  );

  let table = <Table
    columns={columns}
    tableData={conclusion}
    isLoading={false}
    isToolbar={false}
  />

  if (isLoading) return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading}
      onClick={() => { }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )

  return (
    <Page title="الامراض">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={1}
        >
          <Typography variant="h4">
            الامراض
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to={`/conclusions/add`}
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            إنشاء
          </Button>
        </Stack>
        <Breadcrumbs />
        {table}
      </Container>
    </Page>
  );
}
