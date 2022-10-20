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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var lodash_1 = __importDefault(require("lodash"));
var utils_1 = require("../../utils");
var RText_1 = __importDefault(require("../basic/RText"));
var Button_1 = __importDefault(require("../basic/Button"));
var Icon_1 = __importDefault(require("../basic/Icon"));
var CONFIGS = {
    // [height, labelType, actionButtonSize]
    md: [40, "l4", "xs"],
    lg: [48, "l3", "sm"],
};
var RTextInput = function (_a) {
    var style = _a.style, inputStyle = _a.inputStyle, size = _a.size, label = _a.label, info = _a.info, left = _a.left, right = _a.right, actionButton = _a.actionButton, disabled = _a.disabled, readOnly = _a.readOnly, error = _a.error, _b = _a.fluid, fluid = _b === void 0 ? true : _b, props = __rest(_a, ["style", "inputStyle", "size", "label", "info", "left", "right", "actionButton", "disabled", "readOnly", "error", "fluid"]);
    var _c = (0, react_1.useState)(null), status = _c[0], setStatus = _c[1];
    var configsBySize = CONFIGS[size || "md"];
    var onBlur = (0, react_1.useCallback)(function () {
        setStatus(null);
    }, []);
    var onFocus = (0, react_1.useCallback)(function () {
        setStatus("focus");
    }, []);
    var textInputBoxStyle = (0, react_1.useMemo)(function () { return [
        styles.textInputBox,
        status === "focus" && !disabled && !readOnly && styles.focus,
        readOnly && styles.readOnly,
        !!error && styles.error,
        disabled && styles.disabled,
        {
            height: configsBySize[0],
        },
        inputStyle
    ]; }, [inputStyle, readOnly, error, disabled, configsBySize, status]);
    return (react_1.default.createElement(react_native_1.View, { style: [style, styles.outer, fluid && styles.fluid] },
        (!!label || !!info) && (react_1.default.createElement(react_native_1.View, { style: styles.titleBox },
            !!label && (react_1.default.createElement(RText_1.default, { type: configsBySize[1], style: styles.titleText }, label)),
            !!info && (react_1.default.createElement(react_native_1.TouchableOpacity, null,
                react_1.default.createElement(Icon_1.default, { name: "circle-info", size: 18 }))))),
        react_1.default.createElement(react_native_1.View, { style: textInputBoxStyle },
            Boolean(left) && (react_1.default.createElement(react_native_1.View, { style: styles.leftElement }, left)),
            react_1.default.createElement(react_native_1.TextInput, __assign({}, props, { editable: !disabled && !readOnly, placeholderTextColor: utils_1.COLORS.text200, onBlur: onBlur, onFocus: onFocus, style: [styles.textInput, left && styles.textInputWithLeft] })),
            Boolean(right) && (react_1.default.createElement(react_native_1.View, { style: styles.rightElement }, right)),
            !!actionButton && (react_1.default.createElement(Button_1.default, { type: "light", disable: disabled, size: configsBySize[2], style: styles.actionButton, title: actionButton.title, onPress: actionButton.onPress }))),
        lodash_1.default.isString(error) && (react_1.default.createElement(RText_1.default, { type: "l5", style: styles.errorText }, error))));
};
var styles = react_native_1.StyleSheet.create({
    outer: {
        minWidth: 200
    },
    titleBox: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6
    },
    titleText: {
        marginRight: 8
    },
    textInputBox: {
        borderWidth: 1,
        borderColor: utils_1.COLORS.gray200,
        height: 40,
        backgroundColor: utils_1.COLORS.white,
        borderRadius: 4,
        outlineWidth: 2,
        flexDirection: "row",
        alignItems: "center"
    },
    focus: {
        borderColor: utils_1.COLORS.purple,
        outlineColor: utils_1.COLORS.lightPurple800,
        outlineStyle: "solid",
    },
    readOnly: {
        backgroundColor: utils_1.COLORS.violet100,
        borderColor: utils_1.COLORS.violet100
    },
    error: {
        borderColor: utils_1.COLORS.red500,
    },
    disabled: {
        backgroundColor: utils_1.COLORS.gray300,
        borderColor: utils_1.COLORS.gray300,
        opacity: 0.5
    },
    textInput: {
        height: "100%",
        fontSize: 16,
        outlineStyle: "none",
        flex: 1,
        marginHorizontal: 12
    },
    textInputWithLeft: {
        marginLeft: 8
    },
    actionButton: {
        marginRight: 6,
        backgroundColor: utils_1.COLORS.violet40,
        borderWidth: 0
    },
    errorText: {
        color: utils_1.COLORS.red500,
        marginTop: 3
    },
    leftElement: {
        marginLeft: 6,
        flexDirection: "row",
        alignItems: "center"
    },
    rightElement: {
        marginRight: 8,
        flexDirection: "row",
        alignItems: "center"
    },
    fluid: {
        width: "100%"
    }
});
exports.default = RTextInput;
