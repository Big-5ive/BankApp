import { RouterProvider, createHashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "../pages/auth/login/Login";
import AdminDashboardParent from "../pages/adminDashboard/dashboardMain/adminDashboard";
// import AccountComponent from "../pages/adminDashboard/dashboardComponent/account/account";
import AccountDashboard from "../pages/adminDashboard/dashboardMain/dashboardAccount/dashboardAccount";
import DashboardManageAccount from "../pages/adminDashboard/dashboardMain/manageAccount/manageAccount";


const route = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <AdminDashboardParent />
  },
  {
    path: "/allacount",
    element: <AccountDashboard /> 
  },
  {
    path: "accountmanage",
    element: <DashboardManageAccount />
  }
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
