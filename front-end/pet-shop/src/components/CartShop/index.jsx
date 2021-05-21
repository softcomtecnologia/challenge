import React from "react";

import { CartIcon } from "../../assets";
import * as S from "./styles";

export default function CartShop({
  numberOfProductsOnCart = null,
  valueOfProductsOnCart = null,
}) {
  return (
    <S.CartContainer>
      <div>
        <S.CartShopIcon src={CartIcon} />
        <S.CartShopQTD>
          {numberOfProductsOnCart} Produtos no Carrinho
        </S.CartShopQTD>
      </div>
      <S.CartShopValue>R$ {valueOfProductsOnCart.toFixed(2)}</S.CartShopValue>
    </S.CartContainer>
  );
}
