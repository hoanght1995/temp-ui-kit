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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_web_svg_1 = __importStar(require("react-native-web-svg"));
var SvgComponent = function (props) {
    return (React.createElement(react_native_web_svg_1.default, __assign({ width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement(react_native_web_svg_1.Path, { d: "M4.84175 4.52937C7.43094 2.0335 11.2842 2.13297 13.6806 4.52937C15.9721 6.82093 16.1122 10.4492 14.1009 12.9042L17.6581 16.4618L16.7742 17.3457L13.2166 13.7885C10.7616 15.7999 7.13331 15.6598 4.84175 13.3682C2.44535 10.9718 2.33267 6.94803 4.84175 4.52937ZM12.7967 5.41326C10.8441 3.46064 7.67826 3.46064 5.72563 5.41326C3.77301 7.36588 3.77301 10.5317 5.72563 12.4843C7.67826 14.4369 10.8441 14.4369 12.7967 12.4843C14.7493 10.5317 14.7493 7.36588 12.7967 5.41326Z", fill: props.fill || "#000" })));
};
exports.default = SvgComponent;
