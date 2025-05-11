import { Route, Routes, Navigate } from "react-router-dom";
import DashBoard from "../pages/Dashboard/DashBoard";

const DashboardRouter = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={isAuth ? <DashBoard /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default DashboardRouter;
