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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var colors_1 = __importDefault(require("../../utils/colors"));
var HalfCircle_1 = __importStar(require("./HalfCircle"));
var InnerCircle_1 = __importDefault(require("./InnerCircle"));
var SIZE = {
    xs: 10,
    sm: 14,
    md: 18,
    lg: 22,
    xl: 26,
};
var trailColor = colors_1.default.white; //The color of unfilled part
/**
 * Convert percentage to degree
 * @param percent percentage
 * @returns the value after convert from percent to degree in number
 */
function percentToDegrees(percent) {
    return percent * 3.6;
}
/**
 * Compute style of circle
 * @param percent percentage
 * @returns the value after convert from percent to degree in number
 */
var computeDerivedState = function (percent) {
    var needHalfCircle2 = percent > 50;
    var halfCircle1Degree = 180;
    var halfCircle3Degree = 180;
    if (needHalfCircle2) {
        halfCircle3Degree = percentToDegrees(percent);
    }
    else {
        halfCircle1Degree = percentToDegrees(percent);
    }
    return {
        halfCircle1Degree: halfCircle1Degree,
        halfCircle3Degree: halfCircle3Degree,
        halfCircle2Styles: {
            backgroundColor: colors_1.default.white,
        },
        halfCircle3Styles: {
            backgroundColor: needHalfCircle2 ? HalfCircle_1.strokeColor : trailColor,
            opacity: needHalfCircle2 ? 1 : 0,
        },
    };
};
var CircularProgressBar = function (props) {
    var _a = props.percent, percent = _a === void 0 ? 0 : _a, _b = props.size, size = _b === void 0 ? "xs" : _b, _c = props.innerBackgroundColor, innerBackgroundColor = _c === void 0 ? colors_1.default.white : _c;
    var radius = SIZE[size];
    return (react_1.default.createElement(react_native_1.View, { style: [
            styles.outerCircle,
            {
                width: radius * 2,
                height: radius * 2,
                borderRadius: radius,
                backgroundColor: trailColor,
                transform: [{ rotateY: "".concat(react_native_1.I18nManager.isRTL ? 180 : 0, "deg") }],
            },
        ] },
        react_1.default.createElement(HalfCircle_1.default, { slideNum: 1, percent: percent, radius: radius, rotateDegrees: computeDerivedState(percent).halfCircle1Degree }),
        react_1.default.createElement(HalfCircle_1.default, { slideNum: 2, percent: percent, radius: radius, additionalStyles: computeDerivedState(percent).halfCircle2Styles }),
        react_1.default.createElement(HalfCircle_1.default, { slideNum: 3, percent: percent, radius: radius, rotateDegrees: computeDerivedState(percent).halfCircle3Degree, additionalStyles: computeDerivedState(percent).halfCircle3Styles }),
        react_1.default.createElement(InnerCircle_1.default, { radius: radius, innerBackgroundColor: innerBackgroundColor })));
};
var styles = react_native_1.StyleSheet.create({
    outerCircle: {
        justifyContent: "center",
        alignItems: "center",
    },
});
exports.default = CircularProgressBar;
