import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
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

const ItemDescription = ({ open, setOpenModalDescription, title, price, description }) => {
  const classes = useStyles();
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
        <Button onClick={() => { setOpenModalDescription(false) }} variant="contained" className={classes.buttonDelete} color="secondary" autoFocus>
          Delete
        </Button>
        <Button onClick={() => { setOpenModalDescription(false) }} variant="contained"  className={classes.buttonUpdate} color="primary" autoFocus>
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