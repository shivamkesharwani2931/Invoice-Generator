
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { isAuth, authInitialized } = useSelector(
    (state) => state.user
  );

  // Wait until cookie authentication is checked
  if (!authInitialized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
      </div>
    );
  }

  // Redirect guests to login
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
