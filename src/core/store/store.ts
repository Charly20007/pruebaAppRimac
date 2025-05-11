import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth.reducer";
import planReducer from "./reducers/plan.reducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        plan: planReducer
    },
    devTools: false
})

export type RootState = ReturnType<typeof store.getState>;

export default store