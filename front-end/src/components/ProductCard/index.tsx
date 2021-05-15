import React, { useState, useContext } from "react";
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


  function setVisibiliti(state: boolean){
    window.scrollTo(0, 0);
    setIsModalVisible(state);
  }

  return (
    <>
      <Container>
        {isModalVisible ? (

          <ProductModal 
            onClose={() => {setVisibiliti(false)}}
            productid={productid}
            productImage={productImage}
            productName={productName}
            price={price}
            offer={offer}
          /> 
        ) : null}

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
          <button className="addToCart" onClick={() => setVisibiliti(true)}>
              VER DETALHES
            </button>
        </CardAddCart>
      </Container>
    </>
  );
}

export default ProductCard;
