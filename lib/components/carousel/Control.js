"use strict";
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
exports.CardinalDirections = void 0;
var Icon_1 = __importDefault(require("../basic/Icon"));
var utils_1 = require("../../utils");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["Previous"] = 0] = "Previous";
    CardinalDirections[CardinalDirections["Next"] = 1] = "Next";
})(CardinalDirections = exports.CardinalDirections || (exports.CardinalDirections = {}));
function Control(_a) {
    var handleControlClick = _a.handleControlClick;
    var onControlClickPrevious = (0, react_1.useCallback)(function () { return handleControlClick(CardinalDirections.Previous); }, []);
    var onControlClickNext = (0, react_1.useCallback)(function () { return handleControlClick(CardinalDirections.Next); }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_native_1.View, { style: [styles.controlContainer, styles.left] },
            react_1.default.createElement(react_native_1.Pressable, { onPress: onControlClickPrevious, style: function (_a) {
                    var pressed = _a.pressed;
                    return [{ backgroundColor: pressed ? utils_1.COLORS.violet500 : utils_1.COLORS.violet600 }, styles.control];
                } },
                react_1.default.createElement(Icon_1.default, { name: "chevron-left", color: "white" }))),
        react_1.default.createElement(react_native_1.View, { style: [styles.controlContainer, styles.right] },
            react_1.default.createElement(react_native_1.Pressable, { onPress: onControlClickNext, style: function (_a) {
                    var pressed = _a.pressed;
                    return [{ backgroundColor: pressed ? utils_1.COLORS.violet500 : utils_1.COLORS.violet600 }, styles.control];
                } },
                react_1.default.createElement(Icon_1.default, { name: "chevron-right", color: "white" })))));
}
var styles = react_native_1.StyleSheet.create({
    controlContainer: {
        position: "absolute",
        height: "100%",
        display: "flex",
        justifyContent: "center"
    },
    left: {
        left: -18,
    },
    right: {
        right: -18,
    },
    control: {
        width: 36,
        height: 36,
        borderRadius: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
});
exports.default = (0, react_1.memo)(Control);
