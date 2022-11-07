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
var ConfirmModal_1 = __importStar(require("../basic/ConfirmModal"));
exports.ThemeContext = react_1.default.createContext({});
var ThemeProvider = function (props) {
    var children = props.children, _a = props.defaultTheme, defaultTheme = _a === void 0 ? "light" : _a;
    var _b = (0, useRefState_1.useRefState)((0, screen_size_1.getScreenSize)(react_native_1.Dimensions.get("window").width)), breakpoint = _b[0], getCurrentBreakpoint = _b[1], setBreakpoint = _b[2];
    var _c = react_1.default.useState(defaultTheme), mode = _c[0], setMode = _c[1];
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
        themeColor: colors_1.default[mode],
        dimensions: react_native_1.Dimensions.get("window"),
        setMode: setMode,
    }); }, [breakpoint, mode]);
    return (react_1.default.createElement(exports.ThemeContext.Provider, { value: contextValue },
        children,
        react_1.default.createElement(ConfirmModal_1.default, { ref: function (ref) { return (0, ConfirmModal_1.setInstance)(ref); } })));
};
exports.ThemeProvider = ThemeProvider;
var useThemeContext = function () {
    var values = react_1.default.useContext(exports.ThemeContext);
    return values;
};
exports.useThemeContext = useThemeContext;
