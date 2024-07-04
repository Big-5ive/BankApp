import { RouterProvider, createHashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "../pages/auth/login/Login";


const route = createHashRouter([
  {
    path: "/",
    element: <Login />,
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
