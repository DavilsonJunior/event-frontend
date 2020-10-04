import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import Home from '../pages/Home';
import Event from '../pages/Event';
import Envite from '../pages/Envite';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/cadastro" component={SignUp} />
      <Route path="/inicio" component={Home} isPrivate />
      <Route path="/eventos" component={Event} isPrivate />
      <Route path="/convites" component={Envite} isPrivate />
    </Switch>
  );
}
