import React, { useState, useMemo, ReactElement, forwardRef, useImperativeHandle, useCallback } from "react";
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  StyleProp
} from "react-native";
import { animated, useSpring } from "@react-spring/native";

import COLORS from "constants/colors";
import { isWeb, isIos } from "utils/platform";
import Button, { ButtonProps } from "./Button";
import Text from "./RText";
import Icon from "./Icon";

export interface ModalProps {
  testID?: string;
  title?: string;
  onClose?: () => void;
  children?: ReactElement;
  headerButtons?: {
    icon: string;
    onPress?: () => void;
  }[],
  actionButtons?: ButtonProps[],
  onBack?: () => void;
  backDropClosable?: boolean;
  closable?: boolean;
  width?: number;
  animation?: boolean;
  bodyStyle?: StyleProp<any>

  // for bottom sheet
  showTopHandler?: boolean;
  scroll?: boolean;
  height?: number | "100%";
}

const KeyboardAvoider = isIos && !isWeb ? KeyboardAvoidingView : React.Fragment;
const AnimatedPressable = animated(Pressable);
const hitSlop = {
  top: 5,
  bottom: 5,
  left: 5,
  right: 5
};

const ModalComponent = forwardRef(({
  testID,
  title,
  onClose: propOnClose,
  children,
  headerButtons,
  actionButtons,
  onBack,
  backDropClosable = true,
  closable = true,
  width = 520,
  animation = true,
  bodyStyle,
}: ModalProps, ref) => {
  const [visible, setVisible] = useState(false);

  const [{ backDropOpacity, modalScale }, springHelpers] = useSpring(() => ({
    backDropOpacity: 0,
    modalScale: 0.9,
  }));

  const backDropStyle = useMemo(() => ([
    styles.backDrop,
    { opacity: backDropOpacity }
  ]), [backDropOpacity]);

  const modalStyle = useMemo(() => ([
    styles.modalView,
    {
      width,
      maxWidth: width,
      transform: [{ scale: modalScale }]
    }
  ]), [modalScale, width]);

  const onOpen = useCallback(() => {
    setVisible(true);

    springHelpers.start({
      backDropOpacity: 1,
      modalScale: 1,
      config: { duration: animation ? 100 : 0 }
    });
  }, [animation, springHelpers]);

  const onClose = useCallback(() => {
    springHelpers.start({
      backDropOpacity: 0,
      modalScale: 0.9,
      config: { duration: animation ? 100 : 0 },
      onRest: () => {
        setVisible(false);
        if (propOnClose) propOnClose();
      }
    });
  }, [animation, springHelpers, propOnClose]);

  const onBackDropClose = () => {
    if (backDropClosable) onClose();
  };

  useImperativeHandle(ref, () => ({
    open: onOpen,
    close: onClose,
  }));

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <KeyboardAvoider
        behavior="padding"
        style={styles.keyboardAvoider}
      >
        <AnimatedPressable
          testID={testID}
          style={backDropStyle}
          onPress={onBackDropClose}
        >
          <ScrollView
            centerContent
            style={styles.scroll}
            contentContainerStyle={styles.scrollContentContainer}
            contentInsetAdjustmentBehavior="automatic"
            keyboardShouldPersistTaps="handled"
          >
            <AnimatedPressable style={modalStyle}>
              {Boolean(title || onBack || headerButtons?.length) && (
                <View style={styles.header}>
                  <View style={styles.headerLeft}>
                    {onBack && (
                      <TouchableOpacity
                        onPress={onBack}
                        style={styles.backButton}
                        hitSlop={hitSlop}
                      >
                        <Icon name="chevron-left" />
                      </TouchableOpacity>
                    )}
                    {!!title && (
                      <Text
                        ellipsizeMode="tail"
                        type="l2b"
                        numberOfLines={1}
                        style={styles.title}
                      >
                        {title}
                      </Text>
                    )}
                  </View>
                  <View style={styles.headerRight}>
                    {headerButtons?.map((button, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={button.onPress}
                        style={styles.headerRightButton}
                        hitSlop={hitSlop}
                      >
                        <Icon name={button.icon} size={25} />
                      </TouchableOpacity>
                    ))}
                    {closable && (
                      <TouchableOpacity
                        onPress={onClose}
                        style={styles.headerRightButton}
                        hitSlop={hitSlop}
                      >
                        <Icon name="close" size={25} />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              )}
              <View style={[styles.body, bodyStyle]}>
                {children}
              </View>
              {actionButtons && (
                <View style={styles.footer}>
                  {actionButtons.map((button, index) => (
                    <Button
                      key={index}
                      {...button}
                      style={{
                        ...button.style,
                        flex: isWeb ? undefined : 1,
                        marginRight: actionButtons.length - 1 > index ? 15 : 0
                      }}
                    />
                  ))}
                </View>
              )}
            </AnimatedPressable>
          </ScrollView>
        </AnimatedPressable>
      </KeyboardAvoider>
    </Modal>
  );
});

const styles = StyleSheet.create({
  headerRightButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    width: 25,
    height: 25
  },
  backDrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    cursor: "default",
    flexDirection: "row"
  },
  modalView: {
    margin: 15,
    backgroundColor: COLORS.white,
    borderRadius: 4,
    flex: 1,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,

    cursor: "default"
  },
  header: {
    backgroundColor: COLORS.violet40,
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center"
  },
  backButton: {
    marginRight: 10
  },
  body: {
    padding: 16
  },
  footer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
    borderTopWidth: 0.5,
    borderTopColor: COLORS.gray200
  },
  scroll: {
    maxHeight: "100%"
  },
  scrollContentContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    flex: 1
  },
  keyboardAvoider: {
    flex: 1
  }
});

ModalComponent.displayName = "Modal";

export default ModalComponent;
