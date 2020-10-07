import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

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

import api from '../../services/api';

export default function ProfileDetails() {
  const [description, setDescription] = useState('');
  const [date_initial, setInitialDate] = useState('2020-10-05T15:45');
  const [date_final, setFinalDate] = useState('2020-10-05T15:45');

  const history = useHistory();

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
          }
        })
        .catch((error) => {
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
                label="Descricao"
                name="description"
                required
                variant="outlined"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="start_date"
                label="Data de inicio"
                type="datetime-local"
                defaultValue="2020-10-05T15:45"
                variant="outlined"
                onChange={(e) => setInitialDate(e.target.value)}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="end_date"
                label="Data de fim"
                type="datetime-local"
                defaultValue="2020-10-05T15:45"
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
