import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAuth, setAuthClose } from "../store/reducers";
import type { IUserAuth } from "../store/types";
import type { RootState } from "../store/store";

export const useUserAuthStore = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth);

  const setUser = (user: IUserAuth) => dispatch(setAuth({ ...user }));

  const setRemovUser = () => dispatch(setAuthClose());

  return { user, setUser, setRemovUser };
};
