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
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var svgs_1 = __importDefault(require("../../assets/svgs"));
var lodash_1 = require("lodash");
var Icon = function (props) {
    var color = props.color, style = props.style, size = props.size, name = props.name, width = props.width, height = props.height;
    var SvgComp = svgs_1.default[name] ? svgs_1.default[name] : react_native_1.View;
    var icWidth = width || size;
    var icHeight = height || size;
    if (SvgComp)
        return (react_1.default.createElement(react_native_1.View, { style: style },
            react_1.default.createElement(SvgComp, __assign({}, (0, lodash_1.omitBy)({
                fill: color,
                width: icWidth,
                height: icHeight,
            }, lodash_1.isUndefined)))));
    return (react_1.default.createElement(react_native_1.View, { style: [style, { backgroundColor: color, width: icWidth, height: icHeight }] }));
};
exports.default = Icon;
