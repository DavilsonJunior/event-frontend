import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Typography,
  Divider,
  Box,
  List,
  ListItem,
  ListItemIcon,
  Badge,
} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import TodayIcon from '@material-ui/icons/Today';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import useStyles from './styles';

function DrawerContent() {
  const profile = useSelector((state) => state.user.profile);

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
            <Typography variant="subtitle1">{profile.name}</Typography>
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
              Meus Eventos
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
              <Badge color="error" variant="dot">
                <PeopleAltIcon
                  color={
                    window.location.pathname === '/convites'
                      ? 'primary'
                      : 'inherit'
                  }
                />
              </Badge>
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

          <ListItem
            component={Link}
            to="/ajuda"
            selected={window.location.pathname === '/ajuda'}
            className={classes.listPadding}
            button
          >
            <ListItemIcon>

              <HelpOutlineIcon
                color={
                    window.location.pathname === '/ajuda'
                      ? 'primary'
                      : 'inherit'
                  }
              />

            </ListItemIcon>

            <Typography
              color={
                window.location.pathname === '/ajuda'
                  ? 'primary'
                  : 'textPrimary'
              }
              variant="body2"
            >
              Ajuda
            </Typography>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}

export default DrawerContent;
