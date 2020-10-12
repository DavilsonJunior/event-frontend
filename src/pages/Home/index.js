import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  Grid,
  Typography,
  Button,
  CircularProgress,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from '@material-ui/core';
import Calendar from '../../components/Calendar';
import api from '../../services/api';

import useStyles from './styles';

import EventsImg from '../../assets/images/ilustrations/events.png';
import LookEventImg from '../../assets/images/ilustrations/lookevent.png';
import NewEventImg from '../../assets/images/ilustrations/newevent.png';
import TakeEventImg from '../../assets/images/ilustrations/takeevent.png';
import TechEventImg from '../../assets/images/ilustrations/techevent.png';

import Title from '../../components/Title';
import getHour from '../../utils/getHour';

const images = [EventsImg, LookEventImg, NewEventImg, TakeEventImg, TechEventImg];

export default function Home() {
  const [data, setData] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const profile = useSelector((state) => state.user.profile);

  const classes = useStyles();

  useEffect(() => {
    async function getDates() {
      const response = await api.get('/events/user/registered');

      const events = response.data.map((item) => ({
        title: `${item.event.description} as ${getHour(
          item.event.start_date,
        )} hrs`,
        startDate: item.event.start_date,
        endDate: item.event.end_date,
      }));

      setData(events);
    }

    getDates();
  }, []);

  useEffect(() => {
    async function getAllEvents() {
      const response = await api.get('/events/registered');

      setAllEvents(response.data);
      setLoading(false);
    }

    getAllEvents();
  }, []);

  if (loading) {
    return <CircularProgress className={classes.loading} />;
  }

  return (
    <>
      <Title title="Todos Eventos" />
      <Grid container spacing={2}>
        {allEvents.map((item) => (
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
                    {item.event.description}
                  </Typography>
                  <Typography variant="button" color="textSecondary" component="p">
                    {format(parseISO(item.event.start_date), "d 'de' MMMM 'de' yyyy", { locale: pt })}
                  </Typography>
                  <Typography variant="h4" color="textSecondary">
                    {format(parseISO(item.event.start_date), "HH:mm 'hrs'", { locale: pt })}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  22 membros
                </Button>
                <Button size="small" color="primary">
                  Inscrever-se
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Title title="Calendario de Eventos" />
      <Calendar data={data} />
    </>
  );
}
