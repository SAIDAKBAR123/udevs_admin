import Dashboard from "../views/dashboard/index.jsx";
import Profile from "../views/profiles/index.jsx";
import UiComponents from '../views/ui-components/index.jsx'
import Accordions from '../views/Accordions/Accordions'

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
    id: 3,
    component: Accordions,
    path: "/accordion",
    exact: true,
    title: "Accordion",
    showSidepanel: false,
    permission: "",
    children: []
  },
  {
    id: 13,
    component: UiComponents,
    path: "/clients",
    exact: true,
    title: "UI component",
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
  },
].map((route) => ({ ...route, path: `/home${route.path}` }));
