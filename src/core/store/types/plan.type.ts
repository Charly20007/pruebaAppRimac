import type { TCardSelect } from "../../../pages/Dashboard/types";
import type { IPlan } from "../../interfaces";


export interface IPlanValues extends IPlan {
    typeCard: TCardSelect;
}