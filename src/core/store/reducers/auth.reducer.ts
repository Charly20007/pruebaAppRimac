import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IUserAuth } from "../types";

const initialState: IUserAuth = { loggued: false, name: "" } as IUserAuth;

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<IUserAuth>) {
            state.loggued = true;
            state.numberDocument = action.payload.numberDocument;
            state.numberCellPhone = action.payload.numberCellPhone;
            state.name = action.payload.name;
            state.lastName = action.payload.lastName;
            state.birthDay = action.payload.birthDay;
        },
        setAuthClose(state) {
            state.loggued = false;
            state.name = "";
        },
    }
})

export const { setAuth, setAuthClose } = authSlice.actions;
export default authSlice.reducer;
