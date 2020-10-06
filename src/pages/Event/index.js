import React, { useState } from 'react';
import { Typography, Box, makeStyles, Grid, Button } from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import TodayIcon from '@material-ui/icons/Today';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.background.paper,
    borderRadius: 6,
  },
  mb: {
    marginBottom: 10,
  },
  mr: {
    marginRight: 5,
  },
}));

export default function Event() {
  const [register, setRegister] = useState('inscrito');

  function changeRegister() {
    if (register === 'inscrito') {
      setRegister('inscrever-se');
    } else {
      setRegister('inscrito');
    }
  }

  const classes = useStyles();
  return (
    <>
      <Typography variant="h2">Meus Eventos</Typography>
      <Grid container spacing={2}>
        <Grid item lg={3} sm={6} xs={12}>
          <Box my={3} height="140px" boxShadow={1} className={classes.root}>
            <Typography
              className={classes.marginBotton}
              color="textSecondary"
              variant="h6"
            >
              INSCRICOES ABERTAS
            </Typography>
            <Typography className={classes.mb} variant="h2">
              Hackaton 3.0
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className={classes.mb}
            >
              <Box display="flex" alignItems="center">
                <LocationOnIcon
                  className={classes.mr}
                  fontSize="small"
                  color="action"
                />
                <Typography color="textSecondary" variant="caption">
                  Online
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <TodayIcon
                  className={classes.mr}
                  fontSize="small"
                  color="action"
                />
                <Typography color="textSecondary" variant="caption">
                  26 de junho de 2020
                </Typography>
              </Box>
              <Button onClick={changeRegister} size="small" variant="outlined">
                {register}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
