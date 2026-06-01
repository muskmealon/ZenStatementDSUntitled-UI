export type LoaderVariant = 'spinner' | 'dots' | 'bar';
export type LoaderSize = 'sm' | 'md' | 'lg';
export type LoaderColor = 'brand' | 'white' | 'muted';
export interface LoaderProps {
    variant?: LoaderVariant;
    size?: LoaderSize;
    color?: LoaderColor;
    label?: string;
}
export declare function Loader({ variant, size, color, label, }: LoaderProps): import("react/jsx-runtime").JSX.Element;
