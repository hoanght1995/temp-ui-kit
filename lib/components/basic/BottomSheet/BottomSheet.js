"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var colors_1 = __importDefault(require("../../../utils/colors"));
var hooks_1 = require("../../../hooks");
var platform_1 = require("../../../utils/platform");
var Button_1 = __importDefault(require("../Button"));
var RText_1 = __importDefault(require("../RText"));
var AnimatedPressable = react_native_1.Animated.createAnimatedComponent(react_native_1.Pressable);
var KeyboardAvoider = platform_1.isIos && !platform_1.isWeb ? react_native_1.KeyboardAvoidingView : react_native_1.View;
var EXTRA_BOTTOM_HEIGHT = 100;
var DRAG_THRESHOLD = 60;
var MAX_UPWARD = 40;
var getHeights = function () {
    var screenHeight = react_native_1.Dimensions.get("screen").height;
    var bottomSheetDefaultHeight = screenHeight / 2;
    var bottomSheetMaxHeight = screenHeight * 0.9;
    return {
        bottomSheetDefaultHeight: bottomSheetDefaultHeight,
        bottomSheetMaxHeight: bottomSheetMaxHeight
    };
};
var Body = function (_a) {
    var children = _a.children, style = _a.style, scroll = _a.scroll, testID = _a.testID;
    return scroll ? (react_1.default.createElement(react_native_1.ScrollView, { style: styles.outerBody, contentContainerStyle: style, testID: testID, keyboardShouldPersistTaps: "handled" },
        react_1.default.createElement(react_native_1.Pressable, null, children))) : (react_1.default.createElement(react_native_1.View, { style: [styles.outerBody, style], testID: testID }, children));
};
var BottomSheet = (0, react_1.forwardRef)(function (_a, ref) {
    var testID = _a.testID, title = _a.title, propOnClose = _a.onClose, children = _a.children, actionButtons = _a.actionButtons, _b = _a.closable, closable = _b === void 0 ? true : _b, _c = _a.backDropClosable, backDropClosable = _c === void 0 ? true : _c, _d = _a.showTopHandler, showTopHandler = _d === void 0 ? true : _d, _e = _a.scroll, scroll = _e === void 0 ? false : _e, height = _a.height, bodyStyle = _a.bodyStyle, _f = _a.animation, animation = _f === void 0 ? true : _f;
    var orientation = (0, hooks_1.useOrientation)();
    /* eslint-disable-next-line */
    var _g = (0, react_1.useMemo)(function () { return getHeights(); }, [orientation]), bottomSheetDefaultHeight = _g.bottomSheetDefaultHeight, bottomSheetMaxHeight = _g.bottomSheetMaxHeight;
    height = height || bottomSheetDefaultHeight;
    var backdropTestID = testID ? "".concat(testID, "-modal-backdrop") : undefined;
    var _h = (0, react_1.useState)(false), visible = _h[0], setVisible = _h[1];
    var caculatedHeight = (height === "100%" || height > bottomSheetMaxHeight) ? bottomSheetMaxHeight : height;
    var bottomSheetTranslateY = (0, react_1.useRef)(new react_native_1.Animated.Value(caculatedHeight)).current;
    var lastGestureDy = (0, react_1.useRef)(0);
    var closeRef = (0, react_1.useRef)(function () { return null; });
    var springBack = (0, react_1.useCallback)(function () {
        react_native_1.Animated.spring(bottomSheetTranslateY, {
            toValue: 0,
            useNativeDriver: true
        }).start();
        lastGestureDy.current = 0;
    }, [bottomSheetTranslateY]);
    var panResponder = (0, react_1.useRef)(react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: function () { return true; },
        onPanResponderMove: function (e, gesture) {
            if (gesture.dy + lastGestureDy.current < -MAX_UPWARD)
                return;
            bottomSheetTranslateY.setValue(gesture.dy + lastGestureDy.current);
        },
        onPanResponderRelease: function (e, gesture) {
            lastGestureDy.current += gesture.dy;
            if (lastGestureDy.current < -MAX_UPWARD) {
                lastGestureDy.current = -MAX_UPWARD;
            }
            if (gesture.dy > 0) {
                if (gesture.dy <= DRAG_THRESHOLD)
                    springBack();
                else
                    closeRef.current();
            }
            else
                springBack();
        },
    })).current;
    var backDropMaskStyle = (0, react_1.useMemo)(function () { return ([
        styles.backDropMask,
        {
            opacity: animation ? bottomSheetTranslateY.interpolate({
                inputRange: [0, caculatedHeight],
                outputRange: [1, 0],
                extrapolate: "clamp"
            }) : 1
        }
    ]); }, [animation, caculatedHeight, bottomSheetTranslateY]);
    var bottomSheetStyle = (0, react_1.useMemo)(function () { return ([
        styles.bottomSheet,
        {
            height: caculatedHeight,
            transform: [{
                    translateY: animation ? bottomSheetTranslateY : 0
                }]
        }
    ]); }, [animation, caculatedHeight, bottomSheetTranslateY]);
    var onOpen = (0, react_1.useCallback)(function () {
        setVisible(true);
        react_native_1.Animated.spring(bottomSheetTranslateY, {
            toValue: 0,
            useNativeDriver: true,
        }).start();
    }, [bottomSheetTranslateY]);
    var onClose = (0, react_1.useCallback)(function () {
        if (!visible)
            return;
        react_native_1.Animated.timing(bottomSheetTranslateY, {
            toValue: caculatedHeight,
            duration: animation ? 250 : 0,
            easing: react_native_1.Easing.out(react_native_1.Easing.ease),
            useNativeDriver: true
        }).start(function () {
            setVisible(false);
            if (propOnClose)
                propOnClose();
        });
        lastGestureDy.current = 0;
    }, [animation, visible, caculatedHeight, bottomSheetTranslateY, propOnClose]);
    (0, react_1.useEffect)(function () {
        closeRef.current = onClose;
    }, [onClose]);
    var onBackDropClose = function () {
        if (backDropClosable)
            onClose();
    };
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        open: onOpen,
        close: onClose,
    }); });
    return (react_1.default.createElement(react_native_1.Modal, { transparent: true, visible: visible, onRequestClose: onClose, supportedOrientations: ["portrait", "landscape"] },
        react_1.default.createElement(react_native_1.Animated.View, { style: backDropMaskStyle }),
        react_1.default.createElement(react_native_1.Pressable, { testID: backdropTestID, style: styles.backDrop, onPress: onBackDropClose },
            react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.safeArea },
                react_1.default.createElement(KeyboardAvoider, { behavior: "padding", style: styles.keyboardAvoider },
                    react_1.default.createElement(AnimatedPressable, { style: bottomSheetStyle, testID: testID },
                        closable && (react_1.default.createElement(react_native_1.Pressable, { testID: "modal-close", onPress: onClose, style: styles.hiddenCloseButton })),
                        react_1.default.createElement(react_native_1.View, __assign({}, panResponder.panHandlers, { style: styles.content }),
                            showTopHandler && (react_1.default.createElement(react_native_1.View, { style: [styles.header, !!title && styles.headerBottomBorder] },
                                react_1.default.createElement(react_native_1.View, { style: styles.handler }),
                                !!title && (react_1.default.createElement(RText_1.default, { testID: "modal-dialog-title", ellipsizeMode: "tail", type: "l2b", numberOfLines: 1, style: styles.title }, title)))),
                            react_1.default.createElement(Body, { style: [styles.body, !showTopHandler && styles.roundedTopBody, bodyStyle], scroll: scroll, testID: "modal-body" }, children),
                            actionButtons && (react_1.default.createElement(react_native_1.View, { style: styles.footer }, actionButtons.map(function (button, index) { return (react_1.default.createElement(Button_1.default, __assign({ key: index }, button, { style: [button.style, {
                                        flex: 1,
                                        marginRight: actionButtons.length - 1 > index ? 15 : 0
                                    }] }))); })))),
                        react_1.default.createElement(react_native_1.View, { style: styles.extraBottom })))))));
});
var styles = react_native_1.StyleSheet.create({
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
        backgroundColor: colors_1.default.white,
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
        flex: 1,
    },
    header: {
        alignItems: "center",
        paddingTop: 8,
        paddingBottom: 10,
        minHeight: 30
    },
    headerBottomBorder: {
        borderBottomColor: colors_1.default.gray200,
        borderBottomWidth: 1
    },
    handler: {
        width: 48,
        height: 6,
        borderRadius: 3,
        backgroundColor: colors_1.default.gray200
    },
    outerBody: {
        flex: 1,
    },
    body: {
        padding: 16
    },
    roundedTopBody: {
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: "hidden"
    },
    footer: {
        padding: 16,
        flexDirection: "row",
        justifyContent: "flex-end",
        borderTopWidth: 0.5,
        borderTopColor: colors_1.default.gray200
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
    },
    // for e2e testing
    hiddenCloseButton: {
        position: "absolute",
        top: -20,
        right: 0,
        width: 20,
        height: 20
    },
});
BottomSheet.displayName = "BottomSheet";
exports.default = BottomSheet;
