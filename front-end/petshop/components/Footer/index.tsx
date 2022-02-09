import React from "react";

import { SoftcomIcon } from "../../common/assetsPaths";

import * as S from "./styles";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterImageSoftcom src={SoftcomIcon} />
      <S.FooterLink>Políticas de Privacidade</S.FooterLink>
      <S.FooterLink>Termos de Uso</S.FooterLink>
      <div>
        <S.FooterLink>Nossas redes sociais</S.FooterLink>
      </div>
    </S.FooterContainer>
  );
}
