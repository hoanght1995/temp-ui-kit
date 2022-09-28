import { StyleProp, ViewProps, ViewStyle } from "react-native";
export interface SpinProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
    onPress?(): void;
    size?: "small" | "large" | number;
    color?: string;
}
declare const Spin: (props: SpinProps) => JSX.Element;
export default Spin;
