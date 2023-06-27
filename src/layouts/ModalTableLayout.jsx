import { Button, Container, Stack, Typography } from '@mui/material';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import Breadcrumbs from '../components/Breadcrumbs';
import usePageTitle from '../hooks/usePageTitle';
import Authorize from '../components/Authorize';

export default function ModalTableLayout({ table, filtersForm = null, config, openConfirmationModal, children }) {
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
            startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={openConfirmationModal}
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