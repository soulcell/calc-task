import React from "react";
import { Link } from "react-router-dom";
import withRouter, { WithRouterProps } from "@components/HOC/withRouter";
import SVG from "@components/SVG";
import ROUTES from "@constants/routes";

import { Menu, Navbar, NavbarLeft, NavbarRight, Title } from "./styled";

class HeaderCC extends React.PureComponent<{
  router: WithRouterProps;
}> {
  state: Readonly<{
    screenSize: "desktop" | "mobile";
    isMenuOpen: boolean;
  }> = {
    screenSize: "desktop",
    isMenuOpen: false,
  };

  menuRef = React.createRef<HTMLDivElement>();

  menuTriggerRef = React.createRef<HTMLElement>();

  componentDidMount(): void {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    document.addEventListener("mousedown", this.clickOutsideHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousedown", this.clickOutsideHandler);
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      screenSize: window.innerWidth > 700 ? "desktop" : "mobile",
    });
  };

  clickOutsideHandler = (e: Event) => {
    if (
      !this.menuRef.current?.contains(e.target as Node) &&
      !this.menuTriggerRef.current?.contains(e.target as Node)
    ) {
      this.setState({ isMenuOpen: false });
    }
  };

  handleClick = () => {
    this.setState({ isMenuOpen: true });
  };

  render() {
    const { router } = this.props;
    const { pathname } = router.location;
    const { isMenuOpen, screenSize } = this.state;

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
              <span ref={this.menuTriggerRef}>
                <SVG
                  onClick={this.handleClick}
                  width="64px"
                  height="64px"
                  icon="hamburger"
                />
              </span>
            )}
          </NavbarRight>
        </Navbar>
        {screenSize === "mobile" && isMenuOpen && (
          <Menu ref={this.menuRef}>{links}</Menu>
        )}
      </>
    );
  }
}

export default withRouter(HeaderCC);
