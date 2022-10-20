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
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var hooks_1 = require("../../hooks");
var utils_1 = require("../../utils");
var PressableComponent = function (_a) {
    var children = _a.children, style = _a.style, hoverEffect = _a.hoverEffect, props = __rest(_a, ["children", "style", "hoverEffect"]);
    var _b = (0, hooks_1.useHover)(), _c = _b[0], hoverProps = _c === void 0 ? {} : _c, isHovered = _b[1];
    var pressableStyles = [
        isHovered && hoverEffect && styles.hover,
        styles.pressable,
        style
    ];
    return (react_1.default.createElement(react_native_1.Pressable, __assign({}, hoverProps, props, { style: pressableStyles }), children));
};
var styles = react_native_1.StyleSheet.create({
    pressable: {},
    hover: {
        backgroundColor: utils_1.COLORS.gray50
    }
});
exports.default = PressableComponent;
