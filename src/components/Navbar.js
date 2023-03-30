import React from "react";
import {
  StyledNavbar,
  LeftContainer,
  RightContainer,
  InnerStyledNavbar,
  ExtendStyledNavbar,
  NavbarLinkContainer,
} from "../styled-components/Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <StyledNavbar>
      <InnerStyledNavbar>
        <LeftContainer>
          <NavbarLinkContainer>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer></RightContainer>
      </InnerStyledNavbar>
      <ExtendStyledNavbar></ExtendStyledNavbar>
    </StyledNavbar>
  );
};

export default Navbar;
