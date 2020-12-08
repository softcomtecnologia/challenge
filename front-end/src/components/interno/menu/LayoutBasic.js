import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuNav from './MenuNav';
import { Link } from 'react-router-dom';
import { AddBox, MonetizationOn, Send } from '@material-ui/icons';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline  />
      <AppBar position="fixed" className={classes.appBar}>
        <MenuNav></MenuNav>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          
          <List>
            <Link to="/vendas">
            {['Vendas'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <MonetizationOn/> : <Send  /> }</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            </Link>
            <Link to="/produtos">
            {['Produtos'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <AddBox/>: <Send  /> }</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            </Link>
          </List>
          <Divider />
          <List>
          <Link to="/relatorios">
            {['Relatorios'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <AddBox/> : <Send  /> }</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            </Link>
          </List>
          
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        
      </main>
    </div>
  );
}
