import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "../../constants/routes";
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
          {ROUTES.filter(({ path }) => path !== pathname).map(
            ({ path, name }) => (
              <Link to={path}>{name}</Link>
            )
          )}
        </NavbarRight>
      </Navbar>
    );
  }
}

export default withRouter(HeaderCC);
