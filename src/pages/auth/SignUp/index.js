import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Hidden,
  Box,
} from '@material-ui/core';
import useStyles from '../styles';
import AuthImg from '../../../assets/images/ilustrations/authentication.svg';

export default function SignUp() {
  const history = useHistory();
  const classes = useStyles();

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
        component="form"
        className={classes.contentRight}
        item
        xs={12}
        lg={6}
      >
        <Typography variant="h1">Cadastro</Typography>
        <Typography
          className={classes.spacing}
          color="textSecondary"
          variant="body1"
        >
          Informe seus dados para se Cadastrar
        </Typography>

        <TextField
          className={classes.textInput}
          fullWidth
          id="name"
          label="Seu nome"
          type="text"
          variant="outlined"
        />

        <TextField
          className={classes.textInput}
          fullWidth
          id="email"
          label="Seu e-mail"
          type="email"
          variant="outlined"
        />

        <TextField
          className={classes.textInput}
          fullWidth
          id="password"
          label="Sua senha"
          type="password"
          variant="outlined"
        />

        <Button
          onClick={() => history.push('/dashboard')}
          type="submit"
          size="large"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Cadastrar
        </Button>

        <Link to="/">Ja possui Cadastro? Login</Link>
      </Grid>
    </>
  );
}
