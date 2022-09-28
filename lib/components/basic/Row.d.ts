import { ReactElement } from "react";
import { StyleProp, ViewProps, ViewStyle } from "react-native";
export interface RowProps extends ViewProps {
    children?: ReactElement | ReactElement[];
    style?: StyleProp<ViewStyle>;
    onPress?(): void;
}
declare const Row: (props: RowProps) => JSX.Element;
export default Row;
