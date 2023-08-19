import React from "react"
import Table from '../../components/table';
import { tableColumns } from './data';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import Page from '../../components/Page';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Symptoms({ params, ...rest }) {
  const columns = React.useMemo(() => tableColumns, []);
  // const client = useClient();
  // let fetchDataOptions = readQueryParams()
  // fetchDataOptions = { ...fetchDataOptions, ...params };
  // const { data: settings, isLoading } = useQuery(
  //   [config.queryClient.list, fetchDataOptions],
  //   () => client(`${config.url}?${queryString.stringify(fetchDataOptions)}`),
  //   {
  //     keepPreviousData: true,
  //     onError: () => {
  //       errorWithCustomMessage("failed_with_reload_msg");
  //     },
  //   }
  // );
  let data = [
    { name: 'حرارة', question: 'هل تعاني من ارتفاع في الحرارة ', answers: ['نعم', 'لا'] },
    { name: 'وجع في رأس المعدة', question: 'هل تعاني من الم او وخزة في قسم العلوي من المعدة ', answers: ['نعم', 'لا'] },
    { name: 'دوخة', question: 'هل تشعر بالدوران ', answers: ['نعم', 'لا'] },
  ]
  let table = <Table
    columns={columns}
    tableData={data}
    isLoading={false}
    isToolbar={false}
  />

  return (
    <Page title="الاعراض">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={1}
        >
          <Typography variant="h4">
            الاعراض
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to={`/conditions/add`}
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
