import React from "react";
import { Link, useLocation as locations } from "react-router-dom";

import {
  Direct,
  DirectFill,
  Emoji,
  Explore,
  ExploreFill,
  Home,
  HomeFill,
  Like,
  LikeFill,
} from "../icons";

import logo from "../../public/instagram.png";

import { Container, Wrapper, SearchForm, Nav } from "./styles";

import Avatar from "../avatar";

function Header() {
  let router = locations();

  return (
    <Container>
      <Wrapper className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="sdf" />
        </Link>

        {/* Search */}
        <SearchForm>
          <input
            type="text"
            className="fontAwesome"
            id="text"
            placeholder="&#xF002; Ara"
          />
        </SearchForm>

        <Nav>
          <Link to="/">
            {router.pathname === "/" ? <HomeFill /> : <Home />}
          </Link>

          <Link to="/direct">
            {router.pathname === "/direct" ? <DirectFill /> : <Direct />}
          </Link>
          <Link to="/explore">
            {router.pathname === "/explore" ? <ExploreFill /> : <Explore />}
          </Link>
          <Link to="/like">
            {router.pathname === "/like" ? <LikeFill /> : <Like />}
          </Link>
          <Link to="/profile">
            <Avatar size={26} />
          </Link>
        </Nav>
      </Wrapper>
    </Container>
  );
}

export default Header;
