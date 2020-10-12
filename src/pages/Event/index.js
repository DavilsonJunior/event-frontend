import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useDispatch } from 'react-redux';
import {
  Typography,
  Grid,
  Button,
  CircularProgress,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import history from '../../services/history';
import { addEvent } from '../../store/modules/event/actions';
import api from '../../services/api';

import EventsImg from '../../assets/images/ilustrations/events.png';
import LookEventImg from '../../assets/images/ilustrations/lookevent.png';
import NewEventImg from '../../assets/images/ilustrations/newevent.png';
import TakeEventImg from '../../assets/images/ilustrations/takeevent.png';
import TechEventImg from '../../assets/images/ilustrations/techevent.png';

import Title from '../../components/Title';
import Alert from '../../components/AlertComponent';

import useStyles from './styles';

const images = [EventsImg, LookEventImg, NewEventImg, TakeEventImg, TechEventImg];

export default function Event() {
  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getMyEvents() {
      const response = await api.get('/events/user');

      setMyEvents(response.data);
      setLoading(false);
    }

    getMyEvents();
  }, []);

  function handleAdd() {
    history.push('/cadastrar/novo/evento');
  }

  function handleAddEvent(event) {
    dispatch(addEvent(event));
    history.push('/evento/detalhes');
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
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.img}
                    component="img"
                    alt="event"
                    height="250"
                    image={images[Math.floor(Math.random() * images.length)]}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h3" component="h2">
                      {item.description}
                    </Typography>
                    <Typography variant="button" color="textSecondary" component="p">
                      {format(parseISO(item.start_date), "d 'de' MMMM 'de' yyyy", { locale: pt })}
                    </Typography>
                    <Typography variant="h4" color="textSecondary">
                      {format(parseISO(item.start_date), "HH:mm 'hrs'", { locale: pt })}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    22 membros
                  </Button>
                  <Button size="small" color="primary">
                    Inscrito
                  </Button>

                  <Button onClick={() => handleAddEvent(item)} size="small" variant="outlined" color="secondary">
                    Visualizar
                  </Button>
                </CardActions>

              </Card>
            </Grid>

          ))}
        </Grid>
      )}

    </>
  );
}
