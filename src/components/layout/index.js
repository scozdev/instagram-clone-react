import React from "react";

import Header from "../header";
import Footer from "../footer";

import { Main, Container } from "./styles";

function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
