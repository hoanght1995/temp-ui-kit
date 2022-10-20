import { ReactElement } from "react";
import { StyleProp, TextStyle, ViewProps, ViewStyle } from "react-native";
export interface ButtonProps extends ViewProps {
    onRef?(ref: any): void;
    children?: ReactElement;
    style?: StyleProp<ViewStyle>;
    title?: string;
    onPress?(): void;
    disable?: Boolean;
    loading?: Boolean;
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
    type?: "primary" | "light" | "text";
    shape?: "square" | "round";
    left?: ReactElement;
    right?: ReactElement;
    titleStyle?: StyleProp<TextStyle>;
    color?: string;
}
declare const Button: {
    (props: ButtonProps): JSX.Element;
    defaultProps: {
        size: string;
        type: string;
    };
};
export default Button;
