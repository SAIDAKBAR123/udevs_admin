import Orders from "../../../views/orders";
import OrdersCreate from "../../../views/orders/ordersCreate";
const ordersRoutes = [
  {
    id: 34,
    component: Orders,
    path: "/orders",
    exact: true,
    title: "Orders",
    showSidepanel: false,
    permission: "",
    children: [],
  },
  {
    id: 37,
    component: OrdersCreate,
    path: "/orders/create",
    exact: true,
    title: "Create new order",
    showSidepanel: false,
    permission: "",
  },
];

export default ordersRoutes;
