export type SelectSize = 'sm' | 'md' | 'lg';
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
export interface SelectProps {
    options: SelectOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
    size?: SelectSize;
    label?: string;
    helperText?: string;
    errorText?: string;
    id?: string;
}
export declare function Select({ options, value, defaultValue, onChange, placeholder, disabled, size, label, helperText, errorText, id, }: SelectProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Select {
    var displayName: string;
}
