import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import InfoCard from '../../components/InfoCard';
import ItemDescription from '../../components/Modals/ItemDescription';
import AddUpdateItem from '../../components/Modals/AddUpdateItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// Style
import useStyles from './styles';

const CardsContainer = () => {
  const [openModalDescription, setOpenModalDescription] = useState(false);
  const [openModalAddUpdateItem, setOpenModalAddUpdateItem] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [priceModal, setPriceModal] = useState('');
  const [descriptionModal, setDescriptionModal] = useState('');
  const classes = useStyles();
  //OpenModalDescription
  useEffect(() => {

  }, [openModalDescription]);

  //OpenModalAddUpdateItem
  useEffect(() => {
    console.log('oi')
  }, [openModalAddUpdateItem]);


  const setOpenModal = (title, price, description) => {
    setTitleModal(title)
    setPriceModal(price)
    setDescriptionModal(description)
    setOpenModalDescription(true)
  }

  const openAddModal = () => {
    setOpenModalAddUpdateItem(true)
    setTitleModal("Add Item")
  }
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={3}
        className={classes.containerTitle}>
        <Grid item className={classes.itemTitle}>
          <Typography variant="h2" className={classes.title}>
            Items
            </Typography>
        </Grid>
        <Grid item>
          <AddCircleOutlineIcon onClick={() => openAddModal()} className={classes.iconAdd} />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.container}
        spacing={10}>
        <InfoCard setOpenModal={setOpenModal} value="100" title="Phone" description="Muito bom e ótimo preço" />
        <InfoCard setOpenModal={setOpenModal} value="100" title="Sofá" description="Muito bom e ótimo preço" />
        <InfoCard value="100" title="TV" />
        <InfoCard value="100" title="Notebook" />
      </Grid>
      <ItemDescription
        open={openModalDescription}
        setOpenModalDescription={setOpenModalDescription}
        title={titleModal}
        price={priceModal}
        description={descriptionModal} />
      <AddUpdateItem
        open={openModalAddUpdateItem}
        title={titleModal}
        setOpenModal={setOpenModalAddUpdateItem}
      />
    </>
  );
};
/*/
CardsContainer.propTypes = {
  items: PropTypes.string.isRequired
};*/

export default CardsContainer;