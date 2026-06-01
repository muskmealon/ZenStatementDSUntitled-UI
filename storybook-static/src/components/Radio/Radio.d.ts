import { ReactNode } from '../../../node_modules/react';
export type RadioSize = 'sm' | 'md';
export interface RadioProps {
    value: string;
    label?: string;
    disabled?: boolean;
    size?: RadioSize;
    id?: string;
}
export declare function Radio({ value, label, disabled, size, id }: RadioProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Radio {
    var displayName: string;
}
export interface RadioGroupProps {
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    label?: string;
    orientation?: 'vertical' | 'horizontal';
    children: ReactNode;
    name?: string;
}
export declare function RadioGroup({ value, defaultValue, onChange, label, orientation, children, name, }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
export declare namespace RadioGroup {
    var displayName: string;
}
