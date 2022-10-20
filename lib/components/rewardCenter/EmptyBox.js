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
var Icon_1 = __importDefault(require("../basic/Icon"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var utils_1 = require("../../utils");
var defaultIcon = {
    name: "empty-box",
    size: 40,
};
var EmptyBox = function (props) {
    var renderIcon = props.renderIcon, title = props.title, btnTitle = props.btnTitle, _a = props.style, style = _a === void 0 ? {} : _a, onPress = props.onPress, restProps = __rest(props, ["renderIcon", "title", "btnTitle", "style", "onPress"]);
    var icon = react_1.default.useMemo(function () {
        if (renderIcon) {
            return renderIcon;
        }
        return react_1.default.createElement(Icon_1.default, { name: defaultIcon.name, size: defaultIcon.size });
    }, [renderIcon]);
    return (react_1.default.createElement(react_native_1.View, __assign({ style: [styles.container, style] }, restProps),
        react_1.default.createElement(react_native_1.View, { style: styles.icon }, icon),
        react_1.default.createElement(react_native_1.View, { style: styles.content },
            react_1.default.createElement(react_native_1.Text, { style: styles.text }, title)),
        react_1.default.createElement(react_native_1.TouchableOpacity, { onPress: onPress, style: styles.actionBtn },
            react_1.default.createElement(react_native_1.Text, { style: styles.textBtn }, btnTitle))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: "center",
        borderRadius: 4,
        padding: 16,
        alignItems: "center",
    },
    icon: {
        marginBottom: 16,
    },
    content: {
        justifyContent: "center",
        marginBottom: 16,
    },
    actionBtn: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: utils_1.COLORS.purple,
        borderRadius: 4,
    },
    textBtn: {
        color: utils_1.COLORS.white,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "400",
    },
    text: {
        fontSize: 14,
        lineHeight: 20,
        color: "#464346",
        textAlign: "center",
    },
});
exports.default = EmptyBox;
