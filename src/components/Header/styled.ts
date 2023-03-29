import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  background-color: ${({ theme }) => theme.header};
  height: 100px;

  a {
    font-size: 1em;
    margin-left: 32px;
    color: ${({ theme }) => theme.background};
    text-decoration: none;
    &:visited {
      color: ${({ theme }) => theme.background};
      text-decoration: overline;
    }
  }
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
  font-size: 1em;
  font-weight: normal;
  margin: 0;
  color: ${({ theme }) => theme.background};
`;
