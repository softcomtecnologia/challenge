import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import CardValue, {
  CardContainer,
  ContentContainer,
  CardTitle,
} from './CardComponents';

const InfoCard = ({ value, title, setOpenModal, description }) => {
  return (
    
    <Grid item>
      <CardContainer elevation={3}>
        <ContentContainer>
          <CardTitle onClick={()=>setOpenModal(title, value, description)} variant="caption">{title}</CardTitle>
          <CardValue >R$ {value},00</CardValue>
        </ContentContainer>
      </CardContainer>
    </Grid>
  );
};

InfoCard.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default InfoCard;