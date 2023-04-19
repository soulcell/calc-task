import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

import { CLASS_PATH, ROOT_PATH, SETTINGS_PATH } from "@/constants/paths";

const HomePage = React.lazy(() => import("./pages/Home"));
const HomePageCC = React.lazy(() => import("./pages/HomeCC"));
const SettingsPage = React.lazy(() => import("./pages/Settings"));

const routes: RouteObject[] = [
  {
    path: ROOT_PATH,
    element: <HomePage />,
  },
  {
    path: CLASS_PATH,
    element: <HomePageCC />,
  },
  {
    path: SETTINGS_PATH,
    element: <SettingsPage />,
  },
];

const router = createBrowserRouter(routes);

export default router;
