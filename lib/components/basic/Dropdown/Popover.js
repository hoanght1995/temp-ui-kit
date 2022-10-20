"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var native_1 = require("@react-spring/native");
var hooks_1 = require("../../../hooks");
var AnimatedView = (0, native_1.animated)(react_native_1.View);
var Popover = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, propOnClose = _a.onClose, _b = _a.animation, animation = _b === void 0 ? true : _b;
    var _c = (0, react_1.useState)(false), visible = _c[0], setVisible = _c[1];
    var popoverRef = (0, react_1.useRef)();
    var _d = (0, native_1.useSpring)(function () { return ({
        opacity: 0,
    }); }), opacity = _d[0].opacity, springHelpers = _d[1];
    var popoverStyle = (0, react_1.useMemo)(function () { return ([
        styles.popover,
        { opacity: opacity }
    ]); }, [opacity]);
    var onOpen = (0, react_1.useCallback)(function () {
        setVisible(true);
        springHelpers.start({
            opacity: 1,
            config: { duration: animation ? 100 : 0 }
        });
    }, [animation, springHelpers]);
    var onClose = (0, react_1.useCallback)(function () {
        if (!visible)
            return;
        if (propOnClose)
            propOnClose();
        springHelpers.start({
            opacity: 0,
            config: { duration: animation ? 100 : 0 },
            onRest: function () { return setVisible(false); }
        });
    }, [visible, animation, springHelpers, propOnClose]);
    (0, hooks_1.useClickAway)(popoverRef, onClose, visible);
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        open: onOpen,
        close: onClose,
    }); });
    if (!visible)
        return null;
    return (react_1.default.createElement(react_native_1.View, { style: styles.outer },
        react_1.default.createElement(AnimatedView, { ref: popoverRef, style: popoverStyle }, children)));
});
var styles = react_native_1.StyleSheet.create({
    outer: {
        height: 0,
        zIndex: 1,
    },
    popover: {
        top: 4,
        left: 0,
        right: 0,
        maxHeight: 300,
        minHeight: 80,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: "white",
    }
});
exports.default = Popover;
