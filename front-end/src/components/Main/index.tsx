import React, { useEffect, useState } from "react";
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

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (document.getElementById("searchId")) {
      const temp = (document.getElementById("searchId") as HTMLInputElement).value;
      setSearch(`/products/search=${temp}`);
    }
  };

  const searchValidate = (e)=>{
    if(search.length <= 0){
      e.preventDefault();
    }
  }

  return(
    <Container>

        <SellerContainer>

          <SearchWrapper>
            <SearchInput
              onChange={handleSearch}
              id="searchId"
              placeholder="O que você procura?"
            />
            <Link
              href={{
                pathname: search,
              }}
            >
              <SearchIcon onClick={searchValidate} />
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
