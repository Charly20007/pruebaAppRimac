import { SESSION_STORAGE } from "../core/constants";
import { useUserAuthStore } from "../core/hooks";
import type { IUserAuth } from "../core/store/types";
import AuthRouter from "./AuthRouter";
import DashboardRouter from "./Dashboard";
import { useEffect, useState } from "react";

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { setUser, user: userAuth, setRemovUser } = useUserAuthStore();

  useEffect(() => {
    try {
      setIsLoading(true);
      const resSStorage = sessionStorage.getItem(SESSION_STORAGE.TOKEN_AUTH);
      if (!resSStorage) throw new Error("NO=TOKEN");
      const user = JSON.parse(resSStorage) as IUserAuth;
      if ((user?.name || "").length === 0) throw new Error("NO=USER");
      setUser({ ...user, name: user.name, loggued: true });
    } catch (error) { 
      setRemovUser();
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [setUser, setRemovUser, setIsLoading]);

  return (
    <>
      {isLoading && <span>Cargando ...</span>}
      <AuthRouter isAuth={userAuth?.loggued || false} />
      <DashboardRouter isAuth={userAuth?.loggued || false} />
    </>
  );
};

export default AppRoutes;
