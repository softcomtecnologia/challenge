import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "./Card";

import data from "../../services/mock.json";

// import { updateDetailsMod } from "../../actions";

import { CategoryMap, ProductsContainer } from "./styles";
import {
  updatePriceOfProductsOnCart,
  updateProductsOnCart,
} from "../../actions";

export default function CardProductMap({
  categories = data.categories,
  sections = data.sections,
}) {
  const { productsOnCart } = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleUpDateCartStates({ target }) {
    let _priceCount = 0;
    const { id } = target;
    const products = data["sections"].products;
    const newProductToCart = products.find((product) => product.id == id);
    productsOnCart.push(newProductToCart);
    if (productsOnCart.length > 0) {
      productsOnCart.forEach(({ price }) => {
        _priceCount += price;
      });
      console.log(_priceCount);
      dispatch(updatePriceOfProductsOnCart(_priceCount));
    }
    dispatch(updateProductsOnCart(productsOnCart));
  }
  // function handleShowDetails() {
  //   dispatch(updateDetailsMod(!desableDetailsScreen));
  //   console.log(desableDetailsScreen);
  // }
  return (
    <>
      {categories.map((category) => (
        <>
          <CategoryMap>{category}</CategoryMap>
          <ProductsContainer>
            <Card
              onClick={handleUpDateCartStates}
              products={sections[category].products}
            />
          </ProductsContainer>
        </>
      ))}
    </>
  );
}
