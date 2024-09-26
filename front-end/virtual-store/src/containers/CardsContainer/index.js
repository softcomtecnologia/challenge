import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import InfoCard from '../../components/InfoCard';
import ItemDescription from '../../components/Modals/ItemDescription';
import AddUpdateItem from '../../components/Modals/AddUpdateItem';
import UpdateItem from '../../components/Modals/UpdateItem';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// Style
import useStyles from './styles';

const CardsContainer = ({items}) => {
  const [openModalDescription, setOpenModalDescription] = useState(false);
  const [openModalAddUpdateItem, setOpenModalAddUpdateItem] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [priceModal, setPriceModal] = useState('');
  const [idModal, setIdModal] = useState('');
  const [descriptionModal, setDescriptionModal] = useState('');
  const classes = useStyles();
  //OpenModalDescription
  useEffect(() => {

  }, [openModalDescription]);

  useEffect(() => {

  }, [titleModal]);

  //OpenModalAddUpdateItem
  useEffect(() => {
  }, [openModalAddUpdateItem]);


  const setOpenModal = (title, price, description, id) => {
    setTitleModal(title)
    setPriceModal(price)
    setDescriptionModal(description)
    setIdModal(id)
    setOpenModalDescription(true)
  }
  
  const openAddModal = () => {
    setOpenModalAddUpdateItem(true)
    setTitleModal("Add")
  }
  const closeModalUpdate = () => {
    setOpenModalDescription(false)
    setOpenModalUpdate(false)
    
  }
  const openUpdateModal = () => {
    setTitleModal("Update")
    setOpenModalUpdate(true)
    console.log(titleModal)
    console.log(priceModal)

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
          {items.map(item => (
            <InfoCard setOpenModal={setOpenModal} value={item.price} title={item.name} description={item.description} id={item.id} />
          ))}
      </Grid>
      <ItemDescription
        open={openModalDescription}
        setOpenModalDescription={setOpenModalDescription}
        title={titleModal}
        price={priceModal}
        description={descriptionModal}
        id={idModal}
        openUpdateModal={openUpdateModal} />
      <AddUpdateItem
        open={openModalAddUpdateItem}
        title={titleModal}
        setOpenModal={setOpenModalAddUpdateItem}
        closeModalUpdate={closeModalUpdate}
      />
      <UpdateItem
        open={openModalUpdate}
        title={"Update"}
        closeModalUpdate={closeModalUpdate}
        nameValue={descriptionModal}
        priceValue={priceModal}
        descriptionValue={descriptionModal}
        id={idModal}
      />
    </>
  );
};
/*/
CardsContainer.propTypes = {
  items: PropTypes.string.isRequired
};*/

export default CardsContainer;