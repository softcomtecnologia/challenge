import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: '#FFFFF',
        color: '#B41C8B',
        marginBlockStart: 0,
    },
    toolbar: {
        height: 70
    },
    logo: {
        width: 200,
        height: 50,
        marginLeft: '-17%',
        marginTop: 80,
        marginBlockEnd: 30
    },
    privacity: {
        marginLeft: '14%',
        color: '#B41C8B'
    },
    socialMedia: {
        marginLeft: '-10%',
        marginTop: '5%'
    }
}));

export default function FooterBar() {

  const classes = useStyles();
  return (
    <div className={classes.root} >
      <Toolbar className={classes.toolbar}>
        <Typography style={{marginLeft: 55, width: 200, marginTop: -10}}>Desenvolvido Por</Typography>
        <img alt="img" className={classes.logo} src={process.env.PUBLIC_URL + '/logoSoftcom.png'}/>
        <a className={classes.privacity} href="/privacity">Politicas de privacidade</a>      
        <a className={classes.privacity} href="/use"> termo de Uso</a>
        <a className={classes.privacity} href="/Social">Nossas Redes Sociais</a>
        <div className={classes.socialMedia}>
          <Facebook style={{color: '#1877f2'}}/>
          <Instagram style={{color: '#c32aa3'}}/>
          <Twitter style={{color: '#1da1f2'}}/>
          <YouTube style={{color: '#ff0000'}}/>
        </div>
      </Toolbar>
    </div>
  );
}
