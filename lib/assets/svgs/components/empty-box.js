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
function SvgComponent(props) {
    return (React.createElement(react_native_web_svg_1.default, __assign({ width: 47, height: 40, viewBox: "0 0 47 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement(react_native_web_svg_1.Path, { fillRule: "evenodd", clipRule: "evenodd", d: "M34.928 0H12.072L.643 22.857V40h45.714V22.857L34.93 0zM43.5 25.714v11.429h-40V25.714h7.04l5.717 8.572h14.486l5.715-8.572H43.5zM13.837 2.857l-10 20h8.233l5.716 8.572h11.428l5.715-8.572h8.233l-10-20H13.837z", fill: props.fill || "#A6A3A8" })));
}
exports.default = SvgComponent;
