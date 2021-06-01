import React, { useState } from "react";

import { CartShop, Header, SwitchQTD } from "../../components";
import { ImageDefault, CartIconWhite } from "../../common/assetsPaths";
import * as S from "./styles";

export async function getServerSideProps(context) {
  const id = context.query.id;

  return {
    props: {
      id: id,
    },
  };
}

export default function ProductDetails({ id }) {
  const [qtd, setQtd] = useState(1);
  const handleChangeQuantity = (value) => {
    setQtd(value);
  };
  const products = null;
  return (
    <>
      <Header disableDetailsScreen={false} />
      {[products?.find((product) => product.id == id)].map(
        ({
          id = null,
          thumbnail = null,
          product_name = null,
          price = null,
        }) => (
          <S.ProductDetailsContainer id={id}>
            <S.ImageProductOnDetails src={thumbnail || ImageDefault} />
            <S.TitleProductDetails>{product_name}</S.TitleProductDetails>
            <S.PriceInfo>Preço por unidade: R$ {price.toFixed(2)}</S.PriceInfo>
            <S.PriceInfo>
              Preço total: R$ {(price * qtd).toFixed(2)}
            </S.PriceInfo>
            <SwitchQTD
              handleChange={handleChangeQuantity}
              value={qtd}
              max={30} // Esta informação viria do stock caso houvesse
            />
            <S.ButtonAddToCart
              role="AddToCart"
              className="button-add-cart"
              type="button"
              //   onClick={handleUpDateCartStates}
            >
              Adicionar ao Carrinho
            </S.ButtonAddToCart>
          </S.ProductDetailsContainer>
        )
      )}
      <CartShop
        numberOfProductsOnCart={0}
        valueOfProductsOnCart={0}
        styles={S}
        icon={CartIconWhite}
      />
    </>
  );
}
