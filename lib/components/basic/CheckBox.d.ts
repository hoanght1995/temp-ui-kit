import { GestureResponderEvent, ViewProps } from "react-native";
import { LabelType } from "../basic/RText";
export interface CheckBoxProps extends ViewProps {
    labelType?: LabelType;
    title: string;
    checked?: boolean;
    disabled?: boolean;
    onPress?: (e: GestureResponderEvent) => void;
}
declare const CheckBox: (props: CheckBoxProps) => JSX.Element;
export default CheckBox;
