import React, { Suspense, lazy } from "react";
import { Navigate } from "react-router";

const withProtectedRoute = (importPath: string, redirectTo: string) => {
  const isAuthenticated = false; // Replace with actual authentication check
  const Component = lazy(() => import(`${importPath}`)); // Lazy load the component

  return (props: any) => {
    if (!isAuthenticated) {
      return <Navigate to={redirectTo} replace />;
    }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default withProtectedRoute;
