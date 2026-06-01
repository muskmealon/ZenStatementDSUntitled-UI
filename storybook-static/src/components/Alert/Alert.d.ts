import { ReactNode } from '../../../node_modules/react';
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';
export interface AlertProps {
    variant?: AlertVariant;
    title?: string;
    children?: ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    icon?: ReactNode;
    action?: ReactNode;
    className?: string;
}
export declare function Alert({ variant, title, children, dismissible, onDismiss, icon, action, className, }: AlertProps): import("react/jsx-runtime").JSX.Element | null;
