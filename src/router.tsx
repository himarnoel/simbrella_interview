import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Login from "./Pages/Login";
// import AppErrorBoundary from "./Utils/AppErrorBoundary.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Login /> }],
  },
  {
    path: "/dashboard",
    lazy: () => import("../src/Pages/DashboardPages/DashboardLayout.tsx"),
    // ErrorBoundary: AppErrorBoundary,
    children: [
      {
        index: true, 
        lazy: () => import("../src/Pages/DashboardPages/Home.tsx"),
      },
      {
       path: "/dashboard/loans", 
        lazy: () => import("../src/Pages/DashboardPages/Home.tsx"),
      },
    ],
  },
]);

export default router;
