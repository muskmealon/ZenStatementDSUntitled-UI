import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export type BadgeVariant = 'default' | 'brand' | 'success' | 'warning' | 'error' | 'info' | 'accent' | 'brandFilled' | 'successFilled' | 'errorFilled';
export type BadgeSize = 'sm' | 'md' | 'lg';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    size?: BadgeSize;
    dot?: boolean;
    icon?: ReactNode;
    children?: ReactNode;
}
export declare function Badge({ variant, size, dot, icon, children, className, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
