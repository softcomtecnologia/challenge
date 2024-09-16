import React from "react";

export default function CartShop({
  numberOfProductsOnCart = null,
  valueOfProductsOnCart = null,
  styles = null,
  icon = null,
}) {
  const S = styles;
  return (
    <S.CartContainer>
      <div>
        <S.CartShopIcon src={icon} />
        <S.CartShopQTD>
          {numberOfProductsOnCart} Produtos no Carrinho
        </S.CartShopQTD>
      </div>
      <S.CartShopValue>R$ {valueOfProductsOnCart.toFixed(2)}</S.CartShopValue>
    </S.CartContainer>
  );
}
