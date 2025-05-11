export type TRmEventInput = React.FormEvent<HTMLInputElement>;

export interface IRmInputSelectProps {
    label?: string;
    placeholder?: string;
    error?: boolean;
    value: string;
    type?: "text" | "number";
    changeValue?: (ev: string) => void
}