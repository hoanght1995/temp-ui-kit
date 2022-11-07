"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var react_1 = __importDefault(require("react"));
var utils_1 = require("../../utils");
var ViewWithFooterAbsolute = function (props) {
    var renderFooter = props.renderFooter, children = props.children, _a = props.scrollable, scrollable = _a === void 0 ? true : _a;
    var scrollElement = scrollable ? (react_1.default.createElement(react_native_1.ScrollView, null, children)) : (react_1.default.createElement(react_native_1.View, null, children));
    return (react_1.default.createElement(react_native_1.SafeAreaView, { style: styles.container },
        scrollElement,
        react_1.default.createElement(react_native_1.View, { style: styles.footer },
            react_1.default.createElement(react_native_1.View, { style: styles.divider }),
            renderFooter())));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        backgroundColor: utils_1.COLORS.white,
        width: "100%",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: 1,
    },
    divider: {
        width: "100%",
        height: 1,
        backgroundColor: utils_1.COLORS.gray70,
    },
});
exports.default = ViewWithFooterAbsolute;
