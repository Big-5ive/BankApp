import { RouterProvider, createHashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "../pages/auth/login/Login";
import Dashboard from "../dashboards/client/Dashboard";
import Content from "../layout/Content/Content";
import Payment from "../layout/payment/Payment";
import Transfer from "../layout/transfer/Transfer";
import Loan from "../layout/loan/Loan";
import Profile from "../layout/profile/Profile";

const route = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Content />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/transfer",
        element: <Transfer />,
      },
      {
        path: "/dashboard/payment",
        element: <Payment />,
      },
      {
        path: "/dashboard/loan",
        element: <Loan />,
      },
    ],
  },
]);

function Route() {
  return (
    <>
      <Toaster />
      <RouterProvider router={route} />
    </>
  );
}

export default Route;
