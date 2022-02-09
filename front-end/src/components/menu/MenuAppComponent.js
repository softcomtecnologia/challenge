import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Divider } from '@material-ui/core';
import CarrinhoProductVenda from '../vendas/CarrinhoProductVendas';
import { AccessTime, Motorcycle } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 100
  },
  barra: {
     flex: 1,
     backgroundColor: '#FFFFFF',
     color: '#333333',
     maxHeight: '15%'
  },
  logo: {
    border: '1.5px solid',
    borderColor: '#B41C8B',
    height: '50%',
    width: '50%',
    marginLeft: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    font: 'Quicksand',
    marginTop: '-4%',
    width: '30%'
  },
  status: {
    fontSize: 12,
    marginLeft: -150,
    marginTop: -50,
    color: '#1BBB16',
  },
  endereco:{
    fontSize: 14,
    marginTop: 6,
    marginLeft: -350,
  },
  delivery:{
    fontSize: 14,
    marginLeft: -475,
    marginTop: 50,
  },
  entrega:{
    fontSize: 14,
    marginLeft: 10,
    marginTop: 50,
  },
  divider: {
    backgroundColor: '#ECECEC',
    marginLeft: 520,
    height: 60,
    marginTop: 10,
    width: 0.1,
  }
}));

export default function MenuAppComponent(props) {

  const classes = useStyles();
  console.log(props.empresa.name)
  return (
    <div className={classes.root} >
      
      <AppBar className={classes.barra}>
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu" disabled>
            <Avatar className={classes.logo} src={process.env.PUBLIC_URL + '/logo.png'}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {props.empresa.name} 
          </Typography>      
          <Typography color="inherit" className={classes.status}>
            <AccessTime style={{width: 10, height: 10}}/>{props.empresa.status}
          </Typography>
          <Typography className={classes.endereco}>
            {props.empresa.endereco}
          </Typography>
          <Typography className={classes.delivery}>
            <Motorcycle style={{width: 15, height: 15}}/>
            <b style={{color: '#3F3F3F'}}>Delivery:</b> {props.empresa.delivery}
          </Typography>
          <Typography className={classes.entrega}>
             <b>Entrega:</b> {props.empresa.entrega}
          </Typography> 
          <Divider orientation="vertical" flexItem  className={classes.divider}/>
          <CarrinhoProductVenda compra={props.compra}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
