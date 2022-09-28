import { COLORS } from "constants";
import React from "react";
import { ActivityIndicator, StyleProp, View, ViewProps, ViewStyle } from "react-native";

export interface SpinProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  onPress?(): void;
  size?: "small" | "large" | number;
  color?: string;
}

const Spin = (props: SpinProps) => {
  const { style, color, size, ...restProps } = props;
  return (
    <View style={[style]} {...restProps}>
      <ActivityIndicator size={size || 14} color={color || COLORS.primaryA} />
    </View>
  );
};

export default Spin;
