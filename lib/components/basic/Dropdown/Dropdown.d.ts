import { ReactElement } from "react";
import { ViewStyle, StyleProp } from "react-native";
export declare type Value = string | number | null;
export declare type Option = {
    label: string;
    value: Value;
    left?: ReactElement;
};
export interface DropdownProps {
    testID?: string;
    error?: boolean | string;
    size?: "md" | "lg";
    label?: string;
    info?: string;
    defaultValue?: Value;
    value?: Value;
    placeholder?: string;
    left?: ReactElement;
    actionButton?: {
        title: string;
        onPress: () => void;
    };
    disabled?: boolean;
    readOnly?: boolean;
    fluid?: boolean;
    style?: StyleProp<ViewStyle>;
    options: Option[];
    onSelect?: (value: Value) => void;
    onSearchChange?: (value: string) => void;
    showSearch?: boolean;
}
declare const Dropdown: ({ style, size, label, info, left, actionButton, defaultValue, value: propValue, disabled, error, fluid, placeholder, onSelect, testID, options, ...props }: DropdownProps) => JSX.Element;
export default Dropdown;
