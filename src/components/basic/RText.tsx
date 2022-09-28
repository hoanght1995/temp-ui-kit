import { COLORS } from "constants";
import React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";

export interface RTextProps extends TextProps {
  children?: any,
  title?: string;
  style?: StyleProp<TextStyle>;
  bold?: Boolean;
  color?: string;
  type?: "d1" | "d2" | "d3" | "d4" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "l1" | "l2" | "l3" | "l4" | "l5" | "l6" | "l1b" | "l2b" | "l3b" | "l4b" | "l5b" | "l6b";
}

const scaleByResponsive = (size: number) => {
  // need discuss with designer
  return size;
};

const styleByType = {
  // [fontSize, lineHeight, fontWeight]
  d1: [96, 112, 400],
  d2: [52, 64, 400],
  d3: [44, 52, 400],
  d4: [36, 44, 400],
  h1: [40, 52, 700],
  h2: [36, 44, 700],
  h3: [32, 40, 700],
  h4: [28, 36, 700],
  h5: [24, 32, 700],
  h6: [20, 28, 700],
  l1: [20, 32, 400],
  l2: [18, 26, 400],
  l3: [16, 24, 400],
  l4: [14, 20, 400],
  l5: [12, 16, 400],
  l6: [10, 14, 400],
  l1b: [20, 32, 700],
  l2b: [18, 26, 700],
  l3b: [16, 24, 700],
  l4b: [14, 20, 700],
  l5b: [12, 16, 700],
  l6b: [10, 14, 700],
};

const TextComp = (props: RTextProps) => {
  const { bold, style, color, title, children, type, ...resProps } = props;
  let propsStyle: TextStyle = {
    color: color || COLORS.contentPrimary,
  };
  if (type) {
    const [size, lineH, weight] = styleByType[type] || [14, 20, 400];
    propsStyle = Object.assign(propsStyle, {
      fontSize: scaleByResponsive(size),
      lineHeight: scaleByResponsive(lineH),
      fontWeight: String(weight),
    });
  }
  if (bold) propsStyle.fontWeight = "700";

  return (
    <Text
      style={[propsStyle, style]}
      {...resProps}
    >
      {title || children}
    </Text>
  );
};

export default TextComp;
