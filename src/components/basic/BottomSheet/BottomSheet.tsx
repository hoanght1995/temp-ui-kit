import React, { useState, useMemo, ReactElement, forwardRef, useImperativeHandle, useCallback, useRef } from "react";
import {
  Modal,
  StyleSheet,
  Pressable,
  View,
  StyleProp,
  ViewStyle,
  Dimensions,
  PanResponder,
  ScrollView,
  TouchableWithoutFeedback,
  SafeAreaView,
  Animated,
  Easing,
  KeyboardAvoidingView
} from "react-native";

import COLORS from "constants/colors";
import { isWeb, isIos } from "utils/platform";
import Button from "../Button";
import { ModalProps } from "../Modal";
import Text from "../RText";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const KeyboardAvoider = isIos && !isWeb ? KeyboardAvoidingView : View;

const { height: SCREEN_HEIGHT } = Dimensions.get("screen");
const DEFAULT_HEIGHT = SCREEN_HEIGHT / 2;
const MAX_HEIGHT = SCREEN_HEIGHT * 0.9;
const EXTRA_BOTTOM_HEIGHT = 100;
const DRAG_THRESHOLD = 60;
const MAX_UPWARD = 40;

const Body = ({ children, style, scroll }: { children?: ReactElement, style: StyleProp<ViewStyle>, scroll?: boolean }) => {
  return scroll ? (
    <ScrollView style={style}>
      <TouchableWithoutFeedback>
        {children}
      </TouchableWithoutFeedback>
    </ScrollView>
  ) : (
    <View style={style}>
      {children}
    </View>
  );
};

const BottomSheet = forwardRef(({
  testID,
  title,
  onClose: propOnClose,
  children,
  actionButtons,
  backDropClosable = true,
  showTopHandler = true,
  scroll = false,
  height = DEFAULT_HEIGHT,
  bodyStyle,
}: ModalProps, ref) => {
  const [visible, setVisible] = useState(false);
  const caculatedHeight = (height === "100%" || height > MAX_HEIGHT) ? MAX_HEIGHT : height;
  const bottomSheetTranslateY = useRef(new Animated.Value(caculatedHeight)).current;
  const lastGestureDy = useRef(0);

  const springBack = useCallback(() => {
    Animated.spring(bottomSheetTranslateY, {
      toValue: 0,
      useNativeDriver: true
    }).start();
    lastGestureDy.current = 0;
  }, [bottomSheetTranslateY]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        if (gesture.dy + lastGestureDy.current < -MAX_UPWARD) return;

        bottomSheetTranslateY.setValue(gesture.dy + lastGestureDy.current);
      },
      onPanResponderRelease: (e, gesture) => {
        lastGestureDy.current += gesture.dy;

        if (lastGestureDy.current < -MAX_UPWARD) {
          lastGestureDy.current = -MAX_UPWARD;
        }

        if (gesture.dy > 0) {
          if (gesture.dy <= DRAG_THRESHOLD) springBack();
          else onClose(null, true);
        } else springBack();
      },
    })
  ).current;

  const backDropMaskStyle = useMemo(() => ([
    styles.backDropMask,
    {
      opacity: bottomSheetTranslateY.interpolate({
        inputRange: [0, caculatedHeight],
        outputRange: [1, 0],
        extrapolate: "clamp"
      })
    }
  ]), [caculatedHeight, bottomSheetTranslateY]);

  const bottomSheetStyle = useMemo(() => ([
    styles.bottomSheet,
    {
      height: caculatedHeight,
      transform: [{
        translateY: bottomSheetTranslateY
      }]
    }
  ]), [caculatedHeight, bottomSheetTranslateY]);

  const onOpen = useCallback(() => {
    setVisible(true);

    Animated.spring(bottomSheetTranslateY, {
      toValue: 0,
      useNativeDriver: true
    }).start();
  }, [bottomSheetTranslateY]);

  const onClose = useCallback((e?: any, force?: boolean) => {
    if (!visible && !force) return;

    Animated.timing(bottomSheetTranslateY, {
      toValue: caculatedHeight,
      duration: 250,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true
    }).start(() => {
      setVisible(false);
      if (propOnClose) propOnClose();
    });

    lastGestureDy.current = 0;
  }, [visible, caculatedHeight, bottomSheetTranslateY, propOnClose]);

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
      <Animated.View style={backDropMaskStyle} />
      <Pressable
        testID={testID}
        style={styles.backDrop}
        onPress={onBackDropClose}
      >
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAvoider behavior="padding" style={styles.keyboardAvoider}>
            <AnimatedPressable style={bottomSheetStyle}>
              <View {...panResponder.panHandlers} style={styles.content}>
                {showTopHandler && (
                  <View style={styles.header}>
                    <View style={styles.handler} />
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
                )}
                <Body
                  style={[styles.body, bodyStyle]}
                  scroll={scroll}
                >
                  {children}
                </Body>
                {actionButtons && (
                  <View style={styles.footer}>
                    {actionButtons.map((button, index) => (
                      <Button
                        key={index}
                        {...button}
                        style={{
                          ...button.style,
                          flex: 1,
                          marginRight: actionButtons.length - 1 > index ? 15 : 0
                        }}
                      />
                    ))}
                  </View>
                )}
              </View>
              <View style={styles.extraBottom} />
            </AnimatedPressable>
          </KeyboardAvoider>
        </SafeAreaView>
      </Pressable>
    </Modal>
  );
});

const styles = StyleSheet.create({
  backDropMask: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  backDrop: {
    flex: 1,
    cursor: "default",
    position: "relative"
  },
  safeArea: {
    flex: 1
  },
  bottomSheet: {
    position: "relative",
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
    width: "100%",
    maxHeight: "90%",

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
  content: {
    flex: 1
  },
  header: {
    alignItems: "center",
    paddingTop: 8,
    marginBottom: 10,
    minHeight: 30
  },
  handler: {
    width: 48,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.gray200
  },
  body: {
    flex: 1
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
  title: {
    marginTop: 15
  },
  keyboardAvoider: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  extraBottom: {
    position: "absolute",
    height: EXTRA_BOTTOM_HEIGHT,
    bottom: -EXTRA_BOTTOM_HEIGHT,
    left: 0,
    right: 0,
    backgroundColor: "white"
  }
});

BottomSheet.displayName = "BottomSheet";

export default BottomSheet;
