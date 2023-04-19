import styled from "styled-components";

import ScreenSizes from "@/constants/screenSizes";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.paddings.zero}
    ${({ theme }) => theme.paddings.l};
  background-color: ${({ theme }) => theme.colors.header};
  height: ${({ theme }) => theme.headerHeight};

  a {
    font-size: ${({ theme }) => theme.fontSizes.l};
    margin-left: ${({ theme }) => theme.margins.l};
    color: ${({ theme }) => theme.colors.background};
    text-decoration: none;
    &:visited {
      color: ${({ theme }) => theme.colors.background};
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
  color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: normal;
  margin: ${({ theme }) => theme.margins.zero};
  color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${ScreenSizes.Desktop}px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const Menu = styled.div`
  background: ${({ theme }) => theme.colors.header};
  a {
    margin: ${({ theme }) => theme.margins.zero}
      ${({ theme }) => theme.margins.s};
    padding: ${({ theme }) => theme.paddings.s}
      ${({ theme }) => theme.paddings.s};
    display: block;
    color: ${({ theme }) => theme.colors.background};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    text-decoration: none;
    &:visited {
      color: ${({ theme }) => theme.colors.background};
      text-decoration: overline;
    }
  }
`;
