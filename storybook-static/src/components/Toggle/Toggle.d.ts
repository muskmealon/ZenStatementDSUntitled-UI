export type ToggleSize = 'sm' | 'md' | 'lg';
export type ToggleLabelPosition = 'left' | 'right';
export interface ToggleProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    size?: ToggleSize;
    label?: string;
    labelPosition?: ToggleLabelPosition;
    id?: string;
}
export declare function Toggle({ checked, defaultChecked, onChange, disabled, size, label, labelPosition, id: idProp, }: ToggleProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Toggle {
    var displayName: string;
}
