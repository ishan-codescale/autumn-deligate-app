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
  justify-content: center;
  padding-right: 50px;

  h1 {
    color: white;
  }
`;

export const InnerStyledNavbar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  transition: 0.2s ease-out;

  &:hover {
    color: orange;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ExtendStyledNavbar = styled.div``;
