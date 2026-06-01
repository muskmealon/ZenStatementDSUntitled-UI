import { ReactNode } from '../../../node_modules/react';
export interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: ReactNode;
}
export interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: ReactNode;
    maxItems?: number;
}
export declare function Breadcrumb({ items, separator, maxItems, }: BreadcrumbProps): import("react/jsx-runtime").JSX.Element;
