import { RouterProvider, createHashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "../pages/auth/login/Login";
import AdminDashboardParent from "../pages/adminDashboard/dashboardMain/adminDashboard";
// import AccountComponent from "../pages/adminDashboard/dashboardComponent/account/account";
import AccountDashboard from "../pages/adminDashboard/dashboardMain/dashboardAccount/dashboardAccount";
import DashboardManageAccount from "../pages/adminDashboard/dashboardMain/manageAccount/manageAccount";

import Dashboard from "../dashboards/client/Dashboard";
import Content from "../layout/Content/Content";
import Payment from "../layout/payment/Payment";
import Transfer from "../layout/transfer/Transfer";
import Loan from "../layout/loan/Loan";
import Profile from "../layout/profile/Profile";
import Transaction from "../layout/Transaction/Transaction";
import CustomerDetail from "../layout/customerDetail/CustomerDetail";

const route = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminDashboardParent />,
  },
  {
    path: "/allacount",
    element: <AccountDashboard />,
  },
  {
    path: "accountmanage",
    element: <DashboardManageAccount />,
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
        path: "/dashboard/detail",
        element: <CustomerDetail />,
      },
      {
        path: "/dashboard/transfer",
        element: <Transfer />,
      },
      {
        path: "/dashboard/transaction",
        element: <Transaction />,
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
