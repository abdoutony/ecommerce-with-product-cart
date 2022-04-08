import { Navigate } from "react-router-dom";
export const PrivateRoute = ({ children, isAuth }) => {
  const token = JSON.parse(localStorage.getItem("admin"));
  if (token) {
    return children;
  }
  return <Navigate to="/auth/login" />;
};
