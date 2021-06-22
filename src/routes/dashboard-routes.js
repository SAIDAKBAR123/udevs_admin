import Dashboard from "../views/dashboard/index.jsx";
import Profile from "../views/profiles/index.jsx";
import UiComponents from '../views/ui-components/index.jsx'

export default [
  {
    id: 1,
    component: Dashboard,
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    permission: "",
    children: []
  },
  {
    id: 13,
    component: UiComponents,
    path: "/table",
    exact: true,
    title: "UI component",
    permission: "",
    children: []
  },
  {
    id: 2,
    component: Profile,
    path: "/profile",
    exact: true,
    title: "Profile",
    permission: "",
    children: []
  }
].map((route) => ({ ...route, path: `/home${route.path}` }));
