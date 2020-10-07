import React from 'react';

import moment from 'moment';
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
} from '@material-ui/core';

import EventImg from '../../assets/images/ilustrations/events.svg';

const user = {
  avatar: EventImg,
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'hackaton 2.0',
  timezone: 'GTM-7',
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 150,
    width: 150,
  },
}));

export default function Details() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar className={classes.avatar} src={user.avatar} />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${user.city} ${user.country}`}
          </Typography>
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} ${user.timezone}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Voltar
        </Button>
      </CardActions>
    </Card>
  );
}
