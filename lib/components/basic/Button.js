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
var RText_1 = __importDefault(require("./RText"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var hooks_1 = require("../../hooks");
var utils_1 = require("../../utils");
var Spin_1 = __importDefault(require("./Spin"));
var SIZES = {
    // [paddingHorizontal, height, titleType]
    xxs: [6, 24, "l5"],
    xs: [8, 28, "l4"],
    sm: [12, 36, "l4"],
    md: [16, 40, "l3"],
    lg: [16, 48, "l3"],
    xl: [24, 56, "l1"],
};
var TYPES = {
    primary: {
        container: {
            backgroundColor: utils_1.COLORS.primaryA,
        },
        hoverContainer: {
            backgroundColor: utils_1.COLORS.darkPurple100,
        },
        title: {
            color: utils_1.COLORS.white,
        },
        spin: {
            color: utils_1.COLORS.white,
        },
    },
    light: {
        container: {
            borderWidth: 1,
            borderColor: utils_1.COLORS.gray300,
        },
        hoverContainer: {
            backgroundColor: utils_1.COLORS.gray50,
        },
        title: {
            color: utils_1.COLORS.text800,
        },
        spin: {
            color: utils_1.COLORS.purple,
        },
    },
    text: {
        container: {},
        hoverContainer: {
            backgroundColor: utils_1.COLORS.gray50,
        },
        title: {
            color: utils_1.COLORS.text800,
        },
        spin: {
            color: utils_1.COLORS.purple,
        },
    },
};
var Button = function (props) {
    var style = props.style, children = props.children, title = props.title, onRef = props.onRef, disable = props.disable, loading = props.loading, size = props.size, type = props.type, shape = props.shape, left = props.left, right = props.right, restProps = __rest(props, ["style", "children", "title", "onRef", "disable", "loading", "size", "type", "shape", "left", "right"]);
    var _a = (0, hooks_1.useHover)(), _b = _a[0], hoverProps = _b === void 0 ? {} : _b, isHovered = _a[1];
    var styleBySize = SIZES[size || "md"];
    var styleByType = TYPES[type || "primary"];
    var combineStyles = [
        styles.container,
        styleByType.container,
        (isHovered && !disable) && styleByType.hoverContainer,
        {
            paddingHorizontal: shape ? 0 : styleBySize[0],
            height: styleBySize[1],
            width: shape ? styleBySize[1] : undefined,
            borderRadius: shape === "round" ? 999 : undefined,
        },
        props.style,
        { opacity: disable ? 0.32 : 1 }, // overide any style
    ];
    return (react_1.default.createElement(react_native_1.Pressable, __assign({ style: combineStyles }, hoverProps, restProps),
        Boolean(left) &&
            react_1.default.createElement(react_native_1.View, { style: { marginRight: shape ? 0 : 6 } }, left),
        Boolean(title) &&
            react_1.default.createElement(RText_1.default, { numberOfLines: 1, title: title, type: styleBySize[2], style: styleByType.title }),
        Boolean(right) &&
            react_1.default.createElement(react_native_1.View, { style: { marginLeft: shape ? 0 : 6 } }, right),
        loading &&
            react_1.default.createElement(Spin_1.default, { style: { marginLeft: 6 }, color: styleByType.spin.color })));
};
Button.defaultProps = {
    size: "md",
    type: "primary",
};
var styles = react_native_1.StyleSheet.create({
    container: {
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    spin: {
        marginLeft: 6,
    }
});
exports.default = Button;
