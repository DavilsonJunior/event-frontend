import React from 'react';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

import useStyles from './styles';

export default function AlertComponent({ description }) {
  const classes = useStyles();
  return (
    <Alert className={classes.alert} variant="filled" severity="warning">
      {description}
    </Alert>
  );
}

AlertComponent.propTypes = {
  description: PropTypes.string,
};
