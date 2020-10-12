import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core';

import { updateEventRequest } from '../../store/modules/event/actions';

export default function ProfileDetails() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event.event);

  const [description, setDescription] = useState(event.description);
  const [date_initial, setInitialDate] = useState(format(parseISO(event.start_date), "yyyy-MM-dd'T'HH:mm", { locale: pt }));
  const [date_final, setFinalDate] = useState(format(parseISO(event.end_date), "yyyy-MM-dd'T'HH:mm", { locale: pt }));

  async function handleSubmit(e) {
    e.preventDefault();

    const { id } = event;

    dispatch(updateEventRequest({
      id, description, date_initial, date_final
    }));
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
      <Card>
        <CardHeader subheader="Edite os dados do Evento" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item lg={11} md={10} xs={12}>
              <TextField
                fullWidth
                label="Descricao"
                name="description"
                required
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="start_date"
                label="Data de inicio"
                type="datetime-local"
                variant="outlined"
                value={date_initial}
                onChange={(e) => setInitialDate(e.target.value)}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="end_date"
                label="Data de fim"
                type="datetime-local"
                variant="outlined"
                value={date_final}
                onChange={(e) => setFinalDate(e.target.value)}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button type="submit" color="primary" variant="contained">
            Salvar
          </Button>
        </Box>
      </Card>
    </form>
  );
}
