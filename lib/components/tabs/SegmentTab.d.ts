import React from "react";
import { StyleProp, ViewStyle } from "react-native";
interface TabItemType {
    name?: string;
}
export interface SegmentTabProps {
    tabs: Array<TabItemType>;
    style?: StyleProp<ViewStyle>;
    size?: "sm" | "md" | "lg";
    initTabIndex?: number;
    currentTab: number;
    onChangeTab?: (tabIndex: number) => void;
}
export interface SegmentRef {
    changeTab: (tabIndex: number) => void;
}
declare const _default: React.ForwardRefExoticComponent<SegmentTabProps & React.RefAttributes<SegmentRef>>;
export default _default;
