"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePressIn = void 0;
var react_1 = require("react");
var usePressIn = function () {
    var _a = (0, react_1.useState)(false), isPressIn = _a[0], setIsPressIn = _a[1];
    var pressInProps = {
        onPressIn: function () {
            setIsPressIn(true);
        },
        onPressOut: function () {
            setIsPressIn(false);
        }
    };
    return [pressInProps, isPressIn];
};
exports.usePressIn = usePressIn;
