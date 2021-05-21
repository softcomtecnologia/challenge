import React from "react";
import CartShop from "../CartShop";

import { Logo, MotoIcon, Clock } from "../../assets";
import * as S from "./styles";

export default function () {
  return (
    <S.Header>
      <S.HeaderImage alt="Imagem Logo da Empresa" src={Logo} />
      <S.HeaderContainer>
        <S.HeaderTitle>Pet Friends Acessories</S.HeaderTitle>
        <S.HeaderClockIcon src={Clock} />
        <S.HeaderStatus>Aberto Agora</S.HeaderStatus>
        <S.HeaderStreet>
          Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa -
          PB
        </S.HeaderStreet>
        <img alt="" src={MotoIcon} />
        <S.HeaderService>Delivery: </S.HeaderService>
        <S.HeaderServiceTime>35m - 1h:40m</S.HeaderServiceTime>
        <S.HeaderService>Entrega: </S.HeaderService>
        <S.HeaderServicePrice>À partir de R$ 3,00</S.HeaderServicePrice>
      </S.HeaderContainer>
      <CartShop numberOfProductsOnCart={0} valueOfProductsOnCart={0} />
    </S.Header>
  );
}
