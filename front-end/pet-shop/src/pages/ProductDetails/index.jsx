import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ImageDefault } from "../../assets";

import { SwitchQTD } from "../../components";

import * as S from "./styles";

export default function ProductDetails() {
  const { products } = useSelector((state) => state);
  const [qtd, setQtd] = useState(1);
  const { id } = useParams();

  const handleChangeQuantity = (value) => {
    setQtd(value);
  };

  return (
    <>
      {[products.find((product) => product.id == id)].map(
        ({ id, thumbnail, product_name, price }) => (
          <S.ProductDetailsContainer id={id}>
            <img src={thumbnail || ImageDefault} />
            <h3>{product_name}</h3>
            <p>Preço por unidade: {price.toFixed(2)}</p>
            <SwitchQTD
              handleChange={handleChangeQuantity}
              value={qtd}
              max={30} // Esta informação viria do stock caso houvesse
            />
          </S.ProductDetailsContainer>
        )
      )}
    </>
  );
}
