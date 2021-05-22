import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ImageDefault } from "../../assets";

import { Header, SwitchQTD } from "../../components";

import {
  updatePriceOfProductsOnCart,
  updateProductsOnCart,
} from "../../actions";

import * as S from "./styles";

export default function ProductDetails() {
  const { products, productsOnCart } = useSelector((state) => state);
  const [qtd, setQtd] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleChangeQuantity = (value) => {
    setQtd(value);
  };

  function handleUpDateCartStates() {
    let _priceCount = 0;
    const newProductToCart = products.find((product) => product.id == id);
    for (let i = 0; i <= qtd; i += 1) {
      productsOnCart.push(newProductToCart);
    }
    if (productsOnCart.length > 0) {
      productsOnCart.forEach(({ price }) => {
        _priceCount += price;
      });
      dispatch(updatePriceOfProductsOnCart(_priceCount));
    }
    dispatch(updateProductsOnCart(productsOnCart));
  }

  return (
    <>
      <Header desableDetailsScreen={false} />
      {[products.find((product) => product.id == id)].map(
        ({ id, thumbnail, product_name, price }) => (
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
              className="button-add-cart"
              type="button"
              onClick={handleUpDateCartStates}
            >
              Adicionar ao Carrinho
            </S.ButtonAddToCart>
          </S.ProductDetailsContainer>
        )
      )}
    </>
  );
}
