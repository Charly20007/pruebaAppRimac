import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "../pages/Auth/Auth";

const AuthRouter = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={isAuth ? <Navigate to="/dashboard" /> : <Auth />}
      />
    </Routes>
  );
};

export default AuthRouter;
