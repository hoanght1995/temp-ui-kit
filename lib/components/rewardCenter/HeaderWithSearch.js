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
var components_1 = require("..");
var ThemeProvider_1 = require("../provider/ThemeProvider");
var utils_1 = require("../../utils");
var defaultTab = [{ name: "Valid" }, { name: "Expired" }];
var HeaderWithSearch = function (props) {
    var title = props.title, titleProps = props.titleProps, tabProps = props.tabProps, inputProps = props.inputProps, _a = props.style, style = _a === void 0 ? {} : _a, restProps = __rest(props, ["title", "titleProps", "tabProps", "inputProps", "style"]);
    var _b = (0, ThemeProvider_1.useThemeContext)().screenSize, screenSize = _b === void 0 ? "" : _b;
    var isMobile = react_1.default.useMemo(function () {
        return utils_1.DETECT_MOBILE.includes(screenSize);
    }, [screenSize]);
    var customStyle = react_1.default.useMemo(function () {
        if (isMobile) {
            return {
                contentBox: {},
                left: {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                },
                title: {},
                searchInput: {
                    width: "100%",
                    marginTop: 16,
                },
            };
        }
        return {
            contentBox: {
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
            },
            left: {},
            title: {
                marginBottom: 16,
            },
            searchInput: {
                width: 320,
            },
        };
    }, [isMobile]);
    if (!screenSize)
        return react_1.default.createElement(react_native_1.View, null);
    return (react_1.default.createElement(react_native_1.View, __assign({ style: [styles.container, style] }, restProps),
        react_1.default.createElement(react_native_1.View, { style: customStyle.contentBox },
            react_1.default.createElement(react_native_1.View, { style: customStyle.left },
                react_1.default.createElement(components_1.RText, __assign({ type: isMobile ? "h6" : "h3", style: [styles.title, customStyle.title] }, titleProps), title),
                react_1.default.createElement(components_1.SegmentTab, __assign({ currentTab: (tabProps === null || tabProps === void 0 ? void 0 : tabProps.currentTab) || 0, onChangeTab: tabProps === null || tabProps === void 0 ? void 0 : tabProps.onChangeTab, size: isMobile ? "sm" : "md", tabs: (tabProps === null || tabProps === void 0 ? void 0 : tabProps.tabs) || defaultTab }, tabProps))),
            react_1.default.createElement(components_1.Input, __assign({ fluid: false, onChangeText: inputProps === null || inputProps === void 0 ? void 0 : inputProps.onChangeText, style: [styles.inputSearch, customStyle.searchInput] }, inputProps)))));
};
var styles = react_native_1.StyleSheet.create({
    container: {},
    title: {
        alignSelf: "center",
    },
    inputSearch: {},
});
exports.default = HeaderWithSearch;
