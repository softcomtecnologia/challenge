import { makeStyles } from '@material-ui/core/styles';
import Picture from '../../assets/img/PictureLogin.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    width: '100%',
    padding: 0,
    margin: 0,
  },
  containerBoxLogin: {
    width: '100%',
    padding: 0,
    margin: 0,
  },
  containerLogin: {
    width: '70%',
    padding: 0,
  },
  containerLogin2: {
    width: '100%',
    padding: 0,
  },
  fontLogo: {
    fontWeight: '600',
    fontSize: '48px',
    fontFamily: 'Montserrat',
  },
  fontLogin: {
    fontWeight: '600',
    fontSize: '48px',
    marginBottom: '-10px',
    fontFamily: 'Montserrat',
  },
  fontCaption: {
    fontSize: '14px',
    color: '#707070',
    marginBottom: '20px',
    marginLeft: '5px',
    fontFamily: 'Montserrat',
  },
  fontSubtitle: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: '14px',
    marginTop: '12px',
    marginLeft: '-20px',
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: '100%',
    height: '90px',
    color: theme.palette.text.secondary,
    marginBottom: '2px',
    boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px 10px 0px 0px',
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: '100%',
    height: '90px',
    color: theme.palette.text.secondary,
    marginBottom: '2px',
    boxShadow: '4px 4px 5px rgba(0, 0, 0, 0.25)',
    borderRadius: '0px 0px 10px 10px',
  },
  label: {
    fontWeight: '600',
    fontSize: '14px',
    color: '#414141',
    fontFamily: 'Montserrat',
  },
  containerLogo: {
    marginTop: '2rem',
    width: '100%',
    padding: 0,
    margin: 0,
  },
  containerButtons: {
    marginTop: '1rem',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  boxLogin: {
    marginTop: '2rem',
    width: '100%',
    padding: 0,
    margin: 0,
  },
  loginButton: {
    width: '185px',
    height: '62px',
    background: '#284A76',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
  },
  registerButton: {
    width: '185px',
    height: '62px',
    background: '#FFFFFF',
    color: 'black',
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    marginLeft: '20px',
  },
  captionError: {
    fontFamily: 'Montserrat',
    color: '#DC3545',
  },
  errorMessage: {
    width: '100%',
    borderRadius: '10px',
  },
  errorContainer: {
    height: '25px',
    width: '100%',
  },
  remember: {
    marginLeft: '5px',
  },
  sectionImg: {
    width: '100%',
    height: '400px',
    backgroundImage: 'url(' + { Picture } + ')',
  },
  logo: {
    width: '100px',
    height: '100px'
  },
  skeletonButton: {
    marginTop: '-1.6rem',
    width: '185px',
    height: '112px',
    borderRadius: '10px',
    background: '#DCDCDC',
    marginLeft: '20px'
},
skeletonButtonLogin: {
  marginTop: '-1.6rem',
  width: '185px',
  height: '112px',
  borderRadius: '10px',
  background: '#DCDCDC',
},
}));

export default useStyles;