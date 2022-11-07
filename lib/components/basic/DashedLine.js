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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var utils_1 = require("../../utils");
var DashedLine = function (_a) {
    var _b = _a.isHorizontal, isHorizontal = _b === void 0 ? true : _b, _c = _a.gap, gap = _c === void 0 ? 1 : _c, _d = _a.length, length = _d === void 0 ? 5 : _d, _e = _a.thickness, thickness = _e === void 0 ? 1 : _e, _f = _a.color, color = _f === void 0 ? utils_1.COLORS.black : _f, dashStyle = _a.dashStyle, style = _a.style;
    var _g = (0, react_1.useState)(0), lineLength = _g[0], setLineLength = _g[1];
    var numOfDashes = Math.floor(lineLength / (gap * 2 + length));
    var dashStyles = (0, react_1.useMemo)(function () { return ({
        width: isHorizontal ? length : thickness,
        height: isHorizontal ? thickness : length,
        marginHorizontal: isHorizontal ? gap : 0,
        marginVertical: isHorizontal ? 0 : gap,
        backgroundColor: color,
    }); }, [color, gap, length, thickness, isHorizontal]);
    var handleLayout = react_1.default.useCallback(function (event) {
        var _a = event.nativeEvent.layout, width = _a.width, height = _a.height;
        setLineLength(isHorizontal ? width : height);
    }, []);
    return (react_1.default.createElement(react_native_1.View, { onLayout: handleLayout, style: [style, isHorizontal ? styles.row : styles.column] }, __spreadArray([], Array(numOfDashes), true).map(function (_, i) {
        return react_1.default.createElement(react_native_1.View, { key: i, style: [dashStyles, dashStyle] });
    })));
};
var styles = react_native_1.StyleSheet.create({
    row: {
        flexDirection: "row",
    },
    column: {
        flexDirection: "column",
    },
});
exports.default = DashedLine;
