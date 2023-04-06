import React from "react";
import { Link } from "react-router-dom";

import withRouter, { WithRouterProps } from "../HOC/withRouter";

import { H1, Navbar, NavbarLeft, NavbarRight } from "./styled";

class HeaderCC extends React.PureComponent<{
  router: WithRouterProps;
}> {
  render() {
    const { router } = this.props;
    const { pathname } = router.location;

    return (
      <Navbar>
        <NavbarLeft>
          <H1>Calculator App</H1>
        </NavbarLeft>
        <NavbarRight>
          {pathname === "/" || <Link to="/">Home (FC)</Link>}
          {pathname === "/cc" || <Link to="/cc">Home (CC)</Link>}
          {pathname === "/settings" || <Link to="/settings">Settings</Link>}
        </NavbarRight>
      </Navbar>
    );
  }
}

export default withRouter(HeaderCC);
