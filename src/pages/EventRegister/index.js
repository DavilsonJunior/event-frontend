import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';

import Register from './Register';
import Title from '../../components/Title';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export default function EventRegister() {
  const classes = useStyles();

  return (
    <>
      <Title title="Cadastrar novo evento" />
      <div className={classes.root}>
        <Grid container>
          <Grid item lg={6} md={10} xs={12}>
            <Register />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
