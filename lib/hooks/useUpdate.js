"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUpdate = void 0;
var react_1 = require("react");
var useUpdate = function (fn, deps) {
    var isInitialMount = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(function () {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            fn();
        }
    }, deps); // eslint-disable-line react-hooks/exhaustive-deps
};
exports.useUpdate = useUpdate;
