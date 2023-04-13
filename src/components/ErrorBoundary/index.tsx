import React, { ErrorInfo } from "react";

interface State {
  error?: Error;
}

class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  public state: State = {
    error: undefined,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const { error } = this.state;
    const { children } = this.props;

    if (error) {
      return (
        <>
          <h1>Sorry.. there was an error</h1>
          {error.message}
        </>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
