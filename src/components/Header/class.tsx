import React from "react";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";

import { WithRouterProps } from "@/components/HOC/types";
import withRouter from "@/components/HOC/withRouter";
import SVG from "@/components/SVG";
import ROUTES from "@/constants/routes";
import ScreenSizes from "@/constants/screenSizes";

import { Menu, Navbar, NavbarLeft, NavbarRight, Title } from "./styled";

class HeaderCC extends React.PureComponent<{
  router: WithRouterProps;
}> {
  state: Readonly<{
    isMenuOpen: boolean;
  }> = {
    isMenuOpen: false,
  };

  menuRef = React.createRef<HTMLDivElement>();

  componentDidMount(): void {
    document.addEventListener("mousedown", this.clickOutsideHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousedown", this.clickOutsideHandler);
  }

  clickOutsideHandler = (e: Event) => {
    if (!this.menuRef.current?.contains(e.target as Node)) {
      this.setState({ isMenuOpen: false });
    }
  };

  handleClick = () => {
    this.setState({ isMenuOpen: true });
  };

  render() {
    const { router } = this.props;
    const { pathname } = router.location;
    const { isMenuOpen } = this.state;

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
                        onClick={this.handleClick}
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
          {isMenuOpen && <Menu ref={this.menuRef}>{links}</Menu>}
        </MediaQuery>
      </>
    );
  }
}

export default withRouter(HeaderCC);
