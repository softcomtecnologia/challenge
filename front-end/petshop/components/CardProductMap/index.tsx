import React from "react";
import { useRouter } from "next/router";

import Card from "./Card";

import * as S from "./styles";

export default function CardProductMap({ categories, sections }) {
  const router = useRouter();
  function handleShowDetails({ target }) {
    const { id } = target;
    router.push(`/productDetails/${id}`);
  }
  return (
    <>
      {categories.map((category: string) =>
        sections[category] ? (
          <>
            <S.CategoryMap>{category}</S.CategoryMap>
            <S.ProductsContainer>
              <Card
                handleShowDetails={handleShowDetails}
                products={sections[category].products}
              />
            </S.ProductsContainer>
          </>
        ) : null
      )}
    </>
  );
}
