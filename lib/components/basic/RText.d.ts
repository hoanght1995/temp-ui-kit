import { StyleProp, TextProps, TextStyle } from "react-native";
export interface RTextProps extends TextProps {
    children?: any;
    title?: string;
    style?: StyleProp<TextStyle>;
    bold?: Boolean;
    color?: string;
    type?: "d1" | "d2" | "d3" | "d4" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "l1" | "l2" | "l3" | "l4" | "l5" | "l6" | "l1b" | "l2b" | "l3b" | "l4b" | "l5b" | "l6b";
}
declare const TextComp: (props: RTextProps) => JSX.Element;
export default TextComp;
