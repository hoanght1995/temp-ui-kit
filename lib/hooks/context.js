"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContextState = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = require("lodash");
var useContextState = function (initState) {
    if (initState === void 0) { initState = {}; }
    var _a = react_1.default.useState(initState), values = _a[0], setValues = _a[1];
    var updateKey = react_1.default.useCallback(function (key, value) {
        setValues(function (currentValues) {
            var _a;
            if (currentValues[key] !== value) {
                return __assign(__assign({}, currentValues), (_a = {}, _a[key] = value, _a));
            }
            return currentValues;
        });
    }, []);
    var updatePath = react_1.default.useCallback(function (path, value) {
        setValues(function (currentValues) {
            if ((0, lodash_1.get)(currentValues, path) !== value) {
                var newValues = __assign({}, currentValues);
                return (0, lodash_1.set)(newValues, path, value);
            }
            return currentValues;
        });
    }, []);
    return react_1.default.useMemo(function () { return ({
        values: values,
        updateKey: updateKey,
        updatePath: updatePath,
    }); }, [values]);
};
exports.useContextState = useContextState;
