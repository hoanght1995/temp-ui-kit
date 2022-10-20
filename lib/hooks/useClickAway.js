"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickAway = void 0;
var react_1 = require("react");
var platform_1 = require("../utils/platform");
var useClickAway = function (ref, callback, enable) {
    if (enable === void 0) { enable = true; }
    (0, react_1.useEffect)(function () {
        if (!enable)
            return;
        if (platform_1.isNativeApp)
            return;
        var handleClickAway = function (event) {
            if (ref.current && !ref.current.contains(event.target) && callback) {
                callback();
            }
        };
        document.addEventListener("click", handleClickAway);
        return function () {
            document.removeEventListener("click", handleClickAway);
        };
    }, [enable, ref, callback]);
};
exports.useClickAway = useClickAway;
