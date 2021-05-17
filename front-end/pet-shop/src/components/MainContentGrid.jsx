import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Card, CardImg, CardText, CardGroup, CardBody, Badge,
} from 'reactstrap';
import CardItemModal from './CardItemModal';
import NotFound from './NotFound';
import cart from '../assets/CartPurple.svg';

import './MainContentGrid.style.css';

const MainContentGrid = ({ results }) => {
  if (results.length === 0) {
    return <NotFound />;
  }
  return (
    <CardGroup>
      {results.map((e) => (
        <Card
          key={ e.id }
        >
          <CardItemModal
            image={ e.thumbnail }
            description={ e.title }
            maxQuantity={ e.available_quantity }
            price={ e.price }
            freeShipping={ e.shipping.free_shipping }
          >
            <CardBody>
              <CardImg top width="100%" src={ e.thumbnail } alt="Card image cap" />
              <CardText
                className="description"
              >
                {e.title}
              </CardText>
              <CardText className="card-footer-display">
                <Badge>
                  {`R$ ${e.price}`}
                </Badge>
                <img className="cart-icon-purple" src={ cart } alt="cart" />
              </CardText>
            </CardBody>
          </CardItemModal>
        </Card>
      ))}
    </CardGroup>
  );
};

MainContentGrid.propTypes = {
  results: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  results: state.searchReducer.results,
});

export default connect(mapStateToProps)(MainContentGrid);
