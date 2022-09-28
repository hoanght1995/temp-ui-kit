import { ReactElement } from "react";
import { StyleProp, ViewProps, ViewStyle } from "react-native";
export interface GridProps extends ViewProps {
    children: ReactElement[];
    style?: StyleProp<ViewStyle>;
    gutter?: number | number[];
    noPadding?: Boolean;
}
declare const Grid: (props: GridProps) => JSX.Element;
export default Grid;
