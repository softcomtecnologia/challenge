import React from "react";
import Link from "next/link";
import ProductsSection from "../ProductsSection";

import { 
  Container, 
  SellerContainer,
  SearchWrapper,
  SearchInput,
  SearchIcon
} from "./styles";

import { IProduct } from '../../interfaces/ExportInterfaces';

interface Props{
  sectionName?: string;
  sectionQuery?: string;
  dataProducts?: Array<IProduct>;
}

const Main: React.FC<Props> = ({sectionName, sectionQuery, dataProducts}) => {

  return(
    <Container>

        <SellerContainer>

          <SearchWrapper>
            <SearchInput placeholder="O que você procura?"/>
            <Link href="/">
              <SearchIcon />
            </Link>
          </SearchWrapper>

          <ProductsSection
            sectionName={sectionName}
            dataProducts={dataProducts}
            sectionQuery={sectionQuery}
          />

        </SellerContainer>

    </Container>
  );
};

export default Main;
