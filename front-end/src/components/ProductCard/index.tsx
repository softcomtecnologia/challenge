import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import ProductModal from "../ProductModal";

import {
  Container,
  ImageContainer,
  CardTitle,
  CardPrice,
  CardAddCart,
} from "./styles";

function ProductCard({ productid, productImage, productName, price, offer }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { handleAddItemCart } = useContext(CartContext);
  const [qtdItens, setQtdItens] = useState(1);

  function handleIncrement(count) {
    setQtdItens(count + 1);
  }

  function handleDecrement(count) {
    if(count > 1)
    setQtdItens(count - 1);
  }

  return (
    <>
      <Container onClick={() => setIsModalVisible(true)}>
        {/* {isModalVisible ? <ProductModal/> : null} */}
        <ImageContainer>
          {offer != 0 ? <span>{offer}% OFF</span> : null}
          <img src={productImage} alt="Imagem do Produto" />
        </ImageContainer>
        <CardTitle>{productName}</CardTitle>
        
        <CardPrice>
          <div>
            R$ {price.toFixed(2)}
          </div>
        </CardPrice>

        <CardAddCart>
          <div className="qtdProduct">
            <button onClick={() => handleIncrement(qtdItens)}>+</button>
            <button onClick={() => handleDecrement(qtdItens)}>-</button>
            <span>Quantidade: {qtdItens}</span>
          </div>

          <button className="addToCart" onClick={() => handleAddItemCart(productid, price, qtdItens)}>
              ADICIONAR AO CARRINHO
            </button>
        </CardAddCart>
      </Container>
    </>
  );
}

export default ProductCard;
