import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/Home"));
const HomePageCC = React.lazy(() => import("./pages/HomeCC"));
const SettingsPage = React.lazy(() => import("./pages/Settings"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cc",
    element: <HomePageCC />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
