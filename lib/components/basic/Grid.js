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
var ThemeProvider_1 = require("../provider/ThemeProvider");
var responsive_1 = require("../../constants/responsive");
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var screen_size_1 = require("../../utils/screen-size");
var getGutterValue = function (gutter, screenSize) {
    if (typeof gutter === "number")
        return [gutter, gutter];
    if (!(gutter === null || gutter === void 0 ? void 0 : gutter.length))
        return [responsive_1.GUTTERS[screenSize], responsive_1.GUTTERS[screenSize]];
    return gutter;
};
var Grid = function (props) {
    var _a = (0, ThemeProvider_1.useThemeContext)().screenSize, screenSize = _a === void 0 ? "md" : _a;
    var uniqId = react_1.default.useState(String(Math.random()))[0];
    var style = props.style, children = props.children, gutter = props.gutter, noPadding = props.noPadding, restProps = __rest(props, ["style", "children", "gutter", "noPadding"]);
    var childArr = react_1.default.Children.toArray(children);
    var _b = getGutterValue(gutter, screenSize), gutterH = _b[0], gutterV = _b[1];
    return (react_1.default.createElement(react_native_1.View, __assign({ style: [styles.container, props.style, {
                flexWrap: "wrap",
                marginHorizontal: noPadding ? -gutterH : undefined,
                marginVertical: noPadding ? -gutterV : undefined,
                paddingHorizontal: gutterH / 2,
                paddingVertical: gutterV / 2,
            }] }, restProps), childArr.map(function (child, index) {
        var _a;
        var resStyle = (0, screen_size_1.getStyleByBreakpointRules)(screenSize, (_a = child.props) === null || _a === void 0 ? void 0 : _a.span);
        if (resStyle === undefined)
            return null;
        return (react_1.default.createElement(react_native_1.View, { key: "".concat(uniqId).concat(child.key).concat(index), style: [{
                    paddingVertical: gutterV / 2,
                    paddingHorizontal: gutterH / 2,
                }, resStyle] }, child));
    })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
    }
});
exports.default = Grid;
