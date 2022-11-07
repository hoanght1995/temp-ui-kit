import { ViewProps } from "react-native";
import { ReactElement } from "react";
declare type FooterAbsoluteProps = {
    renderFooter: () => ReactElement;
    scrollable?: boolean;
} & Pick<ViewProps, "children">;
declare const ViewWithFooterAbsolute: (props: FooterAbsoluteProps) => JSX.Element;
export default ViewWithFooterAbsolute;
