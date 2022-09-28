"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFocus = void 0;
var react_1 = require("react");
var useFocus = function () {
    var _a = (0, react_1.useState)(false), isFocused = _a[0], setFocused = _a[1];
    var focusProps = {
        onFocus: function () {
            setFocused(true);
        },
        onBlur: function () {
            setFocused(false);
        }
    };
    return [focusProps, isFocused];
};
exports.useFocus = useFocus;
