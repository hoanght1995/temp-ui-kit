import { useThemeContext } from "components/provider/ThemeProvider";
import { GUTTERS } from "constants/responsive";
import { BreakPointType } from "constants/types";
import React, { ReactElement } from "react";
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { getStyleByBreakpointRules } from "utils/screen-size";

export interface GridProps extends ViewProps {
  children: ReactElement[];
  style?: StyleProp<ViewStyle>;
  gutter?: number | number[];
  noPadding?: Boolean;
}

const getGutterValue = (gutter: number | number[] | undefined, screenSize: BreakPointType) => {
  if (typeof gutter === "number") return [gutter, gutter];
  if (!gutter?.length) return [GUTTERS[screenSize], GUTTERS[screenSize]];
  return gutter;
};

const Grid = (props: GridProps) => {
  const { screenSize = "md" } = useThemeContext();
  const [uniqId] = React.useState(String(Math.random()));
  const { style, children, gutter, noPadding, ...restProps } = props;
  const childArr = React.Children.toArray(children) as ReactElement[];
  const [gutterH, gutterV] = getGutterValue(gutter, screenSize);

  return (
    <View
      style={[styles.container, props.style, {
        flexWrap: "wrap",
        marginHorizontal: noPadding ? -gutterH : undefined,
        marginVertical: noPadding ? -gutterV : undefined,
        paddingHorizontal: gutterH / 2,
        paddingVertical: gutterV / 2,
      }]}
      {...restProps}
    >
      {childArr.map((child, index) => {
        const resStyle = getStyleByBreakpointRules(screenSize, child.props?.span);
        if (resStyle === undefined) return null;
        return (
          <View
            key={`${uniqId}${child.key}${index}`}
            style={[{
              paddingVertical: gutterV / 2,
              paddingHorizontal: gutterH / 2,
            }, resStyle]}
          >
            {child}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  }
});

export default Grid;
