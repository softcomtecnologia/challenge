import React, {useEffect, useState} from "react";

import { Container, Wrapper } from "../styles/App";
import { IProduct } from '../interfaces/ExportInterfaces';

import Main from "../components/Main";

export default function Home() {

  const [categoria, setCategoria] = useState("Sugestão do vendedor");
  const [sectionQuery, setSectionQuery] = useState("sugestao");
  const [dataProducts, setDataProducts]  = useState<Array<IProduct>>([] as Array<IProduct>);

  useEffect(() =>{
    fetch(`http://localhost:3333/products/?sectionQuery=${sectionQuery}`)
      .then(response => response.json())
      .then(data => {
        setDataProducts(data);
      });
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
