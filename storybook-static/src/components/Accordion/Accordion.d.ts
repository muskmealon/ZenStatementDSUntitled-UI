import { ReactNode } from '../../../node_modules/react';
export type AccordionSize = 'sm' | 'md' | 'lg';
export interface AccordionProps {
    children: ReactNode;
    allowMultiple?: boolean;
    className?: string;
}
export interface AccordionItemProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
    disabled?: boolean;
    size?: AccordionSize;
    id?: string;
}
export declare function Accordion({ children, allowMultiple, className }: AccordionProps): import("react/jsx-runtime").JSX.Element;
export declare function AccordionItem({ title, children, defaultOpen, disabled, size, }: AccordionItemProps): import("react/jsx-runtime").JSX.Element;
