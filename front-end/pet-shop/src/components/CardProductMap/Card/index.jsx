import React from "react";

import { ImageDefault, CartIconPink } from "../../../assets";
import * as S from "./styles";

export default function Card({ products, handleShowDetails }) {
  return (
    <S.CardContainerFlex>
      {products.map(({ id, thumbnail, product_name, price }) => (
        <S.CardContainerProduct id={id} onClick={handleShowDetails} key={id}>
          {/* <span>{promotion || ""}</span> */}
          <S.CardImageProdyct id={id} src={thumbnail || ImageDefault} />
          <S.CardProdyctName>{product_name}</S.CardProdyctName>
          <S.CardSubContainer>
            <S.CardPrice>R$ {price.toFixed(2)}</S.CardPrice>
            <S.CardBtnAdd>
              <img id={id} src={CartIconPink} />
            </S.CardBtnAdd>
          </S.CardSubContainer>
        </S.CardContainerProduct>
      ))}
    </S.CardContainerFlex>
  );
}
