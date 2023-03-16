import { Link, useLocation } from "react-router-dom";
import { H1, Navbar, NavbarLeft, NavbarRight } from "./styled";

export default function Header(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Navbar>
      <NavbarLeft>
        <H1>Calculator App</H1>
      </NavbarLeft>
      <NavbarRight>
        {pathname === "/" || <Link to={`/`}>Home (FC)</Link>}
        {pathname === "/cc" || <Link to={`/cc`}>Home (CC)</Link>}
        {pathname === "/settings" || <Link to={`/settings`}>Settings</Link>}
      </NavbarRight>
    </Navbar>
  );
}
