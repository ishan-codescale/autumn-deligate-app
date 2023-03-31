import React from "react";
import {
  StyledNavbar,
  LeftContainer,
  RightContainer,
  InnerStyledNavbar,
  ExtendStyledNavbar,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
} from "../styled-components/Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNavbar>
      <InnerStyledNavbar>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/login">Login</NavbarLink>
            <NavbarLink to="/register">Register</NavbarLink>
            <OpenLinksButton>&#8801;</OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <h1>Logo</h1>
        </RightContainer>
      </InnerStyledNavbar>
      <ExtendStyledNavbar></ExtendStyledNavbar>
    </StyledNavbar>
  );
};

export default Navbar;
