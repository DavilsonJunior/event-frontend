import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box, Grid, Button } from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import TodayIcon from '@material-ui/icons/Today';
import api from '../../services/api';
import Title from '../../components/Title';

import useStyles from './styles';

export default function Event() {
  const [myEvents, setMyEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  const profile = useSelector((state) => state.user.profile);

  useEffect(() => {
    async function getMyEvents() {
      const response = await api.get('/events/user/registered');

      setMyEvents(response.data);
    }

    getMyEvents();
  }, []);

  console.log(myEvents);

  const classes = useStyles();
  return (
    <>
      <Title title="Meus Eventos" />
      <Grid className={classes.mb} container spacing={2}>
        {myEvents.map((item) => (
          <Grid item lg={3} sm={6} xs={12} key={item.id}>
            <Box my={3} height="140px" boxShadow={1} className={classes.root}>
              <Typography
                className={classes.marginBotton}
                color="textSecondary"
                variant="h6"
              >
                INSCRICOES ABERTAS
              </Typography>
              <Typography className={classes.mb} variant="h2">
                {item.event.description}
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
                <Button disabled size="small" variant="outlined">
                  Inscrito
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Title title="Todos Eventos" />
      <Grid container spacing={2}>
        {myEvents.map((item) => (
          <Grid item lg={3} sm={6} xs={12} key={item.id}>
            <Box my={3} height="140px" boxShadow={1} className={classes.root}>
              <Typography
                className={classes.marginBotton}
                color="textSecondary"
                variant="h6"
              >
                INSCRICOES ABERTAS
              </Typography>
              <Typography className={classes.mb} variant="h2">
                {item.event.description}
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
                <Button disabled size="small" variant="outlined">
                  Inscrito
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
