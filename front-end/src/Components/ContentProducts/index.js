import React, { useContext } from 'react';
import { productsCtx } from '../../context/productsContext';
import CategoryList from '../CategoryList';
import SearchProducts from '../SearchProducts.js';
import SugestionProduct from '../SugestionProduct';
import './style.css';

function ContentProducts() {
  const { listProducts, category } = useContext(productsCtx);
  return (
    <div className="cards">
      {listProducts ? (
        <>
          <SearchProducts />
          <h1 className="title-page">
            {listProducts.length === 0 ? 'Nenhum Produto encontrado' : category}
          </h1>
          <>
            {category === 'Sugestão do Vendedor' ? (
              <SugestionProduct listProducts={listProducts} />
            ) : (
              <CategoryList listProducts={listProducts} />
            )}
          </>
        </>
      ) : (
        'Nenhum Produto cadastrado'
      )}
    </div>
  );
}

export default ContentProducts;
