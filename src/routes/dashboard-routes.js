import Dashboard from "../views/dashboard/index.jsx";
import Profile from "../views/profiles/index.jsx";
// import UiComponents from "../views/ui-components/index.jsx";
import Accordions from "../views/accordions/Accordions.jsx";
import Buttons from "../views/buttons/index";
import Cards from "../views/cards/index";
// import TableOrder from "../views/tableOrder/index";
import Avatars from "../views/avatars/Avatars";
import TableComp from "../views/tablecomp/index";
import Modal from "../views/modal/index";
import Popup from "../views/popup/index";
import Steps from "../views/steps";

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
  {
    id: 365,
    component: Accordions,
    path: "/dashboard/accordion",
    exact: true,
    title: "Accordiond",
    showSidepanel: false,
    permission: "",
    children: [],
  },
  {
    id: 343,
    component: Buttons,
    path: "/dashboard/buttons",
    exact: true,
    title: "Button",
    showSidepanel: false,
    permission: "",
    children: [],
  },
  {
    id: 3654,
    component: Cards,
    path: "/dashboard/cards",
    exact: true,
    title: "Cards",
    showSidepanel: false,
    permission: "",
    children: [],
  },
  // {
  //   id: 34,
  //   component: TableOrder,
  //   path: "/table-ui",
  //   exact: true,
  //   title: "Table ui",
  //   showSidepanel: false,
  //   permission: "",
  //   children: [],
  // },
  {
    id: 4,
    component: Avatars,
    path: "/dashboard/avatars",
    exact: true,
    title: "Avatar",
    showSidepanel: false,
    permission: "",
    children: [],
  },
  // {
  //   id: 13,
  //   component: UiComponents,
  //   path: "/table",
  //   exact: true,
  //   title: "UI component",
  //   permission: "",
  //   children: [],
  // },
  {
    id: 45,
    component: TableComp,
    path: "/dashboard/tablecomp",
    exact: true,
    title: "Table Component",
    permission: "",
    children: [],
  },
  {
    id: 33,
    component: Modal,
    path: "/dashboard/modal",
    exact: true,
    title: "Modal",
    permission: "",
    children: [],
  },
  {
    id: 35,
    component: Popup,
    path: "/dashboard/popup",
    exact: true,
    title: "Popup",
    permission: "",
    children: [],
  },
  {
    id: 37,
    component: Steps,
    path: "/dashboard/steps",
    exact: true,
    title: "Steps",
    permission: "",
    children: []
  }
].map((route) => ({ ...route, path: `/home${route.path}` }));
