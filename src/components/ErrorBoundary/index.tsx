import React, { ErrorInfo } from "react";

import { ErrorBoundaryState } from "./types";

class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {};

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  public render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <>
          <h1>Sorry.. there was an error</h1>
          {error.message}
          <h2>Component stack:</h2>
          {errorInfo?.componentStack}
        </>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
