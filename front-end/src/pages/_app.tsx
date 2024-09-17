import React from "react";
import Head from "next/head";
import { CartProvider } from "../contexts/CartContext";
import { ProfileProvider } from "../contexts/ProfileContext";

import { Container, Wrapper } from "../styles/App";
import GlobalStyles from "../styles/GlobalStyles";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>Pet Friends</title>
      </Head>
      <ProfileProvider>
        <CartProvider>
          <Container>
            <Wrapper>
              <Header />

              <NavBar />
            </Wrapper>
          </Container>

          <Component {...pageProps} />
        </CartProvider>
      </ProfileProvider>
    </>
  );
}

export default MyApp;
