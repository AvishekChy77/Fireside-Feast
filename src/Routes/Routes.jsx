import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Root from "../Layout/Root";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      // admin routes
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
