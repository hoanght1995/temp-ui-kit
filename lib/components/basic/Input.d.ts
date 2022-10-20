import { ReactElement } from "react";
import { TextInputProps, ViewStyle, StyleProp } from "react-native";
export interface RTextInputProps extends TextInputProps {
    error?: boolean | string;
    size?: "md" | "lg";
    label?: string;
    info?: string;
    left?: ReactElement;
    right?: ReactElement;
    actionButton?: {
        title: string;
        onPress: () => void;
    };
    disabled?: boolean;
    readOnly?: boolean;
    fluid?: boolean;
    style?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<any>;
}
declare const RTextInput: ({ style, inputStyle, size, label, info, left, right, actionButton, disabled, readOnly, error, fluid, ...props }: RTextInputProps) => JSX.Element;
export default RTextInput;
