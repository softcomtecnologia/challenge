import React from "react";
import { useRouter } from "next/router";

import Card from "./Card";

import data from "../../mock/index.json";

import * as S from "./styles";

export default function CardProductMap({
  categories = data.categories,
  sections = data.sections,
}) {
  const router = useRouter();
  function handleShowDetails({ target }) {
    const { id } = target;
    router.push(`/productDetails/${id}`);
  }
  return (
    <>
      {categories.map((category) => (
        <>
          <S.CategoryMap>{category}</S.CategoryMap>
          <S.ProductsContainer>
            <Card
              handleShowDetails={handleShowDetails}
              products={sections[category].products}
            />
          </S.ProductsContainer>
        </>
      ))}
    </>
  );
}
