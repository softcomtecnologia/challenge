import React, { useState } from "react";
import Link from "next/link";

import { Container, CategoryNav } from "./styles";

const NavBar: React.FC = () => {

  const handleClick = (e) =>{
    document.getElementsByClassName("active")[0].className = "";
    e.target.className = "active";
  }

  return (
    <>
      <Container>
        <CategoryNav>
          <li>
            <Link href="/products/sugestao">
              <a onClick={handleClick.bind(this)} className="active" >Sugestão do vendedor</a>
            </Link>
          </li>
          <li>
            <Link href="/products/brinquedos">
              <a onClick={handleClick.bind(this)} >Brinquedos</a>
            </Link>
          </li>
          <li>
            <Link href="/products/cama-casinhas">
              <a onClick={handleClick.bind(this)}>Camas e Casinhas</a>
            </Link>
          </li>
          <li>
            <Link href="/products/coleiras">
              <a onClick={handleClick.bind(this)}>Coleiras</a>
            </Link>
          </li>
          <li>
            <Link href="/products/ossos-petiscos">
              <a onClick={handleClick.bind(this)} >Ossos e Petiscos</a>
            </Link>
          </li>
        </CategoryNav>
      </Container>
    </>
  );
};

export default NavBar;
