import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Drawer,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from './styles';
import DrawerContent from '../Drawer';

import logoIcon from '../../assets/images/icons/logo.svg';

export default function MenuNavigation(props) {
  const { window } = props;
  const theme = useTheme();
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <img src={logoIcon} alt="Logo" />
          </IconButton>
          <Typography variant="h6" className={classes.appTitle}>
            Event
          </Typography>

          <IconButton
            edge="end"
            aria-haspopup="true"
            color="inherit"
            onClick={() => {}}
          >
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            className={classes.drawer}
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.drawerContainer}>
              <DrawerContent />
            </div>
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div className={classes.drawerContainer}>
              <DrawerContent />
            </div>
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
