import { StyleProp, ViewStyle } from "react-native";
interface Props {
    style?: StyleProp<ViewStyle>;
    name: string;
    size?: number;
    color?: string;
    width?: number;
    height?: number;
}
declare const Icon: (props: Props) => JSX.Element;
export default Icon;
