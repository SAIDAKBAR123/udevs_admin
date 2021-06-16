import Fallbak404 from "../views/exceptions/Fallback404.jsx";
import Fallbak503 from "../views/exceptions/Fallback503.jsx";
import Fallbak401 from "../views/exceptions/Fallback401.jsx";


export default [
  {
    id: 1,
    component: Fallbak404,
    path: "/fallback-404",
    exact: true,
    title: "Not found",
    showSidepanel: true
  },
  {
    id: 2,
    component: Fallbak503,
    path: "/fallback-503",
    exact: true,
    title: "Service Unavailable",
    showSidepanel: true
  },
  {
    id: 24,
    component: Fallbak401,
    path: "/fallback-401",
    exact: true,
    title: "Access forbidden",
    showSidepanel: true
  }
].map((route) => ({ ...route, path: `/extra${route.path}` }));
