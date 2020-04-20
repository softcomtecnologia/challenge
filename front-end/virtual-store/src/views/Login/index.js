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
import Skeleton from '@material-ui/lab/Skeleton';
// Style
import useStyles from './styles';

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorLogin, setErrorLogin] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [register_success, setRegister_success] = useState(localStorage.getItem("register_success"))

  useEffect(() => {
    if (email) {
      setErrorEmail('');
    }
  }, [email]);

  useEffect(() => {
    if (password) {
      setErrorPassword('');
    }
  }, [password]);

  const handleValidation = () => {
    let formIsValid = true;

    if (!email) {
      formIsValid = false;
      setErrorEmail('Email cannot be empty');
    }

    if (!password) {
      formIsValid = false;
      setErrorPassword('Password cannot be empty');
    }
    return formIsValid;
  };

  const toRegister = () => {
    window.location = "/register"
  }

  const makeLogin = event => {
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
          const response = await API.Users.login(formData);
          localStorage.setItem('access_token', response.data.token);
          console.log(response)
          const response2 = await API.Items.showAll();
          localStorage.setItem('user', JSON.stringify(response2.data.user));
          localStorage.setItem('items', JSON.stringify(response2.data.items));
          localStorage.removeItem('register_success');
          window.location = '/home';
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
            <Skeleton animation="wave" className={classes.skeletonButtonLogin} />
          </Grid>

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
            className={classes.loginButton}
            onClick={makeLogin}
            variant="contained"
            color="primary"
            component="span">
            Login
      </Button>
        </Grid>
        <Grid item>
          <Button
            className={classes.registerButton}
            variant="contained"
            onClick={toRegister}
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
            <Grid item>
              {/* Logo */}
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.containerLogo}>
                <Grid item>
                  <img className={classes.logo} src={Logo} alt="Logo" />
                </Grid>

                <Grid item>
                  <Typography className={classes.fontLogo} variant="h6">
                    Virtual Store
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
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
                        Log in
                      </Typography>
                    </Grid>

                    <Grid item className={classes.container}>
                      <Typography
                        className={classes.fontCaption}
                        variant="caption">
                        Please login to your account
                      </Typography>
                    </Grid>
                    <Grid item className={classes.errorContainer}>
                      {errorLogin ? (
                        <Alert
                          className={classes.errorMessage}
                          severity="error">
                          {errorLogin}
                        </Alert>
                      ) : register_success ? (
                        <Alert
                          className={classes.register_success}
                          severity="success">
                          {register_success}
                        </Alert>
                      ) : ''}
                    </Grid>

                    <Grid item className={classes.container}>
                      <Grid
                        container
                        direction="column"
                        justify="flex-start"
                        alignItems="flex-start"
                        className={classes.boxLogin}>
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
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Remember */}
                  <Grid item className={classes.containerBoxLogin}>
                    <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="space-between">
                      <Grid item className={classes.remember}>
                        <Grid
                          container
                          direction="row"
                          justify="flex-start"
                          alignItems="flex-start"
                          className={classes.container}>
                          <Grid item>
                            <FormControlLabel
                              value="end"
                              control={<Checkbox color="primary" />}
                              labelPlacement="end"
                            />
                          </Grid>

                          <Grid item>
                            <Typography
                              className={classes.fontSubtitle}
                              variant="subtitle1">
                              Remember me
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography
                          className={classes.fontSubtitle}
                          variant="subtitle1">
                          Forgot password?
                        </Typography>
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
                    {renderLoading()}
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

Login.propTypes = {};

export default Login;