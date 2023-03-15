import { Link, useLocation } from "react-router-dom";
import { H1, Navbar, NavbarLeft, NavbarRight } from "./styled";

export default function Header(): JSX.Element {
  const location = useLocation();

  return (
    <Navbar>
      <NavbarLeft>
        <H1>Calculator App</H1>
      </NavbarLeft>
      <NavbarRight>
        {location.pathname === "/cc" ? (
          <Link to={`/`}>Home (FC)</Link>
        ) : (
          <Link to={`/`}>Home (FC)</Link>
        )}
        <Link to={`/settings`}>Settings</Link>
      </NavbarRight>
    </Navbar>
  );
}
