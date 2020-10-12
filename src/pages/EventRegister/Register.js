import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
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
import history from '../../services/history';

import api from '../../services/api';

export default function ProfileDetails() {
  const dateFormatted = format(new Date(), "yyyy-MM-dd'T'HH:mm", { locale: pt });

  const [description, setDescription] = useState('');
  const [date_initial, setInitialDate] = useState(dateFormatted);
  const [date_final, setFinalDate] = useState(dateFormatted);

  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      api
        .post('/events', {
          description,
          date_initial,
          date_final,
        })
        .then((response) => {
          if (response.data.description) {
            toast.success('Evento cadastrado com sucesso!');
            history.push('/eventos');
            setError(false);
          }
        })
        .catch((error) => {
          setError(true);
          toast.error(error.response.data.error);
        });
    } catch (err) {
      toast.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
      <Card>
        <CardHeader subheader="Informe os dados do Evento" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item lg={11} md={10} xs={12}>
              <TextField
                fullWidth
                helperText="Por favor, informe a descricao"
                error={error}
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
                value={date_initial}
                variant="outlined"
                onChange={(e) => setInitialDate(e.target.value)}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="end_date"
                label="Data de fim"
                type="datetime-local"
                value={date_final}
                variant="outlined"
                onChange={(e) => setFinalDate(e.target.value)}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button type="submit" color="primary" variant="contained">
            Criar
          </Button>
        </Box>
      </Card>
    </form>
  );
}
