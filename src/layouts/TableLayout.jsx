import { Button, Container, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import Breadcrumbs from '../components/Breadcrumbs';
import usePageTitle from '../hooks/usePageTitle';
import Authorize from '../components/Authorize';

export default function TableLayout({ table, filtersForm = null, config, children }) {
  const { title } = usePageTitle();
  return <Page title={title}>
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={1}
      >
        <Typography variant="h4">
          {title}
        </Typography>
        <Authorize permission={config.permission.add} >
          <Button
            variant="contained"
            component={RouterLink}
            to={`/${title}/add`}
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            {config.creationLabel}
          </Button>
        </Authorize>
      </Stack>
      <Breadcrumbs />
      {filtersForm}
      {table}
      {children}
    </Container>
  </Page>
}