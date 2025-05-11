
export interface IRmCheckboxProps {
    label?: string; 
    isRequired?: boolean;
    value: boolean; 
    changeValue?: (ev: boolean) => void
}