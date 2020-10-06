import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
  alert: {
    marginTop: 20,
    width: '100%',
    maxWidth: 500,
  },
});

export default function Envite() {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2">Meus Eventos</Typography>
      <Alert className={classes.alert} variant="filled" severity="warning">
        Voce ainda nao possui nehum convite!
      </Alert>
    </>
  );
}
