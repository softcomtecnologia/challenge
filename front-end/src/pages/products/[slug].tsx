import React, { useEffect, useState } from "react";
import { Container, Wrapper } from "../../styles/App";
import GlobalStyles from "../../styles/GlobalStyles";
import { useRouter } from "next/router";

import Main from "../../components/Main";

import { IProduct } from '../../interfaces/ExportInterfaces';
import { Api } from "../../services/api";

export default function Products() {

  const route = useRouter();
  const [dataProducts, setDataProducts]  = useState<Array<IProduct>>([] as Array<IProduct>);
  const [dataProductCategory, setDataProductCategory]  = useState<IProduct>({} as IProduct);

  useEffect(() =>{
    Api.get(`products/?sectionQuery=${route.query.slug as string}`)
      .then(response => response.data)
      .then(data => {
        setDataProducts(data);
        setDataProductCategory(data[0]);
      });
  }, [route.query.slug]);

  return (
    <>
      <Container>
        <Wrapper>

          <Main 
            sectionName={dataProductCategory.categoria} 
            sectionQuery={route.query.slug as string}
            dataProducts={dataProducts}
          />

        </Wrapper>
      </Container>
    </>
  );
}
