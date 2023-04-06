import { createBrowserRouter, RouteObject } from "react-router-dom";

import HomePage from "./pages/Home";
import HomePageCC from "./pages/HomeCC";
import SettingsPage from "./pages/Settings";

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
