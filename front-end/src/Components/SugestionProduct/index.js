import React, { Fragment, useContext } from 'react';
import './style.css';
import CardProduct from '../CardProduct';
import { productsCtx } from '../../context/productsContext';

function SugestionProduct() {
  const { allCategory, listProducts, isSearch } = useContext(productsCtx);
  return (
    <>
      <div className="card-container">
        {listProducts
          .filter((item) => item.installments?.rate >= 13.9)
          .map((item, index) => {
            if (index >= 8) return;
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

      {!isSearch &&
        allCategory?.map((categoryName, index) => (
          <Fragment key={index}>
            <h1 className="title-category">{categoryName}</h1>
            <div key={index} className="card-container">
              {listProducts
                .filter((item) => item.category_lj === categoryName)
                .map((item, index) => {
                  if (index >= 4) return;
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
          </Fragment>
        ))}
    </>
  );
}

export default SugestionProduct;
