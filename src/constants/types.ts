export type SpanValue = number | undefined | "hidden" | "auto" | "flex";
export type SpanType = {
  xs?: SpanValue,
  sm?: SpanValue,
  md?: SpanValue,
  lg?: SpanValue,
  xl?: SpanValue,
  xxl?: SpanValue,
  [breakpoint: string]: SpanValue,
};

export type BreakPointType = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
