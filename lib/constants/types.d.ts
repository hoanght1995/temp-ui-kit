export declare type SpanValue = number | undefined | "hidden" | "auto" | "flex";
export declare type SpanType = {
    xs?: SpanValue;
    sm?: SpanValue;
    md?: SpanValue;
    lg?: SpanValue;
    xl?: SpanValue;
    xxl?: SpanValue;
    [breakpoint: string]: SpanValue;
};
export declare type BreakPointType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
