import Dashboard from "../views/dashboard/index.jsx";
import Profile from "../views/profiles/index.jsx";

import componentRoutes from "../config/routes/componentRoutes/index.js";
import ordersRoutes from "../config/routes/ordersRoutes/index.js";
import clientsRoutes from "../config/routes/clientsRoutes/index.js";

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
  ...clientsRoutes,
].map((route) => ({ ...route, path: `/home${route.path}` }));
