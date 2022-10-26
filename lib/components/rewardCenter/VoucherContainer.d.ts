import { ReactElement } from "react";
import { TextStyle, ViewStyle } from "react-native";
export interface VoucherContainerProps {
    children?: ReactElement;
    backgroundColor?: string;
    size?: "lg" | "sm";
    btnTitle: string;
    onPress?(): void;
    style?: ViewStyle;
    disabled?: boolean;
    btnStyle?: ViewStyle;
    btnTitleStyle?: TextStyle;
}
declare const VoucherContainer: (props: VoucherContainerProps) => JSX.Element;
export default VoucherContainer;
