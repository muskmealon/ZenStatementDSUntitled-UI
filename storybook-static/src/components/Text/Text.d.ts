import { ElementType, HTMLAttributes, ReactNode } from '../../../node_modules/react';
export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline' | 'label' | 'code';
export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'muted' | 'brand' | 'error' | 'success' | 'warning' | 'info' | 'inverse' | 'disabled';
export type TextWeight = 'regular' | 'medium' | 'semiBold' | 'bold';
export interface TextProps extends HTMLAttributes<HTMLElement> {
    variant?: TextVariant;
    color?: TextColor;
    weight?: TextWeight;
    truncate?: boolean;
    as?: ElementType;
    children?: ReactNode;
}
export declare function Text({ variant, color, weight, truncate, as, children, className, ...props }: TextProps): import("react/jsx-runtime").JSX.Element;
