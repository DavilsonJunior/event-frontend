import React from 'react';
import { Grid } from '@material-ui/core';

import Details from './Details';

export default function Account() {
  return (
    <Grid container spacing={3}>
      <Grid item lg={6} md={6} xs={12}>
        <Details />
      </Grid>
    </Grid>
  );
}
