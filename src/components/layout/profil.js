import React from "react";

import { Header, Footer } from "../";

import { Main, Container, ProfilContainer } from "./styles";

function Layout({ children }) {
  return <ProfilContainer>{children}</ProfilContainer>;
}

export default Layout;
