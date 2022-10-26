import { ViewStyle } from "react-native";
import { RTextProps } from "../basic/RText";
import { SegmentTabProps } from "../tabs/SegmentTab";
import { RTextInputProps } from "../basic/Input";
export interface HeaderWithSearchProps {
    title?: string;
    titleProps?: RTextProps;
    tabProps?: SegmentTabProps;
    inputProps?: RTextInputProps;
    style?: ViewStyle;
}
declare const HeaderWithSearch: (props: HeaderWithSearchProps) => JSX.Element;
export default HeaderWithSearch;
