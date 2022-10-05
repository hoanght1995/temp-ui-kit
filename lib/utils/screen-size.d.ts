import { BreakPointType, SpanType } from "./types";
export declare const getScreenSize: (viewportWidth: number) => string;
export declare const findNearestLowerBreakpointValue: (breakpoint: BreakPointType, rules: SpanType) => import("./types").SpanValue;
export declare const getStyleByBreakpointRules: (breakpoint: BreakPointType, rules: SpanType) => {
    flex: number;
    width?: undefined;
} | {
    flex?: undefined;
    width?: undefined;
} | {
    width: string;
    flex?: undefined;
} | undefined;
