import { useLocation, useNavigate, useParams } from "react-router-dom";

export interface WithRouterProps {
  location: ReturnType<typeof useLocation>;
  params: Record<string, string>;
  navigate: ReturnType<typeof useNavigate>;
}

function withRouter<CProps extends { router: WithRouterProps }>(
  Component: React.ComponentType<CProps>
) {
  function ComponentWithRouterProp(props: Omit<CProps, "router">) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...(props as CProps)}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;
