import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard";

import { Container, ProductsList } from "./styles";

import { IProduct } from '../../interfaces/ExportInterfaces';

interface Props{
  sectionName?: string;
  dataProducts: Array<IProduct>;
  sectionQuery: string;
}

const ProductsSection: React.FC<Props> = ({sectionName, dataProducts , sectionQuery }) =>  {

  return (
    <>
      <Container>
        <h2 className="sectionName">{sectionName}</h2>        

        <ProductsList>

          {dataProducts.map(produto => (
            <ProductCard
              key={produto.id}
              productid={produto.id}
              productImage={produto.imageUrl}
              productName={produto.nome}
              price={produto.valor}
              offer={produto.oferta}
            />
          ))}
        </ProductsList>
      </Container>
    </>
  );
}

export default ProductsSection;
