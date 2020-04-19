import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
    border :'50 solid red'
  },
  elipse: {
    width:  '50px',
    height: '50px',
    marginLeft: '20px',
    fontFamily: Metrics.fontFamily,
    backgroundColor: '#bd1622',
    fontWeight: 800,
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar 
      position="static"
      className={classes.appBar}>
        <Toolbar>

          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <img  src={Alert}></img>
          <Avatar className={classes.elipse}>N</Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
}