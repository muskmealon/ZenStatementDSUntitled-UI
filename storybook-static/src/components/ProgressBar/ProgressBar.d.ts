export type ProgressBarVariant = 'default' | 'success' | 'warning' | 'error' | 'brand';
export type ProgressBarSize = 'sm' | 'md' | 'lg';
export interface ProgressBarProps {
    value: number;
    max?: number;
    variant?: ProgressBarVariant;
    size?: ProgressBarSize;
    showLabel?: boolean;
    label?: string;
    animated?: boolean;
    indeterminate?: boolean;
}
export declare function ProgressBar({ value, max, variant, size, showLabel, label, animated, indeterminate, }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
