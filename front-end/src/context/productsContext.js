import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { searchAllProducts } from '../services/FetchApi';

export const productsCtx = createContext();

const ProductsContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [listProducts, setListPoducts] = useState([]);
  const [category, setCategory] = useState('Sugestão do Vendedor');
  const [allCategory, setAllCategory] = useState([]);
  const [filterProduct, setFilterProduct] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [productDetails, setProductDetails] = useState('');

  const handleShowProductDetails = (id) => {
    setShowProductDetails((c) => !c);
    if (!showProductDetails) {
      setProductDetails(id);
    } else {
      setProductDetails('');
    }
  };

  useEffect(() => {
    const exec = async () => {
      const products = await searchAllProducts();
      setProducts(products);
      setAllCategory(
        products
          .filter(
            (item, index, self) =>
              index ===
              self.findIndex((t) => t.category_lj === item.category_lj),
          )
          .map((item) => item.category_lj),
      );
    };
    exec();
  }, []);

  useEffect(() => {
    if (category === 'Sugestão do Vendedor') {
      setListPoducts(products);
      return;
    }
    setListPoducts(products.filter((item) => item.category_lj === category));
  }, [category, products]);

  const search = () => {
    if (filterProduct === '' && category === 'Sugestão do Vendedor') {
      setListPoducts(products);
      setIsSearch(false);
      return;
    }
    if (filterProduct === '') {
      setListPoducts(products.filter((item) => item.category_lj === category));
      setIsSearch(false);
      return;
    }
    setListPoducts(
      listProducts.filter((item) =>
        item.title.toLowerCase().includes(filterProduct.toLowerCase()),
      ),
      setIsSearch(true),
    );
  };

  return (
    <productsCtx.Provider
      value={{
        category,
        products,
        listProducts,
        allCategory,
        setCategory,
        isSearch,
        filterProduct,
        handleShowProductDetails,
        showProductDetails,
        productDetails,
        setFilterProduct,
        search,
      }}
    >
      {children}
    </productsCtx.Provider>
  );
};

ProductsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsContext;
