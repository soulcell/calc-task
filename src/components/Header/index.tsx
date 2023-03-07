import { useLocation } from "react-router-dom";
import { Anchor, H1, Navbar, NavbarLeft, NavbarRight } from "./styled";

export default function Header(): JSX.Element {
  const location = useLocation();

  return (
    <Navbar>
      <NavbarLeft>
        <H1>Calculator App</H1>
      </NavbarLeft>
      <NavbarRight>
        {location.pathname === "/cc" ? (
          <Anchor href="/">Home (FC)</Anchor>
        ) : (
          <Anchor href="/cc">Home (CC)</Anchor>
        )}
        <Anchor href="/settings">Settings</Anchor>
      </NavbarRight>
    </Navbar>
  );
}
