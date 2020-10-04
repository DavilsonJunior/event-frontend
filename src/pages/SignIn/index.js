import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  cor: {
    color: 'red',
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Typography className={classes.cor} variant="h1">
      Login
    </Typography>
  );
}
