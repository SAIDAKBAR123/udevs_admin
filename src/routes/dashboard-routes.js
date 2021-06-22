import Dashboard from "../views/dashboard/index.jsx";
import Profile from "../views/profiles/index.jsx";
import UiComponents from '../views/ui-components/index.jsx'
import Accordions from '../views/Accordions/Accordions'
import Buttons from '../views/buttons/index'

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
    id: 3,
    component: Buttons,
    path: "/buttons",
    exact: true,
    title: "Button",
    showSidepanel: false,
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
  },
].map((route) => ({ ...route, path: `/home${route.path}` }));
