import React, { useState } from "react";
import Logo from "../assets/logo.png";
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

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <StyledNavbar extendNavbar={extendNavbar}>
      <InnerStyledNavbar>
        <LeftContainer>
          <img src={Logo} alt="" />
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavbarLink className="nav-link" to="/">
              Home
            </NavbarLink>
            <NavbarLink className="nav-link" to="/about">
              About
            </NavbarLink>
            <NavbarLink className="nav-link" to="/login">
              Login
            </NavbarLink>
            <NavbarLink className="nav-link" to="/register">
              Register
            </NavbarLink>
            <OpenLinksButton onClick={() => setExtendNavbar((curr) => !curr)}>
              {extendNavbar ? <>&#10005;</> : <>&#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
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
