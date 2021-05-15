import React, { useEffect, useState } from "react";
import { CartProvider } from "../contexts/CartContext";
import { ProfileProvider } from "../contexts/ProfileContext";

import { Container, Wrapper } from "../styles/App";
import GlobalStyles from "../styles/GlobalStyles";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ProfileProvider>
        <CartProvider>
          <Container>
            <Wrapper>
              <Header/>

              <NavBar />
            </Wrapper>
          </Container>

          <Component {...pageProps} />
          <GlobalStyles />
        </CartProvider>
      </ProfileProvider>
    </>
  );
}

export default MyApp;
