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
import Cnpj from '../../assets/img/cnpj.png';
import User from '../../assets/img/user1.png';
import Skeleton from '@material-ui/lab/Skeleton';
// Style
import useStyles from './styles';

const Register = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorCnpj, setErrorCnpj] = useState('');
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('');
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    if (email) {
      setErrorEmail('');
    }
  }, [email]);

  useEffect(() => {
    if (cnpj) {
      setErrorCnpj('');
    }
  }, [cnpj]);

  useEffect(() => {
    if (password) {
      setErrorPassword('');
    }
  }, [password]);

  useEffect(() => {
    if (passwordConfirm) {
      setErrorPasswordConfirm('');
    }
  }, [passwordConfirm]);

  const handleValidation = () => {
    let formIsValid = true;

    if (!email) {
      formIsValid = false;
      setErrorEmail('Email cannot be empty');
    }  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErrorEmail('Invalid email')
    }

    if (!password) {
      formIsValid = false;
      setErrorPassword('Password cannot be empty');
    }

    if (!cnpj) {
      formIsValid = false;
      setErrorCnpj('Cnpj cannot be empty');
    }

    if (!passwordConfirm) {
      formIsValid = false;
      setErrorPasswordConfirm('Please, confirm your password');
    }

    if (passwordConfirm != password) {
      formIsValid = false;
      setErrorPasswordConfirm('password and password confirm are not equals');
    }

    return formIsValid;
  };

  const makeRegister = event => {
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
        setIsLoading(true)
        try {
          const response = await API.Users.register(formData);
          localStorage.setItem('register_success', response.data.message);
          window.location = '/';
        } catch (e) {
          setErrorLogin(e.errorMessage);
        }
        setIsLoading(false)
      })();
    }
  };

  const renderLoading = () => {
    if (isLoading) {
      return (
        <>
          <Grid item>
            <Skeleton animation="wave" className={classes.skeletonButton} />
          </Grid>
        </>
      )
    }
    return (
      <>

        <Grid item>
          <Button
            className={classes.registerButton}
            variant="contained"
            onClick={makeRegister}
            component="span">
            Register
      </Button>
        </Grid>
      </>
    )
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.container}>

           <Grid item xs={6}>
          <section
            style={{
              width: '100%',
              backgroundImage: `url(${Picture})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '100vh',
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            className={classes.container}
            style={{ minHeight: '80vh' }}>
            
            {/** Login */}
            <Grid item className={classes.containerLogin}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.container}>
                <Grid item className={classes.containerLogin2}>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.container}>
                    <Grid item className={classes.container}>
                      <Typography className={classes.fontLogin} variant="h6">
                        Register
                      </Typography>
                    </Grid>

                    <Grid item className={classes.container}>
                      <Typography
                        className={classes.fontCaption}
                        variant="caption">
                        Please create to your account
                      </Typography>
                    </Grid>
                    <Grid item className={classes.errorContainer}>
                      {errorLogin ? (
                        <Alert
                          className={classes.errorMessage}
                          severity="error">
                          {errorLogin}
                        </Alert>
                      ) : (
                        ''
                      )}
                    </Grid>

                    <Grid item className={classes.container}>
                      <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        className={classes.boxLogin}>
                          {/**Email */}
                        <Grid item className={classes.containerBoxLogin}>
                          <Paper className={classes.paper1}>
                            <Grid
                              container
                              direction="column"
                              justify="flex-start"
                              alignItems="space-between">
                              <Grid item>
                                <Grid
                                  container
                                  direction="column"
                                  justify="flex-start"
                                  alignItems="flex-start">
                                  <Grid item />
                                  <Typography
                                    className={classes.label}
                                    variant="subtitle1">
                                    Email
                                  </Typography>
                                </Grid>
                              </Grid>

                              <Grid item>
                                <Grid
                                  container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="space-between"
                                  className={classes.container}>
                                  <Grid item>
                                    <Grid
                                      container
                                      direction="column"
                                      justify="flex-start"
                                      alignItems="flex-start"
                                      className={classes.container}>
                                      <Grid item>
                                        <input
                                          type="email"
                                          onChange={e =>
                                            setEmail(e.target.value)
                                          }
                                          value={email}
                                          className="no-outline"
                                          placeholder="Enter your email"
                                        />
                                      </Grid>

                                      <Grid item>
                                        <Typography
                                          className={classes.captionError}
                                          variant="caption"
                                          component="h2">
                                          {errorEmail}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item>
                                    <img src={User} alt="User" />
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                         {/**Cnpj */}
                         <Grid item className={classes.containerBoxLogin}>
                          <Paper className={classes.paper3}>
                            <Grid
                              container
                              direction="column"
                              justify="flex-start"
                              alignItems="space-between">
                              <Grid item>
                                <Grid
                                  container
                                  direction="column"
                                  justify="flex-start"
                                  alignItems="flex-start">
                                  <Grid item />
                                  <Typography
                                    className={classes.label}
                                    variant="subtitle1">
                                    Cnpj
                                  </Typography>
                                </Grid>
                              </Grid>

                              <Grid item>
                                <Grid
                                  container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="space-between"
                                  className={classes.container}>
                                  <Grid item>
                                    <Grid
                                      container
                                      direction="column"
                                      justify="flex-start"
                                      alignItems="flex-start"
                                      className={classes.container}>
                                      <Grid item>
                                        <input
                                          type="text"
                                          value={cnpj}
                                          onChange={e =>
                                            setCnpj(e.target.value)
                                          }
                                          className="no-outline"
                                          placeholder="Enter your Cnpj"
                                        />
                                      </Grid>

                                      <Grid item>
                                        <Typography
                                          className={classes.captionError}
                                          variant="caption"
                                          component="h2">
                                          {errorCnpj}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item>
                                    <img className={classes.iconCnpj} src={Cnpj} alt="Cnpj" />
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                        
                        {/**Password */}
                        <Grid item className={classes.containerBoxLogin}>
                          <Paper className={classes.paper3}>
                            <Grid
                              container
                              direction="column"
                              justify="flex-start"
                              alignItems="space-between">
                              <Grid item>
                                <Grid
                                  container
                                  direction="column"
                                  justify="flex-start"
                                  alignItems="flex-start">
                                  <Grid item />
                                  <Typography
                                    className={classes.label}
                                    variant="subtitle1">
                                    Password
                                  </Typography>
                                </Grid>
                              </Grid>

                              <Grid item>
                                <Grid
                                  container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="space-between"
                                  className={classes.container}>
                                  <Grid item>
                                    <Grid
                                      container
                                      direction="column"
                                      justify="flex-start"
                                      alignItems="flex-start"
                                      className={classes.container}>
                                      <Grid item>
                                        <input
                                          type="password"
                                          value={password}
                                          onChange={e =>
                                            setPassword(e.target.value)
                                          }
                                          className="no-outline"
                                          placeholder="Enter your password"
                                        />
                                      </Grid>

                                      <Grid item>
                                        <Typography
                                          className={classes.captionError}
                                          variant="caption"
                                          component="h2">
                                          {errorPassword}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item>
                                    <img src={Lock} alt="Lock" />
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                         {/**Confirm Password */}
                         <Grid item className={classes.containerBoxLogin}>
                          <Paper className={classes.paper2}>
                            <Grid
                              container
                              direction="column"
                              justify="flex-start"
                              alignItems="space-between">
                              <Grid item>
                                <Grid
                                  container
                                  direction="column"
                                  justify="flex-start"
                                  alignItems="flex-start">
                                  <Grid item />
                                  <Typography
                                    className={classes.label}
                                    variant="subtitle1">
                                    Confirm your password
                                  </Typography>
                                </Grid>
                              </Grid>

                              <Grid item>
                                <Grid
                                  container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="space-between"
                                  className={classes.container}>
                                  <Grid item>
                                    <Grid
                                      container
                                      direction="column"
                                      justify="flex-start"
                                      alignItems="flex-start"
                                      className={classes.container}>
                                      <Grid item>
                                        <input
                                          type="password"
                                          value={passwordConfirm}
                                          onChange={e =>
                                            setPasswordConfirm(e.target.value)
                                          }
                                          className="no-outline"
                                          placeholder="Confirm your password"
                                        />
                                      </Grid>

                                      <Grid item>
                                        <Typography
                                          className={classes.captionError}
                                          variant="caption"
                                          component="h2">
                                          {errorPasswordConfirm}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </Grid>
                                  <Grid item>
                                    <img src={Lock} alt="Lock" />
                                  </Grid>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Paper>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item className={classes.containerBoxLogin}>
                  <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    className={classes.containerButtons}>
                    { renderLoading()  }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
       
      </Grid>
    </div>
  );
};

Register.propTypes = {};

export default Register;