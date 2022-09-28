import RText from "./RText";
import React, { ReactElement } from "react";
import { Pressable, StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { COLORS } from "constants";
import { useHover } from "hooks";
import Spin from "./Spin";

export interface ButtonProps extends ViewProps {
  onRef?(ref: any): void,
  children?: ReactElement;
  style?: ViewStyle;
  title?: string;
  onPress?(): void;
  disable?: Boolean;
  loading?: Boolean;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
  type?: "primary" | "light" | "text";
  shape?: "square" | "round";
  left?: ReactElement;
  right?: ReactElement;
}

const SIZES = {
  // [paddingHorizontal, height, titleType]
  xxs: [6, 24, "l5"],
  xs: [8, 28, "l4"],
  sm: [12, 36, "l4"],
  md: [16, 40, "l3"],
  lg: [16, 48, "l3"],
  xl: [24, 56, "l1"],
};

const TYPES = {
  primary: {
    container: {
      backgroundColor: COLORS.primaryA,
    },
    hoverContainer: {
      backgroundColor: COLORS.darkPurple100,
    },
    title: {
      color: COLORS.white,
    },
    spin: {
      color: COLORS.white,
    },
  },
  light: {
    container: {
      borderWidth: 1,
      borderColor: COLORS.gray300,
    },
    hoverContainer: {
      backgroundColor: COLORS.gray50,
    },
    title: {
      color: COLORS.text800,
    },
    spin: {
      color: COLORS.purple,
    },
  },
  text: {
    container: {
    },
    hoverContainer: {
      backgroundColor: COLORS.gray50,
    },
    title: {
      color: COLORS.text800,
    },
    spin: {
      color: COLORS.purple,
    },
  },
};

const Button = (props: ButtonProps) => {
  const { style, children, title, onRef, disable, loading, size, type, shape, left, right, ...restProps } = props;
  const [hoverProps = {}, isHovered] = useHover();
  const styleBySize: any = SIZES[size || "md"];
  const styleByType = TYPES[type || "primary"];

  const combineStyles = [
    styles.container,
    styleByType.container,
    (isHovered && !disable) && styleByType.hoverContainer,
    {
      paddingHorizontal: shape ? 0 : styleBySize[0],
      height: styleBySize[1],
      width: shape ? styleBySize[1] : undefined,
      borderRadius: shape === "round" ? 999 : undefined,
    },
    props.style,
    { opacity: disable ? 0.32 : 1 }, // overide any style
  ];

  return (
    <Pressable
      style={combineStyles}
      {...hoverProps}
      {...restProps}
    >
      {Boolean(left) &&
        <View style={{ marginRight: shape ? 0 : 6 }}>
          {left}
        </View>
      }
      {Boolean(title) &&
        <RText
          numberOfLines={1}
          title={title}
          type={styleBySize[2]}
          style={styleByType.title}
        />
      }
      {Boolean(right) &&
        <View style={{ marginLeft: shape ? 0 : 6 }}>
          {right}
        </View>
      }
      {loading &&
        <Spin
          style={{ marginLeft: 6 }}
          color={styleByType.spin.color}
        />
      }
    </Pressable>
  );
};

Button.defaultProps = {
  size: "md",
  type: "primary",
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  spin: {
    marginLeft: 6,
  }
});

export default Button;
