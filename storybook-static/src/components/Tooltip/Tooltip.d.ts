import { ReactNode } from '../../../node_modules/react';
export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps {
    content: ReactNode;
    children: ReactNode;
    placement?: TooltipPlacement;
    delay?: number;
    disabled?: boolean;
}
export declare function Tooltip({ content, children, placement, delay, disabled, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
