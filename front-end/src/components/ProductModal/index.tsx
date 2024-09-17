import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ICartProduct } from "../../interfaces/ExportInterfaces";

import {
  Container,
  ImageContainer,
  CardTitle,
  CardPrice,
  CardAddCart,
  ModalContent,
} from "./styles";

interface Props {
  onClose?: (arg0: any) => void;
  idModal?: string;
  productid: number;
  productImage: string;
  productName: string;
  price: number;
  offer: number;
}

const ProductModal: React.FC<Props> = ({
  idModal = "modal",
  productid,
  onClose = () => {},
  productImage,
  productName,
  price,
  offer,
}) => {
  const { handleAddItemCart } = useContext(CartContext);
  const [qtdItens, setQtdItens] = useState(1);
  const [product, setProduct] = useState<ICartProduct>({} as ICartProduct);

  useEffect(()=>{
    setProduct({id: productid, price: price, qtd: qtdItens});
  }, [qtdItens]);

  const handleOutsideClick = (event) => {
    if (event.target.id === idModal) {
      onClose(false);
    }
  };

  function handleIncrement() {
    let temp = qtdItens + 1;
    setQtdItens(temp);
  }

  function handleDecrement() {
    if(qtdItens > 1){
      let temp = qtdItens -1;
      setQtdItens(temp);
    }
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
                <button onClick={() => handleIncrement()}>+</button>
                <button onClick={() => handleDecrement()}>-</button>
                <span>Quantidade: {qtdItens}</span>
              </div>

              <div className="buttonAddCart">
                <button
                  className="addToCart"
                  onClick={() => handleAddItemCart(product)}
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
