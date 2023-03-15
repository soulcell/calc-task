import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import reportWebVitals from "./reportWebVitals";
import { persistor, store } from "./store/store";
import StyledApp from "./styled";
import { PersistGate } from "redux-persist/integration/react";
import ErrorBoundary from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StyledApp>
            <RouterProvider router={router} />
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
