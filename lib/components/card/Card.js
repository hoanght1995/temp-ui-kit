"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var ThemeProvider_1 = require("../provider/ThemeProvider");
var colors_1 = __importDefault(require("../../utils/colors"));
var SIZE = {
    xxs: 6,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
};
var Card = function (props) {
    var children = props.children, style = props.style, _a = props.size, size = _a === void 0 ? "md" : _a;
    var _b = (0, ThemeProvider_1.useThemeContext)().themeColor, themeColor = _b === void 0 ? colors_1.default.light : _b;
    var actualBackgroundColor = themeColor.backgroundQuinary;
    var actualPading = SIZE[size];
    return (react_1.default.createElement(react_native_1.View, { style: [
            style,
            styles.container,
            {
                backgroundColor: actualBackgroundColor,
                padding: actualPading,
            },
        ] }, children));
};
Card.displayName = "Card";
var styles = react_native_1.StyleSheet.create({
    container: {
        borderRadius: 4,
        marginBottom: 12,
    },
});
exports.default = Card;
