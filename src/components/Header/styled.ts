import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  background-color: ${(props) => props.theme.header};
  height: 100px;
`;
export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1;
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const H1 = styled.h1`
  font-size: 32px;
  font-weight: normal;
  margin: 0;
  color: ${(props) => props.theme.background};
`;

export const Anchor = styled.a`
  font-size: 32px;
  margin-left: 32px;
  color: ${(props) => props.theme.background};
  text-decoration: none;
  &:visited {
    color: ${(props) => props.theme.background};
    text-decoration: overline;
  }
`;
