import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import ErrorBoundary from "./components/ErrorBoundary";
import StyledApp from "./components/ThemeProvider";
import LoadingPage from "./pages/Loading";
import reportWebVitals from "./reportWebVitals";
import router from "./router";
import { persistor, store } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={<LoadingPage />} persistor={persistor}>
          <StyledApp>
            <React.Suspense fallback={<LoadingPage />}>
              <RouterProvider router={router} />
            </React.Suspense>
          </StyledApp>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
