import React from "react";
import { useHistory } from "react-router-dom";

import Card from "./Card";

import data from "../../services/mock.json";

import { CategoryMap, ProductsContainer } from "./styles";

export default function CardProductMap({
  categories = data.categories,
  sections = data.sections,
}) {
  const history = useHistory();
  function handleShowDetails({ target }) {
    const { id } = target;
    history.push(`/productDetails/${id}`);
  }
  return (
    <>
      {categories.map((category) => (
        <>
          <CategoryMap>{category}</CategoryMap>
          <ProductsContainer>
            <Card
              handleShowDetails={handleShowDetails}
              products={sections[category].products}
            />
          </ProductsContainer>
        </>
      ))}
    </>
  );
}
