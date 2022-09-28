import { SpanType } from "constants/types";
import React, { ReactElement } from "react";
import { Pressable, StyleProp, View, ViewProps, ViewStyle } from "react-native";

export interface ColProps extends ViewProps {
  children?: ReactElement;
  style?: StyleProp<ViewStyle>;
  onPress?(): void;
  span?: SpanType;
}

const Col = (props: ColProps) => {
  const { style, children, ...restProps } = props;
  const ViewComp = props.onPress ? Pressable : View;
  return (
    <ViewComp style={props.style} {...restProps}>
      {children}
    </ViewComp>
  );
};

export default Col;
