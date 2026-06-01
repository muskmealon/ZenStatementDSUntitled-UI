import { InputHTMLAttributes, ReactNode } from '../../../node_modules/react';
export type InputSize = 'sm' | 'md' | 'lg';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: InputSize;
    label?: string;
    helperText?: string;
    errorText?: string;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
}
export declare const Input: import('../../../node_modules/react').ForwardRefExoticComponent<InputProps & import('../../../node_modules/react').RefAttributes<HTMLInputElement>>;
