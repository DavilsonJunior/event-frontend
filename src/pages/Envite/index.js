import React from 'react';
import Alert from '@material-ui/lab/Alert';

import Title from '../../components/Title';

import useStyles from './styles';

export default function Envite() {
  const classes = useStyles();

  return (
    <>
      <Title title="Meus convites" />
      <Alert className={classes.alert} variant="filled" severity="warning">
        Voce ainda nao possui nehum convite!
      </Alert>
    </>
  );
}
