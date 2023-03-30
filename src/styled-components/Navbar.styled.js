import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  height: 80px;
  background-color: #000;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  align-items: flex-end;
  padding-right: 50px;
`;

export const InnerStyledNavbar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const ExtendStyledNavbar = styled.div``;
