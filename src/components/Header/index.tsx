import { useCallback, useState } from "react";
import MediaQuery from "react-responsive";
import { Link, useLocation } from "react-router-dom";

import SVG from "@/components/SVG";
import ROUTES from "@/constants/routes";
import ScreenSizes from "@/constants/screenSizes";
import useClickOutside from "@/hooks/useClickOutside";

import { Menu, Navbar, NavbarLeft, NavbarRight, Title } from "./styled";

export default function Header(): JSX.Element {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

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
          <MediaQuery minWidth={ScreenSizes.Desktop}>
            {(matches) =>
              matches
                ? links
                : !isMenuOpen && (
                    <SVG
                      onClick={handleClick}
                      width="48px"
                      height="48px"
                      icon="hamburger"
                    />
                  )
            }
          </MediaQuery>
        </NavbarRight>
      </Navbar>
      <MediaQuery maxWidth={ScreenSizes.Desktop}>
        {isMenuOpen && <Menu ref={menuRef}>{links}</Menu>}
      </MediaQuery>
    </>
  );
}
