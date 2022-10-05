"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeContext = exports.ThemeProvider = exports.ThemeContext = void 0;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var lodash_1 = require("lodash");
var screen_size_1 = require("../../utils/screen-size");
var useRefState_1 = require("../../hooks/useRefState");
var colors_1 = __importDefault(require("../../utils/colors"));
exports.ThemeContext = react_1.default.createContext({});
var ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = (0, useRefState_1.useRefState)((0, screen_size_1.getScreenSize)(react_native_1.Dimensions.get("window").width)), breakpoint = _b[0], getCurrentBreakpoint = _b[1], setBreakpoint = _b[2];
    var updateBreakpoint = (0, lodash_1.throttle)(function (e) {
        var newBreakpoint = (0, screen_size_1.getScreenSize)(e.window.width);
        if (newBreakpoint !== getCurrentBreakpoint()) {
            setBreakpoint(newBreakpoint);
        }
    }, 300);
    react_1.default.useEffect(function () {
        react_native_1.Dimensions.addEventListener("change", updateBreakpoint);
        return function () {
            react_native_1.Dimensions.removeEventListener("change", updateBreakpoint);
        };
    }, []);
    var contextValue = react_1.default.useMemo(function () { return ({
        screenSize: breakpoint,
        colors: colors_1.default,
        dimensions: react_native_1.Dimensions.get("window"),
    }); }, [breakpoint]);
    return (react_1.default.createElement(exports.ThemeContext.Provider, { value: contextValue }, children));
};
exports.ThemeProvider = ThemeProvider;
var useThemeContext = function () {
    var values = react_1.default.useContext(exports.ThemeContext);
    return values;
};
exports.useThemeContext = useThemeContext;
