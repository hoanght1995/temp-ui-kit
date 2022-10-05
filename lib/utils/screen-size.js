"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyleByBreakpointRules = exports.findNearestLowerBreakpointValue = exports.getScreenSize = void 0;
var responsive_1 = require("./responsive");
var getScreenSize = function (viewportWidth) {
    var minWidthBreakpoints = responsive_1.BREAKPOINTS;
    var breakpoints = Object.keys(minWidthBreakpoints).sort(function (a, b) {
        var widthA = minWidthBreakpoints[a];
        var widthB = minWidthBreakpoints[b];
        return widthA > widthB ? -1 : 1;
    });
    var currentBreakpoint = "xs";
    for (var i = 0; i <= breakpoints.length; i++) {
        var breakpointCode = breakpoints[i];
        var compareWidth = minWidthBreakpoints[breakpointCode];
        if (viewportWidth >= compareWidth) {
            currentBreakpoint = breakpointCode;
            if (!minWidthBreakpoints[breakpointCode])
                continue;
            break;
        }
    }
    return currentBreakpoint;
};
exports.getScreenSize = getScreenSize;
var bpOrder = ["xs", "sm", "md", "lg", "xl", "xxl"];
var findNearestLowerBreakpointValue = function (breakpoint, rules) {
    if (!breakpoint)
        return undefined;
    if (rules[breakpoint] !== undefined)
        return rules[breakpoint];
    var index = bpOrder.indexOf(breakpoint);
    var i = index;
    while (!rules[bpOrder[i]]) {
        if (i === 0)
            return undefined;
        i -= 1;
    }
    return rules[bpOrder[i]];
};
exports.findNearestLowerBreakpointValue = findNearestLowerBreakpointValue;
var getStyleByBreakpointRules = function (breakpoint, rules) {
    if (!rules)
        return { flex: 1 };
    var bpValue = (0, exports.findNearestLowerBreakpointValue)(breakpoint, rules);
    if (bpValue !== undefined)
        return { flex: 1 };
    if (bpValue === "hidden")
        return undefined;
    if (bpValue === "auto")
        return {};
    if (bpValue === "flex")
        return { flex: 1 };
    return {
        width: "".concat(Math.floor(Number(bpValue) / 12 * 100), "%"),
    };
};
exports.getStyleByBreakpointRules = getStyleByBreakpointRules;
