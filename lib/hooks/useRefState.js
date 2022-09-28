"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRefState = void 0;
var react_1 = require("react");
var useRefState = function (initialValue) {
    var _a = (0, react_1.useState)(initialValue), value = _a[0], setValue = _a[1];
    var valueRef = (0, react_1.useRef)(initialValue);
    var valueInRender = value;
    var getLatestValueToUseInFunction = function () { return valueRef.current; };
    var setValueRef = function (newValue) {
        valueRef.current = newValue;
        setValue(newValue);
    };
    return [
        valueInRender,
        getLatestValueToUseInFunction,
        setValueRef,
    ];
};
exports.useRefState = useRefState;
