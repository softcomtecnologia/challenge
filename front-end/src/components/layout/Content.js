import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SugestaoVendedor from '../produtos/SugestaoVendedor';
import Brinquedos from '../produtos/Brinquedos';
import CamaCasinha from '../produtos/CamaCasinha';
import Coleiras from '../produtos/Coleiras';
import OssosPetiscos from '../produtos/OssosPetiscos';
import Saude from '../produtos/Saude';
import ProdutoAutoComplete from '../search/ProdutosAutoComplete';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F3F3F4',
    marginTop: 100,
    width: '101.35%',
    marginLeft: -10
  },
  appBar: {
      marginTop: 60,
      backgroundColor: 'white',
      color: '#3F3F3F',
      borderTop: '3px solid',
      borderTopColor: '#B41C8B'
  },
  table: {
    fontFamily: 'Quicksand',
    minWidth: '16.5%',
    padding: 1,
  }
}));

export default function Content(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs value={value} onChange={handleChange}  aria-label="wrapped label tabs example">
          <Tab className={classes.table} value="one" label="Sugestão do Vendedor" wrapped {...a11yProps('one')}/>
          <Tab value="two" label="Brinquedos" {...a11yProps('two')} className={classes.table}/>
          <Tab value="three" label="Cama e Casinha" {...a11yProps('three')} className={classes.table}/>
          <Tab value="four" label="Coleiras" {...a11yProps('four')} className={classes.table}/>
          <Tab value="five" label="Ossos e Petiscos" {...a11yProps('five')} className={classes.table}/>
          <Tab value="six" label="Saúde" {...a11yProps('six')} className={classes.table}/>
        </Tabs>
      </AppBar>

      <TabPanel  value={value} index="one">
        <ProdutoAutoComplete/>
        <SugestaoVendedor export={props.export} />
        <Brinquedos export={props.export}/>
        <CamaCasinha export={props.export}/>
        <Coleiras export={props.export}/>
        <OssosPetiscos export={props.export}/>
        <Saude export={props.export}/>
      </TabPanel>
      <TabPanel value={value} index="two">
        <ProdutoAutoComplete />
        <Brinquedos export={props.export}/>
        <SugestaoVendedor export={props.export}/>
        <CamaCasinha export={props.export}/>
        <Coleiras export={props.export}/>
        <OssosPetiscos export={props.export}/>
        <Saude export={props.export}/>
      </TabPanel>
      <TabPanel value={value} index="three">
        <ProdutoAutoComplete />
        <CamaCasinha export={props.export}/>
        <SugestaoVendedor export={props.export}/>
        <Brinquedos export={props.export}/>
        <Coleiras export={props.export}/>
        <OssosPetiscos export={props.export}/>
        <Saude export={props.export}/>
      </TabPanel>
      <TabPanel value={value} index="four">
        <ProdutoAutoComplete/>
        <Coleiras export={props.export}/>
        <SugestaoVendedor export={props.export}/>
        <Brinquedos export={props.export}/>
        <CamaCasinha export={props.export}/>
        <OssosPetiscos export={props.export}/>
        <Saude/>
      </TabPanel>
      <TabPanel value={value} index="five">
        <ProdutoAutoComplete/>
        <OssosPetiscos export={props.export}/>
        <SugestaoVendedor export={props.export}/>
        <Coleiras export={props.export}/>
        <Brinquedos export={props.export}/>
        <CamaCasinha export={props.export}/>
        <Saude export={props.export}/>
      </TabPanel>
      <TabPanel value={value} index="six">
        <ProdutoAutoComplete/>
        <Saude export={props.export}/>
        <SugestaoVendedor export={props.export}/>
        <OssosPetiscos export={props.export}/>
        <Coleiras export={props.export}/>
        <Brinquedos export={props.export}/>
        <CamaCasinha export={props.export}/>
      </TabPanel>
    </div>
  );
}
