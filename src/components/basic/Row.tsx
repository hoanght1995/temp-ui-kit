import React, { ReactElement } from "react";
import { Pressable, StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";

export interface RowProps extends ViewProps {
  children?: ReactElement | ReactElement[];
  style?: StyleProp<ViewStyle>;
  onPress?(): void;
}

const Row = (props: RowProps) => {
  const { style, children, ...restProps } = props;
  const ViewComp = props.onPress ? Pressable : View;
  return (
    <ViewComp style={[styles.container, props.style]} {...restProps}>
      {children}
    </ViewComp>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  }
});

export default Row;
