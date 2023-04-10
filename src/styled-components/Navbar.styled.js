import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavbar = styled.nav`
  height: ${(props) => (props.extendNavbar ? "50%" : "80px")};
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 50px;

  h1 {
    color: white;
    margin: auto 20px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

export const InnerStyledNavbar = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  margin-right: 20px;
`;

export const NavbarLink = styled(NavLink)`
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

export const NavbarLinkExtend = styled(NavLink)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  transition: 0.2s ease-out;

  &:hover {
    color: orange;
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
    display: Block;
  }
`;

export const ExtendStyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: block;
  }
`;
