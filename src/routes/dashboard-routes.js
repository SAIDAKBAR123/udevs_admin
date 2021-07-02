import Dashboard from "../views/dashboard/index.jsx";
import Profile from "../views/profiles/index.jsx";
import UiComponents from "../views/ui-components/index.jsx";

import componentRoutes from "../config/routes/componentRoutes/index.js";
import ordersRoutes from "../config/routes/ordersRoutes/index.js";

export default [
  {
    id: 1,
    component: Dashboard,
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    permission: "",
    children: [],
  },
  ...componentRoutes,
  ...ordersRoutes,
  {
    id: 13,
    component: UiComponents,
    path: "/table",
    exact: true,
    title: "UI component",
    permission: "",
    children: [],
  },
].map((route) => ({ ...route, path: `/home${route.path}` }));
