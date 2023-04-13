import React from "react";
import { Link } from "react-router-dom";
import withRouter, { WithRouterProps } from "@components/HOC/withRouter";
import SVG from "@components/SVG";
import ROUTES from "@constants/routes";
import ScreenSizes from "@constants/screenSizes";
import ScreenSizeContext from "@contexts/ScreenSize";

import { Menu, Navbar, NavbarLeft, NavbarRight, Title } from "./styled";

class HeaderCC extends React.PureComponent<{
  router: WithRouterProps;
}> {
  static contextType = ScreenSizeContext;

  declare context: React.ContextType<typeof ScreenSizeContext>;

  state: Readonly<{
    isMenuOpen: boolean;
  }> = {
    isMenuOpen: false,
  };

  menuRef = React.createRef<HTMLDivElement>();

  menuTriggerRef = React.createRef<HTMLElement>();

  componentDidMount(): void {
    document.addEventListener("mousedown", this.clickOutsideHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener("mousedown", this.clickOutsideHandler);
  }

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
    const { isMenuOpen } = this.state;
    const { x: screenWidth } = this.context;

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
        {screenWidth < ScreenSizes.Desktop && isMenuOpen && (
          <Menu ref={this.menuRef}>{links}</Menu>
        )}
      </>
    );
  }
}

export default withRouter(HeaderCC);
