import React from "react";

import * as S from "./styles";

export default function Navbar({ categories }) {
  return (
    <S.NavbarContainer>
      <S.NavbarCategories>
        {categories.map((category) => (
          <S.NavbarCategoriesItem role="category" key={category} id={category}>
            <a>{category}</a>
          </S.NavbarCategoriesItem>
        ))}
      </S.NavbarCategories>
    </S.NavbarContainer>
  );
}
