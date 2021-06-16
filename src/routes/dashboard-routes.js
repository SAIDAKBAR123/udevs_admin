import Dashboard from "../views/dashboard/index.jsx";
import Profile from "../views/profiles/index.jsx";

export default [
  {
    id: 1,
    component: Dashboard,
    path: "/dashboard",
    exact: true,
    title: "Dashboard",
    showSidepanel: true,
    permission: "",
    children: []
  },
  {
    id: 2,
    component: Profile,
    path: "/profile",
    exact: true,
    title: "Profile",
    showSidepanel: true,
    permission: "",
    children: []
  }
].map((route) => ({ ...route, path: `/home${route.path}` }));
