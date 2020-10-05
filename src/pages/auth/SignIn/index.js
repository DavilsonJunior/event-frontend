import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Hidden,
  Box,
} from '@material-ui/core';
import useStyles from '../styles';

import { signInRequest } from '../../../store/modules/auth/actions';

import AuthImg from '../../../assets/images/ilustrations/authentication.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Hidden mdDown>
        <Grid className={classes.contentLeft} container item xs={6}>
          <Box>
            <Typography color="primary" variant="h1">
              Bem vindo ao Event
            </Typography>
            <Typography color="textPrimary" variant="button">
              A plataforma para agendamentos de eventos
            </Typography>

            <img className={classes.img} src={AuthImg} alt="autentication" />
          </Box>
        </Grid>
      </Hidden>
      <Grid
        onSubmit={handleSubmit}
        component="form"
        className={classes.contentRight}
        item
        xs={12}
        lg={6}
      >
        <Typography variant="h1">Login</Typography>
        <Typography
          className={classes.spacing}
          color="textSecondary"
          variant="body1"
        >
          Entre com seus dados para acessar o sistema
        </Typography>

        <TextField
          className={classes.textInput}
          fullWidth
          id="email"
          label="Seu e-mail"
          type="email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          className={classes.textInput}
          fullWidth
          id="password"
          label="Sua senha"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          size="large"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          {loading ? 'Carregando...' : 'ENTRAR'}
        </Button>

        <Link to="/cadastro">Ainda nao possui Cadastro? Cadastre-se</Link>
      </Grid>
    </>
  );
}
