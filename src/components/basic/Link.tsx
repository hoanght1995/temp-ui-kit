import React, { useCallback } from "react";
import { StyleSheet, TouchableOpacity, ViewStyle, GestureResponderEvent, View } from "react-native";

import { COLORS } from "constants";
import RText, { RTextProps } from "components/basic/RText";
import Icon from "components/basic/Icon";

export interface LinkProps extends RTextProps {
  linkStyle?: ViewStyle;
  underline?: boolean;
  disabled?: boolean;
  onPress?: (e: GestureResponderEvent) => void
}

const CONFIGS = {
  // [iconSize]
  d1: [96],
  d2: [52],
  d3: [44],
  d4: [36],
  h1: [40],
  h2: [36],
  h3: [32],
  h4: [28],
  h5: [24],
  h6: [20],
  l1: [20],
  l2: [18],
  l3: [16],
  l4: [14],
  l5: [12],
  l6: [10],
  l1b: [20],
  l2b: [18],
  l3b: [16],
  l4b: [14],
  l5b: [12],
  l6b: [10],
};

const hitSlop = { top: 4, bottom: 4, left: 4, right: 4 };

const Link = ({
  linkStyle: propLinkStyle,
  underline,
  disabled,
  onPress,
  style,
  ...props
}: LinkProps) => {
  const { color = COLORS.contentPrimary, type } = props;

  const [iconSize] = CONFIGS[type || "l4"];

  const linkInnerStyle = [
    styles.link,
    disabled && styles.disabled
  ];
  const textStyle = underline ? [styles.underline, style] : style;

  const onLinkPress = useCallback((e: GestureResponderEvent) => {
    if (onPress && !disabled) onPress(e);
  }, [disabled, onPress]);

  return (
    <TouchableOpacity
      style={propLinkStyle}
      activeOpacity={disabled ? 1 : 0.7}
      onPress={onLinkPress}
      hitSlop={hitSlop}
    >
      <View style={linkInnerStyle}>
        <RText
          {...props}
          style={textStyle}
        />
        <Icon
          name="chevron-right"
          size={iconSize}
          color={color}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 5
  },
  underline: {
    textDecorationLine: "underline"
  },
  disabled: {
    opacity: 0.3
  },
});

export default Link;
