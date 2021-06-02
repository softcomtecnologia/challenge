import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { CartShop, Header, SwitchQTD } from "../../components";
import { ImageDefault, CartIconWhite } from "../../common/assetsPaths";

import {
  updatePriceOfProductsOnCart,
  updateProductsOnCart,
} from "../../actions";

import * as S from "./styles";

interface Context {
  query: {
    id: string;
  };
}

interface Product {
  id: number;
  thumbnail: string;
  product_name: string;
  price: number;
}

interface I_Initial_State {
  productsOnCart: any[];
  priceOfProductsOnCart: number;
  query: string;
  products: {
    id: number;
    thumbnail: string;
    product_name: string;
    price: number;
    promotion: number;
    description: string[];
  }[];
}

export async function getServerSideProps(context: Context) {
  const id = context.query.id;

  return {
    props: {
      id: id,
    },
  };
}

export default function ProductDetails({ id }) {
  const { products, productsOnCart, priceOfProductsOnCart } = useSelector(
    (state: I_Initial_State) => state
  );
  const [qtd, setQtd] = useState(1);
  const dispatch = useDispatch();

  const handleChangeQuantity = (value: number) => {
    setQtd(value);
  };

  function handleUpDateCartStates() {
    let _priceCount = 0;
    const newProductToCart = products.find((product) => product.id == id);
    for (let i = 0; i < qtd; i += 1) {
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
      <Header disableDetailsScreen={false} />
      {[products?.find((product: Product) => product.id == id)].map(
        ({
          id = null,
          thumbnail = null,
          product_name = null,
          price = null,
        }) => (
          <S.ProductDetailsContainer id={id.toString()}>
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
              onClick={handleUpDateCartStates}
            >
              Adicionar ao Carrinho
            </S.ButtonAddToCart>
          </S.ProductDetailsContainer>
        )
      )}
      <CartShop
        numberOfProductsOnCart={productsOnCart.length}
        valueOfProductsOnCart={priceOfProductsOnCart}
        styles={S}
        icon={CartIconWhite}
      />
    </>
  );
}
