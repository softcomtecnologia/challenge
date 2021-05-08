import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { IconButton, Modal } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AddProductVendas from '../vendas/AddProductVendas';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: '23%',
    marginTop: '10%',
    position: 'absolute',
    width: 650,
    height: 350,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root:{
    width: '40%'
  },
  titulo: {
    marginLeft: '45%',
    marginTop: '-40%',
    color: '#B41C8B',
    fontWeight: 'bold',
    fontSize: 18,
  },
  descricao: {
    marginLeft: '45%',
    marginTop: '5%',
    fontSize: 16,
    height: 90
  },
  observacoes: {  
    marginTop: '0%',
    marginLeft: '45%',
    width: '55%'
  }
}));

export default function ProductModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div  className={classes.paper}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={process.env.PUBLIC_URL + props.produto.imageUrl}
          />
        </CardActionArea>
      </Card>
      <Typography variant="body2"  component="p" className={classes.titulo}>
          {props.produto.titulo}
      </Typography>
      <Typography variant="body2"  component="p" className={classes.descricao} >
          {props.produto.descricao}
      </Typography>
      <Typography style={{marginTop: '3%',marginLeft: '45%', fontWeight: 'bold'}}>Observações</Typography>
      <TextareaAutosize aria-label="minimum height"
      className={classes.observacoes} 
      rowsMin={6} />
      <AddProductVendas produto={props} export={props.export}/>
    </div>
  );

  return (
    <div>
      <IconButton onClick={handleOpen} style={{marginLeft: 70}}>
        <ShoppingCart style={{color: '#B11E89'}}/>
      </IconButton>
      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      >

        {body}

      </Modal>
      
    </div>
  );
}
