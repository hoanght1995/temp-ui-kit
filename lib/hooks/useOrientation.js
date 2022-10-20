"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOrientation = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var platform_1 = require("../utils/platform");
var isPortrait = function () {
    var dim = react_native_1.Dimensions.get(platform_1.isNativeApp ? "screen" : "window");
    return dim.height >= dim.width;
};
var useOrientation = function () {
    var _a = (0, react_1.useState)(isPortrait() ? "PORTRAIT" : "LANDSCAPE"), orientation = _a[0], setOrientation = _a[1];
    (0, react_1.useEffect)(function () {
        var onChange = function () { return setOrientation(isPortrait() ? "PORTRAIT" : "LANDSCAPE"); };
        react_native_1.Dimensions.addEventListener("change", onChange);
        return function () {
            react_native_1.Dimensions.removeEventListener("change", onChange);
        };
    }, []);
    return orientation;
};
exports.useOrientation = useOrientation;
