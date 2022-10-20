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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var native_1 = require("@react-spring/native");
var colors_1 = __importDefault(require("../../utils/colors"));
var CircularProgressBar_1 = require("./CircularProgressBar");
var HalfCircle = function (props) {
    var radius = props.radius, _a = props.rotateDegrees, rotateDegrees = _a === void 0 ? 0 : _a, slideNum = props.slideNum, percent = props.percent, additionalStyles = props.additionalStyles;
    var circleDimension = (0, react_1.useMemo)(function () { return ({
        width: radius,
        height: radius * 2,
    }); }, [radius]);
    var spring = (0, native_1.useSpring)({
        rotate: "".concat(rotateDegrees, "deg"),
    });
    var springArr = [1, 3].includes(slideNum)
        ? [{ rotate: spring.rotate }]
        : [];
    return (react_1.default.createElement(react_native_1.View, { style: [styles.leftWrap, circleDimension] },
        react_1.default.createElement(native_1.animated.View, { style: [
                circleDimension,
                styles.halfCircle,
                {
                    overflow: "hidden",
                    borderTopLeftRadius: radius,
                    borderBottomLeftRadius: radius,
                    backgroundColor: percent > 0 ? CircularProgressBar_1.strokeColor : colors_1.default.white,
                    transform: __spreadArray(__spreadArray([
                        {
                            translateX: slideNum === 2 && percent < 50 && percent !== 0
                                ? radius / 2 - 1
                                : radius / 2,
                        }
                    ], springArr, true), [
                        { translateX: -radius / 2 },
                    ], false),
                },
                additionalStyles,
            ] })));
};
var styles = react_native_1.StyleSheet.create({
    leftWrap: {
        position: "absolute",
        top: 0,
        left: 0,
    },
    halfCircle: {
        position: "absolute",
        top: 0,
        left: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
});
exports.default = HalfCircle;
