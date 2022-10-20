import React from "react";
export declare type ProgressBarProps = {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    percent?: number;
    type?: "line" | "circle";
    innerBackgroundColor?: string;
};
declare const _default: React.MemoExoticComponent<(props: ProgressBarProps) => JSX.Element>;
export default _default;
