
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import AppNotFound from "./AppNotFound";

export function AppErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <AppNotFound />;
    }

    if (error.status === 401) {
      return <div>You are not authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }
  }

  return <div>Something went wrong</div>;
}

export default AppErrorBoundary;
