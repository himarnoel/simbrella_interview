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
        lazy: () => import("../src/Pages/DashboardPages/LoanManagement.tsx"),
      },
      {
        path: "/dashboard/loans/:loanId",
        lazy: () => import("../src/Pages/DashboardPages/LoanDetails.tsx"),
      },
      {
        path: "/dashboard/transactions",
        lazy: () =>
          import("../src/Pages/DashboardPages/TransactionHistory.tsx"),
      },
   
    ],
  },
]);

export default router;
