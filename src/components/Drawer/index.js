import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Divider,
  Box,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import useStyles from './styles';

function DrawerContent() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />

      <List>
        <ListItem>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            width="100%"
          >
            <Typography variant="subtitle1">Davilson Junior</Typography>
            <Typography color="textSecondary" variant="caption">
              Full Stack Developer
            </Typography>
          </Box>
        </ListItem>
      </List>
      <Divider variant="middle" />
      <Box padding={2}>
        <List>
          <ListItem
            component={Link}
            to="/inicio"
            selected={window.location.pathname === '/inicio'}
            button
          >
            <ListItemIcon>
              <HomeIcon
                color={
                  window.location.pathname === '/inicio' ? 'primary' : 'inherit'
                }
              />
            </ListItemIcon>
            <Typography
              color={
                window.location.pathname === '/inicio'
                  ? 'primary'
                  : 'textPrimary'
              }
              variant="body2"
            >
              Inicio
            </Typography>
          </ListItem>

          <ListItem
            component={Link}
            to="/eventos"
            selected={window.location.pathname === '/eventos'}
            className={classes.listPadding}
            button
          >
            <ListItemIcon>
              <TodayIcon
                color={
                  window.location.pathname === '/eventos'
                    ? 'primary'
                    : 'inherit'
                }
              />
            </ListItemIcon>
            <Typography
              color={
                window.location.pathname === '/eventos'
                  ? 'primary'
                  : 'textPrimary'
              }
              variant="body2"
            >
              Eventos
            </Typography>
          </ListItem>

          <ListItem
            component={Link}
            to="/convites"
            selected={window.location.pathname === '/convites'}
            className={classes.listPadding}
            button
          >
            <ListItemIcon>
              <PeopleAltIcon
                color={
                  window.location.pathname === '/convites'
                    ? 'primary'
                    : 'inherit'
                }
              />
            </ListItemIcon>
            <Typography
              color={
                window.location.pathname === '/convites'
                  ? 'primary'
                  : 'textPrimary'
              }
              variant="body2"
            >
              Convites
            </Typography>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}

export default DrawerContent;
