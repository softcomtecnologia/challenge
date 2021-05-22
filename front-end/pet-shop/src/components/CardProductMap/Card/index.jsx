import React from "react";

import { ImageDefault, CartIconPink } from "../../../assets";
import * as S from "./styles";

export default function Card({ products, handleAddToCart, handleShowDetails }) {
  return (
    <S.CardContainerFlex>
      {products.map(({ id, thumbnail, product_name, price, promotion }) => (
        <S.CardContainerProduct id={id} onClick={handleShowDetails} key={id}>
          {/* <span>{promotion || ""}</span> */}
          <S.CardImageProdyct src={thumbnail || ImageDefault} />
          <S.CardProdyctName>{product_name}</S.CardProdyctName>
          <S.CardSubContainer>
            <S.CardPrice>R$ {price.toFixed(2)}</S.CardPrice>
            <S.CardBtnAdd>
              <img id={id} onClick={handleAddToCart} src={CartIconPink} />
            </S.CardBtnAdd>
          </S.CardSubContainer>
        </S.CardContainerProduct>
      ))}
    </S.CardContainerFlex>
  );
}
