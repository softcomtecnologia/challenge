import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import API from '../../services';
import Logo from '../../assets/img/Logo.png';
import Picture from '../../assets/img/PictureLogin.jpg';
import Lock from '../../assets/img/lock.png';
import User from '../../assets/img/user1.png';
import CardsContainer from './../../containers/CardsContainer';
import AppBar from './../../components/AppBar'
// Style
import useStyles from './styles';

const HomePage = () => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    
  }, [currentUser]);  

  const handleValidation = () => {
    let formIsValid = true;
  };

  const addItem = event => {
    /*
    event.preventDefault();
    if (handleValidation()) {
      const formData = new FormData();

      if (email !== '') {
        formData.append('email', email);
      }
      if (password !== '') {
        formData.append('password', password);
      }
      (async () => {
        try {
          const response = await API.Users.login(formData);
          localStorage.setItem('access_token', response.data.token);
          sessionStorage.setItem('user', JSON.stringify(response.data.user));
          window.location = '/dashboard';
        } catch (e) {
          setErrorLogin(e.errorMessage);
        }
      })();
    }*/
  };

  return (
    <div className={classes.root}>
      <AppBar></AppBar>
       <CardsContainer />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;