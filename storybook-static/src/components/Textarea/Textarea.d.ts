import { TextareaHTMLAttributes } from '../../../node_modules/react';
export type TextareaResize = 'none' | 'vertical' | 'both';
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    helperText?: string;
    errorText?: string;
    rows?: number;
    resize?: TextareaResize;
    showCount?: boolean;
    maxLength?: number;
    disabled?: boolean;
    id?: string;
    placeholder?: string;
}
export declare const Textarea: import('../../../node_modules/react').ForwardRefExoticComponent<TextareaProps & import('../../../node_modules/react').RefAttributes<HTMLTextAreaElement>>;
