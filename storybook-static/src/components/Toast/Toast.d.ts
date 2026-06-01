import { ReactNode } from '../../../node_modules/react';
export type ToastVariant = 'info' | 'success' | 'warning' | 'error';
export interface ToastOptions {
    variant?: ToastVariant;
    title?: string;
    description?: string;
    dismissible?: boolean;
    duration?: number;
    action?: {
        label: string;
        onClick: () => void;
    };
}
export interface ToastProps extends ToastOptions {
    onDismiss?: () => void;
}
export declare function Toast({ variant, title, description, dismissible, onDismiss, action, duration, }: ToastProps): import("react/jsx-runtime").JSX.Element | null;
interface ToastContextValue {
    toast: (options: ToastOptions) => void;
}
export declare function ToastProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useToast(): ToastContextValue;
export {};
