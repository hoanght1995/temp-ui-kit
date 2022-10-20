"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var borderWidth = 2;
var InnerCircle = function (props) {
    var radius = props.radius, innerBackgroundColor = props.innerBackgroundColor;
    var radiusMinusBorder = radius - borderWidth;
    var innerCircleStyle = {
        width: radiusMinusBorder * 2,
        height: radiusMinusBorder * 2,
        borderRadius: radiusMinusBorder,
        backgroundColor: innerBackgroundColor,
    };
    return react_1.default.createElement(react_native_1.View, { style: [styles.innerCircle, innerCircleStyle] });
};
var styles = react_native_1.StyleSheet.create({
    innerCircle: {
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    },
});
exports.default = InnerCircle;
