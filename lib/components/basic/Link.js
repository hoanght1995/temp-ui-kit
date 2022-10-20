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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var colors_1 = __importDefault(require("../../utils/colors"));
var RText_1 = __importDefault(require("../basic/RText"));
var Icon_1 = __importDefault(require("../basic/Icon"));
var CONFIGS = {
    // [iconSize]
    d1: [96],
    d2: [52],
    d3: [44],
    d4: [36],
    h1: [40],
    h2: [36],
    h3: [32],
    h4: [28],
    h5: [24],
    h6: [20],
    l1: [20],
    l2: [18],
    l3: [16],
    l4: [14],
    l5: [12],
    l6: [10],
    l1b: [20],
    l2b: [18],
    l3b: [16],
    l4b: [14],
    l5b: [12],
    l6b: [10],
};
var hitSlop = { top: 4, bottom: 4, left: 4, right: 4 };
var Link = function (_a) {
    var propLinkStyle = _a.linkStyle, underline = _a.underline, disabled = _a.disabled, onPress = _a.onPress, style = _a.style, props = __rest(_a, ["linkStyle", "underline", "disabled", "onPress", "style"]);
    var _b = props.color, color = _b === void 0 ? colors_1.default.contentPrimary : _b, type = props.type;
    var iconSize = CONFIGS[type || "l4"][0];
    var linkInnerStyle = [
        styles.link,
        disabled && styles.disabled
    ];
    var textStyle = underline ? [styles.underline, style] : style;
    var onLinkPress = (0, react_1.useCallback)(function (e) {
        if (onPress && !disabled)
            onPress(e);
    }, [disabled, onPress]);
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: propLinkStyle, activeOpacity: disabled ? 1 : 0.7, onPress: onLinkPress, hitSlop: hitSlop },
        react_1.default.createElement(react_native_1.View, { style: linkInnerStyle },
            react_1.default.createElement(RText_1.default, __assign({}, props, { style: textStyle })),
            react_1.default.createElement(react_native_1.View, { style: styles.icon },
                react_1.default.createElement(Icon_1.default, { name: "chevron-right", size: iconSize, color: color })))));
};
var styles = react_native_1.StyleSheet.create({
    link: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginLeft: 5
    },
    underline: {
        textDecorationLine: "underline"
    },
    disabled: {
        opacity: 0.3
    },
});
exports.default = Link;
