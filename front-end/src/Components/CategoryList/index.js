import React from 'react';
import CardProduct from '../CardProduct';
import PropTypes from 'prop-types';

function CategoryList({ listProducts }) {
  return (
    <div className="card-container">
      {listProducts.map((item, index) => {
        return (
          <CardProduct
            key={item.id}
            id={item.id}
            title={item.title}
            discount={item.discount}
            img={item.thumbnail}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

CategoryList.propTypes = {
  listProducts: PropTypes.array.isRequired,
};

export default CategoryList;
