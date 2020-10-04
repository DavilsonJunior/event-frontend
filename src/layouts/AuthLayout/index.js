import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import PropsTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  pageAuth: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  content: {
    width: '100%',
    maxWidth: 1000,
    height: 640,
    background: theme.palette.background.paper,
    margin: '5%',
  },
}));

export default function AuthLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.pageAuth}>
      <Grid className={classes.content} container>
        {children}
      </Grid>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};
