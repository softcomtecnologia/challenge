import React, {useEffect, useState} from "react";

import { Container, Wrapper } from "../styles/App";
import { IProduct } from '../interfaces/ExportInterfaces';

import Main from "../components/Main";
import { Api } from "../services/api";

export default function Home(props) {

  const [categoria, setCategoria] = useState("Sugestão do vendedor");
  const [sectionQuery, setSectionQuery] = useState("sugestao");
  const [dataProducts, setDataProducts]  = useState<Array<IProduct>>([] as Array<IProduct>);

  useEffect(() =>{
    setDataProducts(props.resp.products);
  }, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Main
            sectionName={categoria}
            sectionQuery={sectionQuery}
            dataProducts={dataProducts}
          />
        </Wrapper>
      </Container>
    </>
  );
}

export async function getServerSideProps(){

  const responseProfile = await Api.get(`profile-info`);
  const responseProducts = await Api.get(`products/?sectionQuery=sugestao`);

  const dataProfile = await responseProfile.data;
  const dataProducts = await responseProducts.data;


  const response = {
    profile: dataProfile,
    products: dataProducts
  }

  return{
    props:{
      resp: response,
    }
  }
}
