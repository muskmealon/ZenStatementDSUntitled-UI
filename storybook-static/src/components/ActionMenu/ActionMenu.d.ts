import { ReactNode } from '../../../node_modules/react';
export type ActionMenuItemVariant = 'default' | 'danger';
export interface ActionMenuItemDef {
    icon?: ReactNode;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: ActionMenuItemVariant;
    dividerAbove?: boolean;
}
export interface ActionMenuItemProps {
    icon?: ReactNode;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: ActionMenuItemVariant;
}
export declare function ActionMenuItem({ icon, label, onClick, disabled, variant, }: ActionMenuItemProps): import("react/jsx-runtime").JSX.Element;
export interface ActionMenuProps {
    trigger: ReactNode;
    items: ActionMenuItemDef[];
    align?: 'left' | 'right';
    className?: string;
}
export declare function ActionMenu({ trigger, items, align, className }: ActionMenuProps): import("react/jsx-runtime").JSX.Element;
