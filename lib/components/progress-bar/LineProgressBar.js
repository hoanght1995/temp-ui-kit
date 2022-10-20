"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var native_1 = require("@react-spring/native");
var colors_1 = __importDefault(require("../../utils/colors"));
var SIZE = {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
};
var LineProgressBar = function (props) {
    var _a = props.percent, percent = _a === void 0 ? 0 : _a, _b = props.size, size = _b === void 0 ? "xs" : _b;
    var springProps = (0, native_1.useSpring)({
        height: "100%",
        backgroundColor: colors_1.default.purple,
        position: "absolute",
        left: 0,
        top: 0,
        borderRadius: 100,
        width: "".concat(percent, "%"),
        from: { width: "0%" },
    });
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, { height: SIZE[size] }] },
        react_1.default.createElement(native_1.animated.View, { style: springProps })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        width: "100%",
        position: "relative",
        backgroundColor: colors_1.default.white,
        borderRadius: 100,
    },
});
exports.default = LineProgressBar;
