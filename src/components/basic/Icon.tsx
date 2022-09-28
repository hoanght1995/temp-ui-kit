import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Svgs from "assets/svgs";
import { isUndefined, omitBy } from "lodash";

interface Props {
  style?: StyleProp<ViewStyle>,
  name: string,
  size?: number,
  color?: string,
  width?: number,
  height?: number,
}

const Icon = (props: Props) => {
  const { color, style, size, name, width, height } = props;
  const SvgComp = Svgs[name] ? Svgs[name] : View;

  const icWidth = width || size;
  const icHeight = height || size;

  if (SvgComp) return (
    <View style={style}>
      <SvgComp
        {...omitBy({
          fill: color,
          width: icWidth,
          height: icHeight,
        }, isUndefined)}
      />
    </View>
  );
  return (
    <View style={[style, { backgroundColor: color, width: icWidth, height: icHeight }]} />
  );
};

export default Icon;
