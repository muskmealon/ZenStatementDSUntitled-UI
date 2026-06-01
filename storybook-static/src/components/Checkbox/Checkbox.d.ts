import { ReactNode } from '../../../node_modules/react';
export type CheckboxSize = 'sm' | 'md';
export interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
    helperText?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    size?: CheckboxSize;
    id?: string;
}
export declare function Checkbox({ checked, defaultChecked, onChange, label, helperText, disabled, indeterminate, size, id, }: CheckboxProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Checkbox {
    var displayName: string;
}
export interface CheckboxGroupProps {
    label?: string;
    children: ReactNode;
    orientation?: 'vertical' | 'horizontal';
}
export declare function CheckboxGroup({ label, children, orientation }: CheckboxGroupProps): import("react/jsx-runtime").JSX.Element;
export declare namespace CheckboxGroup {
    var displayName: string;
}
