import { Link, useLocation } from "react-router-dom";

import ROUTES from "../../constants/routes";

import { H1, Navbar, NavbarLeft, NavbarRight } from "./styled";

export default function Header(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Navbar>
      <NavbarLeft>
        <H1>Calculator App</H1>
      </NavbarLeft>
      <NavbarRight>
        {ROUTES.filter(({ path }) => path !== pathname).map(
          ({ path, name }) => (
            <Link key={path} to={path}>
              {name}
            </Link>
          )
        )}
      </NavbarRight>
    </Navbar>
  );
}
