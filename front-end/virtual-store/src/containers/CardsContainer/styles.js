import { makeStyles } from '@material-ui/core/styles';
import { Colors, Metrics } from './../../theme/';
const useStyles = makeStyles({
  container: {
    width: '100%',
    margin: 0,
    padding: 0,
  },
  containerTitle: {
    width: '100%',
    margin: 0,
    padding: 0,
    
  },
  card: {
    cursor: 'pointer'
  },
  iconAdd: {
   color: '#B7B7B7',
   width: '50px',
   height: '50px',
   cursor: 'pointer'
  },
  title: {
    fontFamily: Metrics.fontFamily,
    fontSize: '36px',
    fontWeight: '700'
  },
  itemTitle: {
    marginLeft: '10vw'
  }
});

export default useStyles;