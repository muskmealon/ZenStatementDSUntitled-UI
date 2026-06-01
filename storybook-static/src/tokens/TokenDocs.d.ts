export declare function ColorSwatch({ token, label }: {
    token: string;
    label?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function ColorGroup({ title, tokens }: {
    title: string;
    tokens: string[];
}): import("react/jsx-runtime").JSX.Element;
export declare function PaletteRow({ name, shades }: {
    name: string;
    shades: number[];
}): import("react/jsx-runtime").JSX.Element;
export declare function TypeSpecimen({ token, size, lineHeight, weight, label, sample, }: {
    token: string;
    size: string;
    lineHeight: string;
    weight: string;
    label: string;
    sample?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function SpacingSwatch({ value }: {
    value: number;
}): import("react/jsx-runtime").JSX.Element;
export declare function RadiusSwatch({ name, value }: {
    name: string;
    value: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function Section({ title, children }: {
    title: string;
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
