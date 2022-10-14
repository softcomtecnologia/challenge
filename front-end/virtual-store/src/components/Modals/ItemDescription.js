import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import API from '../../services';
import { Colors, Metrics } from './../../theme/';
import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
title: {
  textAlign: 'center',
  fontFamily: Metrics.fontFamily,
},
description : {
  textAlign: 'center',
  fontFamily: Metrics.fontFamily,
},
buttonDelete: {
  backgroundColor: '#bd1622',
  fontFamily: Metrics.fontFamily,
},
buttonUpdate: {
  backgroundColor: '#284A76',
  fontFamily: Metrics.fontFamily,
}

}));

const ItemDescription = ({ open, setOpenModalDescription, openUpdateModal, title, price, description, id }) => {
  const classes = useStyles();
  const deleteItem = id => {
    (async () => {
      try {
        const response = await API.Items.deleteItem(id);
        const response2 = await API.Items.showAll()
        localStorage.setItem('items', JSON.stringify(response2.data.items));
        window.location = '/home';
      } catch (e) {
        console.log('error')
      }
    })();
  }
  return (
    <Dialog
      open={open}
      onClose={() => { setOpenModalDescription(false) }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className={classes.title} id="alert-dialog-title">
        {title} (R$ {price},00) 
      </DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.description} id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>

        <Button onClick={() => { setOpenModalDescription(false) }} color="primary" autoFocus>
          Cancel
        </Button>
        <Button onClick={() => { deleteItem(id) }} variant="contained" className={classes.buttonDelete} color="secondary" autoFocus>
          Delete
        </Button>
        <Button onClick={() => { openUpdateModal() }} variant="contained"  className={classes.buttonUpdate} color="primary" autoFocus>
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};
ItemDescription.propTypes = {
  open: PropTypes.string.isRequired,

};

export default ItemDescription;