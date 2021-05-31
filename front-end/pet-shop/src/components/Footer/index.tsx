import React from "react";

import { SoftcomIcon } from "../../assets";

import * as S from "./styles";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterImageSoftcom src={SoftcomIcon} />
      <S.FooterLink>Políticas de Privacidade</S.FooterLink>
      <S.FooterLink>Termos de Uso</S.FooterLink>
      <div>
        <S.FooterLink>Nossas redes sociais</S.FooterLink>
        {/* <img className="socialMedias" src={facebookIcon} alt="socialMedias" />
        <img className="socialMedias" src={instagramIcon} alt="socialMedias" />
        <img className="socialMedias" src={twitterIcon} alt="socialMedias" />
        <img className="socialMedias" src={youtubeIcon} alt="socialMedias" /> */}
      </div>
    </S.FooterContainer>
  );
}
