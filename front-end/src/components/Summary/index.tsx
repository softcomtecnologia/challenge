import storeImg2 from '../../assets/storeImg2.png';

import { FaMotorcycle, FaShoppingCart, FaRegClock } from 'react-icons/fa';
import { useContext } from 'react';
import { ProductContext } from '../../contexts/ProductContext';

import {
  Container,
  Opt,
  ContainerCart,
  ContainerStart,
  CardMid,
  LinhaMid,
} from './styles';


export function Summary() {
  const { productCart, productValue } = useContext(ProductContext);


  return (
    <Container>
      {/*  */}
      <img src={storeImg2} alt='Im agem da loja' />
      <CardMid>
        {/* div parte de cima */}
        <ContainerStart>
          <strong>Pet Friends Acessories</strong>
          {/* <img src={clockImg} alt='Imagem relógio' /> */}
          <FaRegClock color={'#1BBB16'} />
          <p>ABERTO AGORA</p>
        </ContainerStart>
        {/* fim da div parte de cima */}

        <p>
          Avenida Rio Grande do Sul,1520,Estados | 58030-021 | João Pessoa - PB
        </p>

        <Opt>
          <FaMotorcycle />
          <span>Delivery: </span>
          <p>35m - 1h:40m</p>
          <span>Entrega: </span>
          <p>A partir de R$ 3,00</p>
        </Opt>
      </CardMid>

      <LinhaMid />

      <ContainerCart>
        {/* <img src={carImg} alt='Carrinho de compras' /> */}
        <FaShoppingCart />
        <span>{productCart} Produtos no carrinho</span>
        <p>
        {new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(productValue * productCart)}
          </p>
      </ContainerCart>
      {/*  */}
    </Container>
  );
}
