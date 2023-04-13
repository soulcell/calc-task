import { useCallback, useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SVG from "@components/SVG";
import ROUTES from "@constants/routes";
import ScreenSizes from "@constants/screenSizes";
import ScreenSizeContext from "@contexts/ScreenSize";
import useClickOutside from "@hooks/useClickOutside";

import { Menu, Navbar, NavbarLeft, NavbarRight, Title } from "./styled";

export default function Header(): JSX.Element {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { x: screenWidth } = useContext(ScreenSizeContext);

  const handleClickOutside = () => setMenuOpen(false);
  const menuRef = useClickOutside<HTMLDivElement>(handleClickOutside);

  const handleClick = useCallback(() => setMenuOpen(true), []);

  const links = ROUTES.filter(({ path }) => path !== pathname).map(
    ({ path, name }) => (
      <Link key={path} to={path}>
        {name}
      </Link>
    )
  );

  return (
    <>
      <Navbar>
        <NavbarLeft>
          <Title>Calculator App</Title>
        </NavbarLeft>
        <NavbarRight>
          {screenWidth >= ScreenSizes.Desktop
            ? links
            : !isMenuOpen && (
                <SVG
                  onClick={handleClick}
                  width="48px"
                  height="48px"
                  icon="hamburger"
                />
              )}
        </NavbarRight>
      </Navbar>
      {screenWidth < ScreenSizes.Desktop && isMenuOpen && (
        <Menu ref={menuRef}>{links}</Menu>
      )}
    </>
  );
}
