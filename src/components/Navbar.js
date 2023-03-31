import React, { useState } from "react";
import {
  StyledNavbar,
  LeftContainer,
  RightContainer,
  InnerStyledNavbar,
  ExtendStyledNavbar,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtend,
} from "../styled-components/Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <StyledNavbar extendNavbar={extendNavbar}>
      <InnerStyledNavbar>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/login">Login</NavbarLink>
            <NavbarLink to="/register">Register</NavbarLink>
            <OpenLinksButton onClick={() => setExtendNavbar((curr) => !curr)}>
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <h1>Logo</h1>
        </RightContainer>
      </InnerStyledNavbar>
      {extendNavbar && (
        <ExtendStyledNavbar>
          <NavbarLinkExtend to="/">Home</NavbarLinkExtend>
          <NavbarLinkExtend to="/about">About</NavbarLinkExtend>
          <NavbarLinkExtend to="/login">Login</NavbarLinkExtend>
          <NavbarLinkExtend to="/register">Register</NavbarLinkExtend>
        </ExtendStyledNavbar>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
