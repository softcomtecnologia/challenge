import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Typography,
        Menu,
        MenuItem} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Elipse from './../assets/img/Elipse.png';
import Alert from './../assets/img/Alert.png';
import { Colors, Metrics } from './../theme';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 0px 0px ',
    border: '50 solid red'
  },
  elipse: {
    width: '50px',
    height: '50px',
    marginLeft: '20px',
    fontFamily: Metrics.fontFamily,
    backgroundColor: '#bd1622',
    fontWeight: 800,
    cursor: 'pointer'
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  const firstCharacter = name => {
    return (name.slice(0, 1).toUpperCase())
  }

  const toHome = () => {
    window.location = "/"
  }

  const makeLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    window.location = '/';
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <img src={Alert}></img>
          <Avatar  onClick={handleClick} className={classes.elipse}>{firstCharacter(currentUser.username)}</Avatar>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={toHome}>Home</MenuItem>
            <MenuItem onClick={makeLogout}>Logout</MenuItem>
            
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}