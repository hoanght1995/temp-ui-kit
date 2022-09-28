const PRIMITIVE_COLORS = {
  purple: "#9B59B6",

  darkPurple60: "#9A58B5",
  darkPurple100: "#9254AB",
  darkPurple200: "#8B50A4",
  darkPurple300: "#7C4792",
  darkPurple400: "#6C3E7F",
  darkPurple500: "#5D356D",
  darkPurple600: "#4D2C5B",
  darkPurple700: "#3E2449",
  darkPurple800: "#1F1224",
  darkPurple900: "#0F0912",

  lightPurple100: "#A56ABD",
  lightPurple200: "#AF7AC5",
  lightPurple300: "#B98BCC",
  lightPurple400: "#C39BD3",
  lightPurple500: "#CDACDB",
  lightPurple600: "#D7BDE2",
  lightPurple700: "#E1CDE9",
  lightPurple800: "#EBDEF0",
  lightPurple900: "#F5EEF8",
  lightPurple960: "#FBF8FC",

  violet1000: "#27133A",
  violet960: "#28143B",
  violet900: "#3D2B4E",
  violet800: "#524261",
  violet700: "#685A75",
  violet600: "#7D7189",
  violet500: "#93899C",
  violet400: "#A9A1B0",
  violet300: "#BEB8C4",
  violet200: "#D4D0D8",
  violet150: "#DFDCE1",
  violet100: "#E9E7EB",
  violet40: "#F6F6F7",
  violet20: "#FBFAFB",

  gray700: "#333333",
  gray600: "#545454",
  gray500: "#6B6B6B",
  gray400: "#AFAFAF",
  gray300: "#CBCBCB",
  gray200: "#E2E2E2",
  gray100: "#EEEEEE",
  gray50: "#F6F6F6",
  gray20: "#f8f8f8",

  green600: "#22866F",
  green500: "#26957B",
  green100: "#E9F4F2",
  green50: "#F4FDFB",

  red600: "#CF4D4D",
  red500: "#E65656",
  red100: "#FDEEEE",
  red50: "#FFF9F9",

  blue600: "#2B7EC0",
  blue500: "#308CD5",
  blue100: "#EAF3FB",
  blue50: "#F4FAFF",

  yellow600: "#E59A00",
  yellow500: "#FFAB00",
  yellow100: "#FFF7E5",
  yellow50: "#FFFBF2",

  text900: "#312E32",
  text800: "#333034",
  text700: "#464346",
  text600: "#5B595C",
  text500: "#6B696B",
  text200: "#A6A3A8",

  orange400: "#FF6937",
  orange300: "#FA9269",
  orange200: "#FABDA5",
  orange100: "#FFE1D6",
  orange50: "#FFF3EF",

  white: "#FFFFFF",
};

const COLORS = {
  ...PRIMITIVE_COLORS,

  // Foundation
  primaryA: PRIMITIVE_COLORS.purple,
  primaryB: PRIMITIVE_COLORS.white,
  accent: PRIMITIVE_COLORS.orange400,
  negative: PRIMITIVE_COLORS.red500,
  warning: PRIMITIVE_COLORS.yellow500,
  positive: PRIMITIVE_COLORS.green500,

  // Background
  backgroundPrimary: PRIMITIVE_COLORS.gray20,
  backgroundSecondary: PRIMITIVE_COLORS.white,
  backgroundTertiary: PRIMITIVE_COLORS.violet1000,

  // Content
  contentPrimary: PRIMITIVE_COLORS.text900,
  contentSecondary: PRIMITIVE_COLORS.text800,
  contentTertiary: PRIMITIVE_COLORS.text600,

  // Border
  borderPrimary: PRIMITIVE_COLORS.gray100,
  borderSecondary: PRIMITIVE_COLORS.gray200,
  borderTransparent: "#00000014",
};

export default COLORS;
