"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = void 0;
var react_1 = require("react");
var useHover = function () {
    var _a = (0, react_1.useState)(false), isHovered = _a[0], setIsHovered = _a[1];
    var hoverProps = {
        onMouseEnter: function () {
            setIsHovered(true);
        },
        onMouseLeave: function () {
            setIsHovered(false);
        }
    };
    return [hoverProps, isHovered];
};
exports.useHover = useHover;
