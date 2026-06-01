import { ReactNode } from '../../../node_modules/react';
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';
export interface AvatarProps {
    src?: string;
    alt?: string;
    name?: string;
    size?: AvatarSize;
    shape?: AvatarShape;
    status?: AvatarStatus;
    className?: string;
}
export interface AvatarGroupProps {
    children: ReactNode;
    max?: number;
    size?: AvatarSize;
    className?: string;
}
export declare function Avatar({ src, alt, name, size, shape, status, className, }: AvatarProps): import("react/jsx-runtime").JSX.Element;
export declare function AvatarGroup({ children, max, size, className, }: AvatarGroupProps): import("react/jsx-runtime").JSX.Element;
