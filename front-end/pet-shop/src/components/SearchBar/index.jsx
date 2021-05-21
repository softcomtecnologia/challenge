import React from "react";

import { SearchIcon } from "../../assets";
import * as S from "./styles";

export default function SearchBar() {
  return (
    <S.SearchBarContainer>
      <S.SearchBarInput placeholder="O que você procura?" />
      <S.SearchBarBtn>
        <img src={SearchIcon} />
      </S.SearchBarBtn>
    </S.SearchBarContainer>
  );
}
