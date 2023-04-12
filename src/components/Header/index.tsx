import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SVG from "@components/SVG";
import ROUTES from "@constants/routes";

import { Menu, Navbar, NavbarLeft, NavbarRight, Title } from "./styled";

export default function Header(): JSX.Element {
  const { pathname } = useLocation();
  const [screenSize, setScreenSize] = useState<"desktop" | "mobile">("desktop");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuTriggerRef = useRef<HTMLElement>(null);

  const handleResize = useCallback(() => {
    setScreenSize(window.innerWidth > 700 ? "desktop" : "mobile");
  }, []);

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
    window.addEventListener("resize", handleResize);
    handleResize();
    document.addEventListener("mousedown", clickOutsideHandler);
    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
      window.removeEventListener("resize", handleResize);
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
          {screenSize === "desktop" && links}
          {screenSize === "mobile" && (
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
      {screenSize === "mobile" && isMenuOpen && (
        <Menu ref={menuRef}>{links}</Menu>
      )}
    </>
  );
}
