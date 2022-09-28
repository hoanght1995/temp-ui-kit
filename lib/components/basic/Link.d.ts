import { ViewStyle, GestureResponderEvent } from "react-native";
import { RTextProps } from "../basic/RText";
export interface LinkProps extends RTextProps {
    linkStyle?: ViewStyle;
    underline?: boolean;
    disabled?: boolean;
    onPress?: (e: GestureResponderEvent) => void;
}
declare const Link: ({ linkStyle: propLinkStyle, underline, disabled, onPress, style, ...props }: LinkProps) => JSX.Element;
export default Link;
