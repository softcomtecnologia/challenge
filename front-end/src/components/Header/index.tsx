import React, { useContext, useState } from "react";
import Link from "next/link";

import { 
  Container, 
  Profile, 
  ProfileInfo, 
  DeliveryInfo, 
  Cart, 
  CartIcon, 
  MotoIcon,
  ClockIcon
} from "./styles";

import { IProfile } from '../../interfaces/ExportInterfaces';
import { CartContext } from "../../contexts/CartContext";
import { ProfileContext } from "../../contexts/ProfileContext";


const Header: React.FC<IDataProfile> = () => {

  const { cart } = useContext(CartContext);
  const { dataProfile } = useContext(ProfileContext);

  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.qtd, 0);
  const totalProducts = cart.reduce((acc, product) => acc + product.qtd, 0);

  return (
    <Container>
      <Profile>
        <Link href="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <ProfileInfo>
          <div>
            <h2>{dataProfile.name}</h2>
            <span className={dataProfile.status === "ABERTO AGORA"
                ? 'open' : 'close'
              } >
              <ClockIcon/>
              {dataProfile.status}
            </span>
          </div>
          <strong className="edress">{dataProfile.rua}, {dataProfile.bairro} <span>|</span> {dataProfile.cep} <span>|</span> João Pessoa - PB</strong>

          <DeliveryInfo>
              <div>
              <MotoIcon />
                <strong>Delivery:</strong> <span>{dataProfile.delivery}</span>
              </div>
              <div className="value">
                <strong>Entrega:</strong> <span>{dataProfile.entrega}</span>
              </div>
          </DeliveryInfo>

        </ProfileInfo>
      </Profile>
      <Cart>
      <CartIcon/>
        <div>
          <div className="qtdProducts">
            <strong>{totalProducts} Produtos no carrinho</strong>
          </div>
          <div className="price">
            <strong>R$ {totalPrice.toFixed(2)}</strong>
          </div>
        </div>

      </Cart>
    </Container>
  );
};

export default Header;
