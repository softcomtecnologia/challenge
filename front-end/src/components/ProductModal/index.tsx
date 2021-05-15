import React, { useState, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import {
  Container,
  ImageContainer,
  CardTitle,
  CardPrice,
  CardAddCart,
  ModalContent,
} from "./styles";

interface Props {
  idModal?: string;
  readonly onClose?: (arg0: boolean) => void;
  productid: string;
  productImage: string;
  productName: string;
  price: number;
  offer: number;
}

const ProductModal: React.FC<Props> = ({
  idModal = "modal",
  onClose = () => {},
  productid,
  productImage,
  productName,
  price,
  offer,
}) => {
  const { handleAddItemCart } = useContext(CartContext);
  const [qtdItens, setQtdItens] = useState(1);

  const handleOutsideClick = (event) => {
    if (event.target.id === idModal) {
      onClose(false);
    }
  };

  function handleIncrement(count) {
    setQtdItens(count + 1);
  }

  function handleDecrement(count) {
    if (count > 1) setQtdItens(count - 1);
  }

  return (
    <>
      <Container id={idModal} onClick={handleOutsideClick}>
        <div className="modal">
          <button className="close" onClick={onClose} />
          <ModalContent>
            <ImageContainer>
              {offer != 0 ? <span>{offer}% OFF</span> : null}
              <img src={productImage} alt="Imagem do Produto" />
            </ImageContainer>

            <CardAddCart>
              <CardTitle>{productName}</CardTitle>

              <CardPrice>
                <div>R$ {price.toFixed(2)}</div>
              </CardPrice>
              <div className="qtdProduct">
                <button onClick={() => handleIncrement(qtdItens)}>+</button>
                <button onClick={() => handleDecrement(qtdItens)}>-</button>
                <span>Quantidade: {qtdItens}</span>
              </div>

              <div className="buttonAddCart">
                <button
                  className="addToCart"
                  onClick={() => handleAddItemCart(productid, price, qtdItens)}
                >
                  ADICIONAR AO CARRINHO
                </button>
              </div>
            </CardAddCart>
          </ModalContent>
        </div>
      </Container>
    </>
  );
};

export default ProductModal;
