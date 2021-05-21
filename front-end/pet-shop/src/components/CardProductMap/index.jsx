import React from "react";

import Card from "./Card";

import data from "../../services/mock.json";

import * as S from "./styles";

export default function CardProductMap({
  categories = data.categories,
  sections = data.sections,
}) {
  return (
    <>
      {categories.map((category) => (
        <>
          <S.CategoryMap>{category}</S.CategoryMap>
          <S.ProductsContainer>
            <Card products={sections[category].products} />
          </S.ProductsContainer>
        </>
      ))}
    </>
  );
}
