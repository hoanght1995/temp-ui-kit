import { ReactElement } from "react";
import { ViewStyle } from "react-native";
export interface EmptyBoxProps {
    renderIcon?: ReactElement;
    title?: string;
    btnTitle: string;
    style?: ViewStyle;
    onPress?(): void;
}
declare const EmptyBox: (props: EmptyBoxProps) => JSX.Element;
export default EmptyBox;
