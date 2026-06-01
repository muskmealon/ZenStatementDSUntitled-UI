import { ReactNode } from '../../../node_modules/react';
export type DialogSize = 'sm' | 'md' | 'lg' | 'xl';
export interface DialogProps {
    open: boolean;
    onClose: () => void;
    size?: DialogSize;
    children: ReactNode;
    closeOnOverlayClick?: boolean;
}
export declare function Dialog({ open, onClose, size, children, closeOnOverlayClick, }: DialogProps): import("react/jsx-runtime").JSX.Element;
export interface DialogHeaderProps {
    title: string;
    subtitle?: string;
    onClose?: () => void;
}
export declare function DialogHeader({ title, subtitle, onClose }: DialogHeaderProps): import("react/jsx-runtime").JSX.Element;
export interface DialogBodyProps {
    children: ReactNode;
    scrollable?: boolean;
}
export declare function DialogBody({ children, scrollable }: DialogBodyProps): import("react/jsx-runtime").JSX.Element;
export interface DialogFooterProps {
    children: ReactNode;
}
export declare function DialogFooter({ children }: DialogFooterProps): import("react/jsx-runtime").JSX.Element;
