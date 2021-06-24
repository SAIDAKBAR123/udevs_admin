import Fallback404 from "../views/exceptions/Fallback404.jsx";
import Fallback502 from "../views/exceptions/Fallback503.jsx";
import Fallback403 from "../views/exceptions/Fallback403.jsx";


export default [
  {
    id: 1,
    component: Fallback404,
    path: "/fallback-404",
    exact: true,
    title: "Not found",
    showSidepanel: true
  },
  {
    id: 13,
    component: Fallback403,
    path: "/fallback-403",
    exact: true,
    title: "Not found",
    showSidepanel: true
  },
  {
    id: 2,
    component: Fallback502,
    path: "/fallback-502",
    exact: true,
    title: "Service Unavailable",
    showSidepanel: true
  }
].map((route) => ({ ...route, path: `/extra${route.path}` }));
