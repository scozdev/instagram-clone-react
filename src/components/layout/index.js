import React from "react";

import Header from "../header";
import { Container } from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <section>{children}</section>
      </Container>
    </>
  );
}
