import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles,
  IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../../services/api';
import history from '../../services/history';

import { removeEventRequest } from '../../store/modules/event/actions';

import EventImg from '../../assets/images/ilustrations/events.png';

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 250,
    width: 250,
  },
}));

export default function Details() {
  const event = useSelector((state) => state.event.event);
  const dispatch = useDispatch();

  const classes = useStyles();

  function handleNavigateTo(routeName) {
    switch (routeName) {
      case '/editar/evento':
        history.push(routeName);
        break;
      case 'back':
        history.goBack();
        break;
      default:
    }
  }

  async function handleDelete() {
    try {
      await api.delete(`/events/${event.id}`);

      toast.success('Evento deletado com sucesso!');

      history.push('/eventos');
    } catch (err) {
      console.log(err);
      toast.error('Falha ao remover esse evento!');
    }
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <IconButton
            edge="start"
            aria-haspopup="true"
            color="inherit"
            onClick={() => handleNavigateTo('/editar/evento')}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-haspopup="true"
            color="inherit"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar className={classes.avatar} src={EventImg} />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {event.description}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {` Inicio as ${format(parseISO(event.start_date), "HH:mm 'hrs'", { locale: pt })}`}
          </Typography>
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {format(parseISO(event.start_date), "d 'de' MMMM", { locale: pt })}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          onClick={() => handleNavigateTo('back')}
          color="primary"
          fullWidth
          variant="text"
        >
          Voltar
        </Button>
      </CardActions>
    </Card>
  );
}
