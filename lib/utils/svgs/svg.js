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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSVG = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var svgs_1 = __importDefault(require("../../assets/svgs"));
var loadSVG = function (fileName, defaultIcon) { return function (props) {
    var SvgComponent = svgs_1.default[fileName];
    if (!SvgComponent && defaultIcon)
        SvgComponent = svgs_1.default[defaultIcon];
    if (SvgComponent)
        return react_1.default.createElement(SvgComponent, __assign({}, props));
    var fill = props.fill, width = props.width, height = props.height;
    return (react_1.default.createElement(react_native_1.View, { style: {
            backgroundColor: fill !== null && fill !== void 0 ? fill : undefined,
            width: width,
            height: height,
        } }));
}; };
exports.loadSVG = loadSVG;
