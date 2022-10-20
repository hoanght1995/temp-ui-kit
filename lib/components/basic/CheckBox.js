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
var RText_1 = __importDefault(require("../basic/RText"));
var utils_1 = require("../../utils");
var hooks_1 = require("../../hooks");
var Icon_1 = __importDefault(require("./Icon"));
var CheckBox = function (props) {
    var labelType = props.labelType, disabled = props.disabled, onPress = props.onPress, style = props.style, title = props.title, checked = props.checked, restProps = __rest(props, ["labelType", "disabled", "onPress", "style", "title", "checked"]);
    var _a = react_1.default.useState(checked), isChecked = _a[0], setChecked = _a[1];
    var _b = (0, hooks_1.useHover)(), _c = _b[0], hoverProps = _c === void 0 ? {} : _c, isHovered = _b[1];
    var containerStyle = [
        styles.container,
        style,
        disabled && styles.disabled,
    ];
    var onCheckBoxPress = (0, react_1.useCallback)(function (e) {
        if (disabled)
            return;
        if (onPress)
            onPress(e);
        setChecked(!isChecked);
    }, [disabled, onPress, isChecked]);
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { activeOpacity: disabled ? 1 : 0.7, onPress: onCheckBoxPress, disabled: disabled, style: containerStyle },
        react_1.default.createElement(react_native_1.View, __assign({ style: [
                styles.icon,
                (isHovered && !disabled) && styles.hoverBox,
            ] }, hoverProps, restProps), isChecked
            ?
                react_1.default.createElement(react_native_1.View, { style: styles.checkedBox },
                    react_1.default.createElement(Icon_1.default, { name: "check", size: 16, color: "#000" }))
            :
                react_1.default.createElement(react_native_1.View, { style: styles.checkBox })),
        react_1.default.createElement(RText_1.default, { type: labelType || "l4" }, title)));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginRight: 8,
        padding: 4,
        borderRadius: 4,
    },
    checkBox: {
        width: 16,
        height: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: utils_1.COLORS.violet600,
    },
    checkedBox: {
        width: 16,
        height: 16,
        borderRadius: 4,
        backgroundColor: utils_1.COLORS.primaryA,
        alignItems: "center",
        justifyContent: "center",
    },
    hoverBox: {
        backgroundColor: "rgba(155, 89, 182, 0.2)",
    },
    disabled: {
        opacity: 0.3
    },
});
exports.default = CheckBox;
