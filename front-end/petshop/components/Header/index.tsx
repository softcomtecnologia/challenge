import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import * as S from "./styles";

import {
  Logo,
  Clock,
  MotoIcon,
  CartIcon,
  BackBtn,
} from "../../common/assetsPaths";
import CartShop from "../CartShop";

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

export default function Header({ disableDetailsScreen }) {
  const { productsOnCart, priceOfProductsOnCart } = useSelector(
    (state: I_Initial_State) => state
  );
  const router = useRouter();
  function handleBack() {
    router.push("/");
  }
  return (
    <>
      {disableDetailsScreen ? (
        <S.Header>
          <S.HeaderImage alt="Imagem Logo da Empresa" src={Logo} />
          <S.HeaderContainer>
            <S.HeaderTitle>Pet Friends Acessories</S.HeaderTitle>
            <S.HeaderClockIcon src={Clock} />
            <S.HeaderStatus>ABERTO AGORA</S.HeaderStatus>
            <S.HeaderStreet>
              Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa
              - PB
            </S.HeaderStreet>
            <S.HeaderDeliveryInfo>
              <S.HeaderService>
                <S.HeaderMotoIcon alt="" src={MotoIcon} />
                Delivery:{" "}
              </S.HeaderService>
              <S.HeaderServiceTime>35m - 1h:40m</S.HeaderServiceTime>
            </S.HeaderDeliveryInfo>
            <span>
              <S.HeaderService>Entrega: </S.HeaderService>
              <S.HeaderServicePrice>À partir de R$ 3,00</S.HeaderServicePrice>
            </span>
          </S.HeaderContainer>
          <CartShop
            numberOfProductsOnCart={productsOnCart.length}
            valueOfProductsOnCart={priceOfProductsOnCart}
            styles={S}
            icon={CartIcon}
          />
        </S.Header>
      ) : (
        <S.HeaderDetails>
          <S.BackBtn onClick={handleBack}>
            <img src={BackBtn} />
          </S.BackBtn>
        </S.HeaderDetails>
      )}
    </>
  );
}
