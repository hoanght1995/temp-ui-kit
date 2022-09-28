import { useThemeContext } from "components/provider/ThemeProvider";
import { CONTENT_MAX_WIDTH } from "constants/responsive";
import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";

export interface ScreenContainerProps {
  children?: ReactElement;
  backgroundColor?: string;
}

const ScreenContainer = (props: ScreenContainerProps) => {
  const { children, backgroundColor, ...restProps } = props;
  const { dimensions, screenSize } = useThemeContext();

  const contentWidth = (dimensions?.width && screenSize) ? Math.min(dimensions?.width - 16, CONTENT_MAX_WIDTH[screenSize]) : CONTENT_MAX_WIDTH.md;
  return (
    <View
      style={[styles.container, {
        minHeight: dimensions?.height,
        backgroundColor, 
      }]}
      {...restProps}
    >
      <View style={{ width: contentWidth, minHeight: dimensions?.height }}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  }
});

export default ScreenContainer;
