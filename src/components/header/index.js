import React, { useState } from "react";
import { Link, useLocation as locations } from "react-router-dom";

import {
  Cancel,
  Direct,
  DirectFill,
  Emoji,
  Explore,
  ExploreFill,
  Home,
  HomeFill,
  Like,
  LikeFill,
  Search,
} from "../icons";

import { Container, Wrapper, SearchForm, Nav } from "./styles";

function Index() {
  let router = locations();
  const [search, setSearch] = useState(0);
  const handleHideElement = (e) => {
    console.log(e);
    setSearch(e);
  };

  return (
    <Container>
      <Wrapper className="container">
        <Link to="/" className="logo">
          <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
        </Link>

        {/* Search */}
        <SearchForm click={search}>
          <input type="text" id="text" placeholder="Ara" />
        </SearchForm>

        <Nav>
          <Link to="/">{router.pathname == "/" ? <HomeFill /> : <Home />}</Link>

          <Link to="/direct">
            {router.pathname == "/direct" ? <DirectFill /> : <Direct />}
          </Link>
          <Link to="/explore">
            {router.pathname == "/explore" ? <ExploreFill /> : <Explore />}
          </Link>
          <Link to="/like">
            {router.pathname == "/like" ? <LikeFill /> : <Like />}
          </Link>
          <Link to="/profile">
            <Emoji />
          </Link>
        </Nav>
      </Wrapper>
    </Container>
  );
}

export default Index;
