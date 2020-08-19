import React from "react";

import { Header, Footer } from "../";

import { Main, Container } from "./styles";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
