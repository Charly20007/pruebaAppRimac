import type { IItem } from "../../../core/interfaces/items.interfaces";

export interface IItemStep extends IItem {
    selected?: boolean;
}

export interface IStepContainerProps {
    items: IItemStep[];
    changeBack?: (idSelected:   number) => void;
    idSelected?: string | number;
}