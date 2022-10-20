import { PressableProps, StyleProp } from "react-native";
interface IPressable extends PressableProps {
    style?: StyleProp<any>;
    hoverEffect?: boolean;
}
declare const PressableComponent: ({ children, style, hoverEffect, ...props }: IPressable) => JSX.Element;
export default PressableComponent;
