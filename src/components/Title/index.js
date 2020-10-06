import React from 'react';
import { Typography, LinearProgress } from '@material-ui/core';
import PropTypes from 'prop-types';

import useStyles from './styles';

export default function Title({ title }) {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h2">{title}</Typography>
      <LinearProgress
        className={classes.progress}
        variant="determinate"
        value={100}
      />
    </>
  );
}

Title.propTypes = {
  title: PropTypes.string,
};
