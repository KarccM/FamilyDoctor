import { Container, Stack, Typography } from '@mui/material';
import Page from '../components/Page';
import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import usePageTitle from '../hooks/usePageTitle';

export default function FormLayout({ form, label }) {
  const { title } = usePageTitle();
  return (
    <Page title={title}>
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h4" gutterBottom>
            {label}
          </Typography>
        </Stack>
        <Breadcrumbs />
        {form}
      </Container>
    </Page>
  );
}
