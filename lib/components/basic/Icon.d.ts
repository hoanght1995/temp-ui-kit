import { ViewStyle } from "react-native";
export interface IconProps {
    style?: ViewStyle;
    name: string;
    size?: number;
    color?: string;
    width?: number;
    height?: number;
}
declare const Icon: (props: IconProps) => JSX.Element;
export default Icon;
