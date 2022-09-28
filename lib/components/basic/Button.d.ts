import { ReactElement } from "react";
import { ViewProps, ViewStyle } from "react-native";
export interface ButtonProps extends ViewProps {
    onRef?(ref: any): void;
    children?: ReactElement;
    style?: ViewStyle;
    title?: string;
    onPress?(): void;
    disable?: Boolean;
    loading?: Boolean;
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
    type?: "primary" | "light" | "text";
    shape?: "square" | "round";
    left?: ReactElement;
    right?: ReactElement;
}
declare const Button: {
    (props: ButtonProps): JSX.Element;
    defaultProps: {
        size: string;
        type: string;
    };
};
export default Button;
