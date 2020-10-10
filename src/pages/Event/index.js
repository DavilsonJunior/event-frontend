import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useSelector, useDispatch } from 'react-redux';
import {
  Typography,
  Box,
  Grid,
  Button,
  CircularProgress,
} from '@material-ui/core';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import TodayIcon from '@material-ui/icons/Today';
import AddIcon from '@material-ui/icons/Add';
import { addEvent } from '../../store/modules/event/actions';
import api from '../../services/api';

import Title from '../../components/Title';
import Alert from '../../components/AlertComponent';

import useStyles from './styles';

export default function Event() {
  const [myEvents, setMyEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMyEvents() {
      const response = await api.get('/events/user');

      setMyEvents(response.data);
      setLoading(false);
    }

    getMyEvents();
  }, []);

  useEffect(() => {
    async function getAllEvents() {
      const response = await api.get('/events/registered');

      setAllEvents(response.data);
    }

    getAllEvents();
  }, []);

  function handleAdd() {
    history.push('/cadastrar/novo/evento');
  }

  function handleAddEvent(event) {
    dispatch(addEvent(event));
  }

  const classes = useStyles();

  if (loading) {
    return <CircularProgress className={classes.loading} />;
  }

  return (
    <>
      <Title title="Meus Eventos" />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={handleAdd}
      >
        Adicionar
      </Button>

      {myEvents.length <= 0 ? (
        <Alert description="Voce ainda nao possui eventos criados!" />
      ) : (
        <Grid className={classes.mb} container spacing={2}>
          {myEvents.map((item) => (
            <Grid item lg={4} sm={6} xs={12} key={item.id}>
              <Box my={3} height="150px" boxShadow={1} className={classes.root}>
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    className={classes.marginBotton}
                    color="textSecondary"
                    variant="h6"
                  >
                    INSCRICOES ABERTAS
                  </Typography>
                  <Link onClick={() => handleAddEvent(item)} className={classes.link} to="/event/detalhes">
                    Visualizar
                  </Link>
                </Box>
                <Typography className={classes.mb} variant="h2">
                  {item.description}
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
                      {format(parseISO(item.start_date), "d 'de' MMMM", { locale: pt })}
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
      )}

      <Title title="Todos Eventos" />
      <Grid container spacing={2}>
        {allEvents.map((item) => (
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <Box my={3} height="150px" boxShadow={1} className={classes.root}>
              <Box display="flex" justifyContent="space-between">
                <Typography
                  className={classes.marginBotton}
                  color="textSecondary"
                  variant="h6"
                >
                  INSCRICOES ABERTAS
                </Typography>
                <Link className={classes.link} to="/event/user/editar">
                  Visualizar
                </Link>
              </Box>
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
                    26 de junho
                  </Typography>
                </Box>
                <Button size="small" variant="outlined">
                  {item.user_id === profile.id ? 'inscrito' : 'inscreva-se'}
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
