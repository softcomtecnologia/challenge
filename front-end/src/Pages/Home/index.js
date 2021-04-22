import React, { useContext } from 'react';
import ContentProducts from '../../Components/ContentProducts';
import FilterByCategory from '../../Components/FilterByCategory';
import Header from '../../Components/Header';
import { productsCtx } from '../../context/productsContext';
import './style.css';
import ProductDetails from '../../Components/ProductDetails';
import Footer from '../../Components/Footer';

function Home() {
  const {
    showProductDetails,
    productDetails,
    handleShowProductDetails,
  } = useContext(productsCtx);
  return (
    <div className="home-container">
      <Header />
      <FilterByCategory />
      <main className="main-container">
        <ContentProducts />
      </main>
      {showProductDetails && <ProductDetails id={productDetails} />}
      <Footer />
    </div>
  );
}

export default Home;
