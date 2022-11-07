import React from "react";
import { ViewStyle } from "react-native";
interface DashedLineProps {
    isHorizontal?: boolean;
    gap?: number;
    length?: number;
    thickness?: number;
    color?: string;
    dashStyle?: ViewStyle;
    style?: ViewStyle;
}
declare const DashedLine: React.FC<DashedLineProps>;
export default DashedLine;
