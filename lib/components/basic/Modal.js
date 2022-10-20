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
var native_1 = require("@react-spring/native");
var colors_1 = __importDefault(require("../../utils/colors"));
var platform_1 = require("../../utils/platform");
var Button_1 = __importDefault(require("./Button"));
var RText_1 = __importDefault(require("./RText"));
var Icon_1 = __importDefault(require("./Icon"));
var KeyboardAvoider = platform_1.isIos && !platform_1.isWeb ? react_native_1.KeyboardAvoidingView : react_1.default.Fragment;
var AnimatedPressable = (0, native_1.animated)(react_native_1.Pressable);
var hitSlop = {
    top: 5,
    bottom: 5,
    left: 5,
    right: 5
};
var ModalComponent = (0, react_1.forwardRef)(function (_a, ref) {
    var testID = _a.testID, title = _a.title, propOnClose = _a.onClose, children = _a.children, headerButtons = _a.headerButtons, actionButtons = _a.actionButtons, onBack = _a.onBack, _b = _a.backDropClosable, backDropClosable = _b === void 0 ? true : _b, _c = _a.closable, closable = _c === void 0 ? true : _c, _d = _a.width, width = _d === void 0 ? 520 : _d, _e = _a.animation, animation = _e === void 0 ? true : _e, bodyStyle = _a.bodyStyle;
    var backdropTestID = testID ? "".concat(testID, "-modal-backdrop") : undefined;
    var _f = (0, react_1.useState)(false), visible = _f[0], setVisible = _f[1];
    var _g = (0, native_1.useSpring)(function () { return ({
        backDropOpacity: 0,
        modalScale: 0.9,
    }); }), _h = _g[0], backDropOpacity = _h.backDropOpacity, modalScale = _h.modalScale, springHelpers = _g[1];
    var backDropStyle = (0, react_1.useMemo)(function () { return ([
        styles.backDrop,
        { opacity: backDropOpacity }
    ]); }, [backDropOpacity]);
    var modalStyle = (0, react_1.useMemo)(function () { return ([
        styles.modalView,
        {
            width: width,
            maxWidth: width,
            transform: [{ scale: modalScale }]
        }
    ]); }, [modalScale, width]);
    var onOpen = (0, react_1.useCallback)(function () {
        setVisible(true);
        springHelpers.start({
            backDropOpacity: 1,
            modalScale: 1,
            config: { duration: animation ? 100 : 0 }
        });
    }, [animation, springHelpers]);
    var onClose = (0, react_1.useCallback)(function () {
        springHelpers.start({
            backDropOpacity: 0,
            modalScale: 0.9,
            config: { duration: animation ? 100 : 0 },
            onRest: function () {
                setVisible(false);
                if (propOnClose)
                    propOnClose();
            }
        });
    }, [animation, springHelpers, propOnClose]);
    var onBackDropClose = function () {
        if (backDropClosable)
            onClose();
    };
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        open: onOpen,
        close: onClose,
    }); });
    return (react_1.default.createElement(react_native_1.Modal, { transparent: true, visible: visible, onRequestClose: onClose },
        react_1.default.createElement(KeyboardAvoider, { behavior: "padding", style: styles.keyboardAvoider },
            react_1.default.createElement(AnimatedPressable, { testID: backdropTestID, style: backDropStyle, onPress: onBackDropClose },
                react_1.default.createElement(react_native_1.ScrollView, { centerContent: true, style: styles.scroll, contentContainerStyle: styles.scrollContentContainer, contentInsetAdjustmentBehavior: "automatic", keyboardShouldPersistTaps: "handled" },
                    react_1.default.createElement(AnimatedPressable, { style: modalStyle, testID: testID },
                        Boolean(title || onBack || (headerButtons === null || headerButtons === void 0 ? void 0 : headerButtons.length)) && (react_1.default.createElement(react_native_1.View, { style: styles.header },
                            react_1.default.createElement(react_native_1.View, { style: styles.headerLeft },
                                onBack && (react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onBack, style: styles.backButton, hitSlop: hitSlop },
                                    react_1.default.createElement(Icon_1.default, { name: "chevron-left" }))),
                                !!title && (react_1.default.createElement(RText_1.default, { testID: "modal-dialog-title", ellipsizeMode: "tail", type: "l2b", numberOfLines: 1, style: styles.title }, title))),
                            react_1.default.createElement(react_native_1.View, { style: styles.headerRight }, headerButtons === null || headerButtons === void 0 ? void 0 :
                                headerButtons.map(function (button, index) { return (react_1.default.createElement(react_native_1.TouchableOpacity, { key: index, onPress: button.onPress, style: styles.headerRightButton, hitSlop: hitSlop },
                                    react_1.default.createElement(Icon_1.default, { name: button.icon, size: 25 }))); }),
                                closable && (react_1.default.createElement(react_native_1.TouchableOpacity, { testID: "modal-close", onPress: onClose, style: styles.headerRightButton, hitSlop: hitSlop },
                                    react_1.default.createElement(Icon_1.default, { name: "close", size: 25 })))))),
                        react_1.default.createElement(react_native_1.View, { style: [styles.body, bodyStyle], testID: "modal-body" }, children),
                        actionButtons && (react_1.default.createElement(react_native_1.View, { style: styles.footer }, actionButtons.map(function (button, index) { return (react_1.default.createElement(Button_1.default, __assign({ key: index }, button, { style: [button.style, {
                                    flex: platform_1.isWeb ? undefined : 1,
                                    marginRight: actionButtons.length - 1 > index ? 15 : 0
                                }] }))); })))))))));
});
var styles = react_native_1.StyleSheet.create({
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
        backgroundColor: colors_1.default.white,
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
        backgroundColor: colors_1.default.violet40,
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
        borderTopColor: colors_1.default.gray200
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
exports.default = ModalComponent;
