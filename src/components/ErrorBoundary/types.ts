import { ErrorInfo } from "react";

export interface ErrorBoundaryState {
  error?: Error;
  errorInfo?: ErrorInfo;
}
