import { ViewStyle } from "react-native";
declare type HalfCircleType = {
    radius: number;
    percent: number;
    slideNum: number;
    rotateDegrees?: number;
    additionalStyles?: ViewStyle;
};
declare const HalfCircle: (props: HalfCircleType) => JSX.Element;
export default HalfCircle;
