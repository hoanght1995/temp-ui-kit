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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var lodash_1 = require("lodash");
var CircularProgressBar_1 = __importDefault(require("./CircularProgressBar"));
var LineProgressBar_1 = __importDefault(require("./LineProgressBar"));
var ProgressBar = function (props) {
    var _a = props.type, type = _a === void 0 ? "line" : _a, _b = props.percent, percent = _b === void 0 ? 0 : _b;
    var actualPercent = percent > 100 ? 100 : percent;
    if (type === "circle")
        return (react_1.default.createElement(CircularProgressBar_1.default, __assign({}, (0, lodash_1.pick)(props, "size", "innerBackgroundColor"), { percent: actualPercent })));
    return (react_1.default.createElement(LineProgressBar_1.default, __assign({}, (0, lodash_1.pick)(props, "size"), { percent: actualPercent })));
};
exports.default = (0, react_1.memo)(ProgressBar);
