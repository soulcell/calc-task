import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SVG from "@components/SVG";
import ROUTES from "@constants/routes";
import ScreenSizes from "@constants/screenSizes";
import ScreenSizeContext from "@contexts/ScreenSize";

import { Menu, Navbar, NavbarLeft, NavbarRight, Title } from "./styled";

export default function Header(): JSX.Element {
  const { pathname } = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLElement>(null);
  const { x: screenWidth } = useContext(ScreenSizeContext);

  function clickOutsideHandler(e: Event) {
    if (
      !menuRef.current?.contains(e.target as Node) &&
      !menuTriggerRef.current?.contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  }

  const handleClick = () => {
    setMenuOpen(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  }, []);

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
          {screenWidth >= ScreenSizes.Desktop ? (
            links
          ) : (
            <span ref={menuTriggerRef}>
              <SVG
                onClick={handleClick}
                width="64px"
                height="64px"
                icon="hamburger"
              />
            </span>
          )}
        </NavbarRight>
      </Navbar>
      {screenWidth < ScreenSizes.Desktop && isMenuOpen && (
        <Menu ref={menuRef}>{links}</Menu>
      )}
    </>
  );
}
