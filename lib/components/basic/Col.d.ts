import { SpanType } from "../../constants/types";
import { ReactElement } from "react";
import { StyleProp, ViewProps, ViewStyle } from "react-native";
export interface ColProps extends ViewProps {
    children?: ReactElement;
    style?: StyleProp<ViewStyle>;
    onPress?(): void;
    span?: SpanType;
}
declare const Col: (props: ColProps) => JSX.Element;
export default Col;
