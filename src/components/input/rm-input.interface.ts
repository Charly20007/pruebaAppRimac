export type TRmEventInput = React.FormEvent<HTMLInputElement>;

export interface IRmInputProps {
    label?: string;
    placeholder?: string;
    error?: boolean;
    value: string;
    type?: "text" | "number";
    changeValue?: (ev: string) => void
}