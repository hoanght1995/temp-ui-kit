import React, { useCallback, useState, useMemo, ReactElement } from "react";
import { View, TextInput, StyleSheet, TextInputProps, TouchableOpacity, ViewStyle, StyleProp } from "react-native";
import lodash from "lodash";

import { COLORS } from "constants";
import RText from "components/basic/RText";
import Button from "components/basic/Button";
import Icon from "components/basic/Icon";

export interface RTextInputProps extends TextInputProps {
  error?: boolean | string;
  size?: "md" | "lg";
  label?: string;
  info?: string;
  left?: ReactElement;
  right?: ReactElement;
  actionButton?: {
    title: string;
    onPress: () => void;
  };
  disabled?: boolean;
  readOnly?: boolean;
  fluid?: boolean;
  style?: StyleProp<ViewStyle>;
}

const CONFIGS = {
  // [height, labelType, actionButtonSize]
  md: [40, "l4", "xs"],
  lg: [48, "l3", "sm"],
};

const RTextInput = ({
  style,
  size,
  label,
  info,
  left,
  right,
  actionButton,
  disabled,
  readOnly,
  error,
  fluid = true,
  ...props
}: RTextInputProps) => {
  const [status, setStatus] = useState<"focus" | null>(null);
  const configsBySize: any = CONFIGS[size || "md"];

  const onBlur = useCallback(() => {
    setStatus(null);
  }, []);

  const onFocus = useCallback(() => {
    setStatus("focus");
  }, []);

  const textInputBoxStyle = useMemo(() => [
    styles.textInputBox,
    status === "focus" && !disabled && !readOnly && styles.focus,
    readOnly && styles.readOnly,
    !!error && styles.error,
    disabled && styles.disabled,
    {
      height: configsBySize[0],
    }
  ], [readOnly, error, disabled, configsBySize, status]);

  return (
    <View style={[style, styles.outer, fluid && styles.fluid]}>
      {(!!label || !!info) && (
        <View style={styles.titleBox}>
          {!!label && (
            <RText type={configsBySize[1]} style={styles.titleText}>
              {label}
            </RText>
          )}
          {!!info && (
            <TouchableOpacity>
              <Icon name="circle-info" size={17.5} />
            </TouchableOpacity>
          )}
        </View>
      )}
      <View style={textInputBoxStyle}>
        {Boolean(left) && (
          <View style={styles.leftElement}>{left}</View>
        )}
        <TextInput
          {...props}
          editable={!disabled && !readOnly}
          placeholderTextColor={COLORS.text200}
          onBlur={onBlur}
          onFocus={onFocus}
          style={styles.textInput}
        />
        {Boolean(right) && (
          <View style={styles.rightElement}>{right}</View>
        )}
        {!!actionButton && (
          <Button
            type="light"
            disable={disabled}
            size={configsBySize[2]}
            style={styles.actionButton}
            title={actionButton.title}
            onPress={actionButton.onPress}
          />
        )}
      </View>
      {lodash.isString(error) && (
        <RText
          type="l5"
          style={styles.errorText}
        >
          {error}
        </RText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  outer: {
    minWidth: 200
  },
  titleBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6
  },
  titleText: {
    marginRight: 8
  },
  textInputBox: {
    borderWidth: 1,
    borderColor: COLORS.gray200,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    outlineWidth: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  focus: {
    borderColor: COLORS.purple,
    shadowColor: COLORS.purple,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    outlineColor: COLORS.lightPurple800,
    outlineStyle: "solid",
  },
  readOnly: {
    backgroundColor: COLORS.violet100,
    borderColor: COLORS.violet100
  },
  error: {
    borderColor: COLORS.red500,
  },
  disabled: {
    backgroundColor: COLORS.gray300,
    borderColor: COLORS.gray300,
    opacity: 0.5
  },
  textInput: {
    height: "100%",
    fontSize: 16,
    outlineStyle: "none",
    flex: 1,
    marginHorizontal: 12
  },
  actionButton: {
    marginRight: 6,
    backgroundColor: COLORS.violet40,
    borderWidth: 0
  },
  errorText: {
    color: COLORS.red500,
    marginTop: 3
  },
  leftElement: {
    marginLeft: 6,
    flexDirection: "row",
    alignItems: "center"
  },
  rightElement: {
    marginRight: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  fluid: {
    width: "100%"
  }
});

export default RTextInput;
