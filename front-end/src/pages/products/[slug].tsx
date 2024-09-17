import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "../../styles/App";
import { useRouter } from "next/router";

import Main from "../../components/Main";

import { IProduct } from '../../interfaces/ExportInterfaces';
import { Api } from "../../services/api";

export default function Products() {

  const route = useRouter();
  const [dataProducts, setDataProducts]  = useState<Array<IProduct>>([] as Array<IProduct>);
  const [dataProductCategory, setDataProductCategory]  = useState("Buscando...");

  useEffect(() =>{
    let query = route.query.slug as string;
    let isSearch = false;

    if(query.includes("search=")){
      query = `?q=${query.replace("search=", "")}`;
      isSearch = true;
    }else{
      query = `?sectionQuery=${query}`;
    }

    Api.get(`products/${query}`)
      .then(response => response.data)
      .then(data => {
        if(isSearch){
          setDataProductCategory("Resultado da busca");
        }else{
          setDataProductCategory(data[0].categoria);
        }
        setDataProducts(data);

        if(data.length == 0){
          setDataProductCategory("Nenhum resultado encontrado...");
        }
      });
  }, [route.query.slug]);

  return (
    <>
      <Container>
        <Wrapper>

          <Main 
            sectionName={dataProductCategory} 
            sectionQuery={route.query.slug as string}
            dataProducts={dataProducts}
          />

        </Wrapper>
      </Container>
    </>
  );
}
