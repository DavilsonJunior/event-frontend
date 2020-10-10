import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import Details from './Details';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Account = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item lg={6} md={6} xs={12}>
        <Details />
      </Grid>
    </Grid>
  );
};

export default Account;
