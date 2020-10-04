import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropsTypes from 'prop-types';

import MenuNavigation from '../../components/MenuNavigation';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  body: {
    marginLeft: theme.spacing(30),
    [theme.breakpoints.down('md')]: {
      margin: 0,
    },
  },
}));

export default function MainLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuNavigation />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Box className={classes.body}>{children}</Box>
      </main>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};
