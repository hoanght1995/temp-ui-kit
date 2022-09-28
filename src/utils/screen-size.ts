import { BREAKPOINTS } from "constants/responsive";
import { BreakPointType, SpanType } from "constants/types";

export const getScreenSize = (viewportWidth: number) => {
  const minWidthBreakpoints = BREAKPOINTS;
  const breakpoints = Object.keys(minWidthBreakpoints).sort((a, b) => {
    const widthA = minWidthBreakpoints[a];
    const widthB = minWidthBreakpoints[b];
    return widthA > widthB ? -1 : 1;
  });

  let currentBreakpoint = "xs";
  for (let i = 0; i <= breakpoints.length; i++) {
    const breakpointCode = breakpoints[i];
    const compareWidth = minWidthBreakpoints[breakpointCode];
    if (viewportWidth >= compareWidth) {
      currentBreakpoint = breakpointCode;
      if (!minWidthBreakpoints[breakpointCode]) continue;
      break;
    }
  }
  return currentBreakpoint;
};

const bpOrder = ["xs", "sm", "md", "lg", "xl", "xxl"];
export const findNearestLowerBreakpointValue = (breakpoint: BreakPointType, rules: SpanType) => {
  if (!breakpoint) return undefined;
  if (rules[breakpoint]) return rules[breakpoint];
  const index = bpOrder.indexOf(breakpoint);
  let i = index;
  while (!rules[bpOrder[i]]) {
    if (i === 0) return undefined;
    i -= 1;
  }
  return rules[bpOrder[i]];
};

export const getStyleByBreakpointRules = (breakpoint: BreakPointType, rules: SpanType) => {
  if (!rules) return { flex: 1 };
  const bpValue = findNearestLowerBreakpointValue(breakpoint, rules);
  if (!bpValue) return { flex: 1 };
  if (bpValue === "hidden") return undefined;
  if (bpValue === "auto") return {};
  if (bpValue === "flex") return { flex: 1 };
  return {
    width: `${Math.floor(Number(bpValue) / 12 * 100)}%`,
  };
};
