import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IPlanValues } from "../types";

const initialState: IPlanValues = { typeCard: "" } as IPlanValues;

const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {
        setPlan(state, action: PayloadAction<IPlanValues>) {
            state.name = action.payload.name;
            state.price = action.payload.price;
            state.description = action.payload.description;
            state.age = action.payload.age;
            state.recommendedPlan = action.payload.recommendedPlan;
            state.inHome = action.payload.inHome;
            state.priceDiscount = action.payload?.priceDiscount;
            state.typeCard = action.payload.typeCard;
        },
        setRemovePlan(state) {
            state.name = "";
            state.price = 0;
            state.description = [];
            state.age = 0;
            state.recommendedPlan = undefined;
            state.inHome = undefined;
            state.priceDiscount = undefined;
            state.typeCard = "";
        },
    }
})

export const { setPlan, setRemovePlan } = planSlice.actions;
export default planSlice.reducer;
