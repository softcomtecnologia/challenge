import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Colors, Metrics } from './../../theme/';
import { useFormik } from 'formik';
import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    fontFamily: Metrics.fontFamily,
  },
  description: {
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
  },
  captionError: {
    fontFamily: 'Montserrat',
    color: '#DC3545',
    marginLeft: '-135px'
  },
  errorContainer: {
    height: '30px'
  }

}));

const ItemDescription = ({ open, setOpenModal, title }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: ''
    },
    validate: values => {
      const err = {
        name: '',
        price: '',
        description: ''
      };
      const message = "Field Cannot be empty";
      if (!values.name) err.name = message;
      if (!values.price) err.price = message;
      if (!values.description) err.description = message;

      return err;

    },
  });
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={() => { setOpenModal(false) }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className={classes.title} id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.description} id="alert-dialog-description">
          {/**name */}
          <input
            type="text"
            onInput={() => { formik.setFieldTouched("name") }}
            onChange={
              formik.handleChange("name")
            }
            value={formik.values.name}
            className="no-outline"
            placeholder="Enter with name"
          />
          <div className={classes.errorContainer}>
            <Typography
              className={classes.captionError}
              variant="caption"
              component="h2">
              {formik.touched.name && formik.errors.name}
            </Typography>
          </div>
          {/**price */}
          <input
            type="number"
            onInput={() => { formik.setFieldTouched("price") }}
            onChange={
              formik.handleChange("price")
            }
            value={formik.values.price}
            className="no-outline"
            placeholder="Enter with price"
          />
          <div className={classes.errorContainer}>
            <Typography
              className={classes.captionError}
              variant="caption"
              component="h2">
              {formik.touched.price && formik.errors.price}
            </Typography>
          </div>
          {/**description */}
          <input
            type="text"
            onInput={() => { formik.setFieldTouched("description") }}
            onChange={
              formik.handleChange("description")
            }
            value={formik.values.description}
            className="no-outline"
            placeholder="Enter with description"
          />
          <div className={classes.errorContainer}>
            <Typography
              className={classes.captionError}
              variant="caption"
              component="h2">
              {formik.touched.description && formik.errors.description}
            </Typography>
          </div>


        </DialogContentText>
      </DialogContent>
      <DialogActions>

        <Button onClick={() => { setOpenModal(false) }} color="primary" autoFocus>
          Cancel
        </Button>
        <Button onClick={() => { setOpenModal(false) }} variant="contained" className={classes.buttonUpdate} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
ItemDescription.propTypes = {
  open: PropTypes.string.isRequired,

};

export default ItemDescription;