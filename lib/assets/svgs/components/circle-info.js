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
        React.createElement(react_native_web_svg_1.G, { clipPath: "url(#clip0_840_322)" },
            React.createElement(react_native_web_svg_1.Path, { d: "M10 1.25a8.75 8.75 0 100 17.5 8.75 8.75 0 000-17.5zM10 5a.938.938 0 110 1.875A.938.938 0 0110 5zm2.5 10.078h-5v-1.406h1.797v-3.594H8.125V8.672h2.578v5H12.5v1.406z", fill: "#93899C" })),
        React.createElement(react_native_web_svg_1.Defs, null,
            React.createElement(react_native_web_svg_1.ClipPath, { id: "clip0_840_322" },
                React.createElement(react_native_web_svg_1.Path, { fill: "#fff", d: "M0 0H20V20H0z" })))));
};
exports.default = SvgComponent;
