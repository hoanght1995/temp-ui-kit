"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("@jest/globals");
var screen_size_1 = require("../../utils/screen-size");
(0, globals_1.describe)("Test getScreenSize", function () {
    (0, globals_1.test)("should get correct screen size", function () {
        (0, globals_1.expect)((0, screen_size_1.getScreenSize)(400)).toEqual("xs");
        (0, globals_1.expect)((0, screen_size_1.getScreenSize)(576)).toEqual("sm");
        (0, globals_1.expect)((0, screen_size_1.getScreenSize)(768)).toEqual("md");
        (0, globals_1.expect)((0, screen_size_1.getScreenSize)(1280)).toEqual("lg");
        (0, globals_1.expect)((0, screen_size_1.getScreenSize)(1366)).toEqual("xl");
        (0, globals_1.expect)((0, screen_size_1.getScreenSize)(1440)).toEqual("xxl");
    });
    (0, globals_1.test)("should get correct findNearestLowerBreakpointValue", function () {
        (0, globals_1.expect)((0, screen_size_1.findNearestLowerBreakpointValue)("md", { xs: 0, md: 5 })).toEqual(5);
        (0, globals_1.expect)((0, screen_size_1.findNearestLowerBreakpointValue)("xs", { xs: 0, md: 5 })).toEqual(0);
        (0, globals_1.expect)((0, screen_size_1.findNearestLowerBreakpointValue)("lg", { xs: 0, md: 5 })).toEqual(5);
        (0, globals_1.expect)((0, screen_size_1.findNearestLowerBreakpointValue)("lg", { xs: 0, md: 5, xl: 3 })).toEqual(5);
    });
});
