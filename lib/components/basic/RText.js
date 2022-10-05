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
var utils_1 = require("../../utils");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var scaleByResponsive = function (size) {
    // need discuss with designer
    return size;
};
var styleByType = {
    // [fontSize, lineHeight, fontWeight]
    d1: [96, 112, 400],
    d2: [52, 64, 400],
    d3: [44, 52, 400],
    d4: [36, 44, 400],
    h1: [40, 52, 700],
    h2: [36, 44, 700],
    h3: [32, 40, 700],
    h4: [28, 36, 700],
    h5: [24, 32, 700],
    h6: [20, 28, 700],
    l1: [20, 32, 400],
    l2: [18, 26, 400],
    l3: [16, 24, 400],
    l4: [14, 20, 400],
    l5: [12, 16, 400],
    l6: [10, 14, 400],
    l1b: [20, 32, 700],
    l2b: [18, 26, 700],
    l3b: [16, 24, 700],
    l4b: [14, 20, 700],
    l5b: [12, 16, 700],
    l6b: [10, 14, 700],
};
var TextComp = function (props) {
    var bold = props.bold, style = props.style, color = props.color, title = props.title, children = props.children, type = props.type, resProps = __rest(props, ["bold", "style", "color", "title", "children", "type"]);
    var propsStyle = {
        color: color || utils_1.COLORS.contentPrimary,
    };
    if (type) {
        var _a = styleByType[type] || [14, 20, 400], size = _a[0], lineH = _a[1], weight = _a[2];
        propsStyle = Object.assign(propsStyle, {
            fontSize: scaleByResponsive(size),
            lineHeight: scaleByResponsive(lineH),
            fontWeight: String(weight),
        });
    }
    if (bold)
        propsStyle.fontWeight = "700";
    return (react_1.default.createElement(react_native_1.Text, __assign({ style: [propsStyle, style] }, resProps), title || children));
};
exports.default = TextComp;
