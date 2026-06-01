import { ReactNode } from '../../../node_modules/react';
type TabsVariant = 'line' | 'pill';
export interface TabsProps {
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    children: ReactNode;
    variant?: TabsVariant;
}
export declare function Tabs({ defaultValue, value, onChange, children, variant }: TabsProps): import("react/jsx-runtime").JSX.Element;
export interface TabListProps {
    children: ReactNode;
    'aria-label'?: string;
    variant?: TabsVariant;
}
export declare function TabList({ children, 'aria-label': ariaLabel, variant }: TabListProps): import("react/jsx-runtime").JSX.Element;
export interface TabProps {
    value: string;
    disabled?: boolean;
    children: ReactNode;
    icon?: ReactNode;
    variant?: TabsVariant;
}
export declare function Tab({ value, disabled, children, icon, variant }: TabProps): import("react/jsx-runtime").JSX.Element;
export interface TabPanelProps {
    value: string;
    children: ReactNode;
}
export declare function TabPanel({ value, children }: TabPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
