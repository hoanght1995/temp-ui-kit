export type BreakPointValueType = {
  [key: string]: number;
};

export const BREAKPOINTS: BreakPointValueType = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1280,
  xl: 1366,
  xxl: 1440,
};

export const GUTTERS = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 24,
  xl: 24,
  xxl: 32,
};

export const CONTENT_MAX_WIDTH = {
  xs: 576 - 32,
  sm: 576 - 32,
  md: 768 - 72,
  lg: 1128,
  xl: 1128,
  xxl: 1128,
};
