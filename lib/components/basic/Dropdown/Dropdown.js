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
var utils_1 = require("../../../utils");
var hooks_1 = require("../../../hooks");
var RText_1 = __importDefault(require("../../basic/RText"));
var Icon_1 = __importDefault(require("../../basic/Icon"));
var OptionList_1 = __importDefault(require("./OptionList"));
var Button_1 = __importDefault(require("../Button"));
var CONFIGS = {
    // [height, labelType, actionButtonSize]
    md: [40, "l4", "xs"],
    lg: [48, "l3", "sm"],
};
var Dropdown = function (_a) {
    var style = _a.style, size = _a.size, label = _a.label, info = _a.info, left = _a.left, actionButton = _a.actionButton, defaultValue = _a.defaultValue, propValue = _a.value, disabled = _a.disabled, error = _a.error, _b = _a.fluid, fluid = _b === void 0 ? true : _b, placeholder = _a.placeholder, onSelect = _a.onSelect, testID = _a.testID, options = _a.options, props = __rest(_a, ["style", "size", "label", "info", "left", "actionButton", "defaultValue", "value", "disabled", "error", "fluid", "placeholder", "onSelect", "testID", "options"]);
    var optionList = (0, react_1.useRef)();
    var _c = (0, react_1.useState)(false), isOpen = _c[0], setIsOpen = _c[1];
    var _d = (0, react_1.useState)(defaultValue || propValue), value = _d[0], setValue = _d[1];
    var configsBySize = CONFIGS[size || "md"];
    (0, hooks_1.useUpdate)(function () {
        if (propValue !== value)
            setValue(propValue);
    }, [propValue]);
    var onOpen = (0, react_1.useCallback)(function () {
        var _a;
        if (disabled)
            return;
        (_a = optionList.current) === null || _a === void 0 ? void 0 : _a.open();
        setIsOpen(true);
    }, [disabled]);
    var onClose = (0, react_1.useCallback)(function () {
        setIsOpen(false);
    }, []);
    var onItemSelect = (0, react_1.useCallback)(function (v) {
        var _a;
        (_a = optionList.current) === null || _a === void 0 ? void 0 : _a.close();
        if (onSelect)
            onSelect(v);
        setValue(v);
    }, [onSelect]);
    var valueOption = (0, react_1.useMemo)(function () { return (options.find(function (option) { return option.value === value; })); }, [value, options]);
    var dropdownStyle = (0, react_1.useMemo)(function () { return [
        styles.dropdown,
        isOpen && !disabled && styles.focus,
        !!error && styles.error,
        disabled && styles.disabled,
        {
            height: configsBySize[0],
        }
    ]; }, [error, disabled, configsBySize, isOpen]);
    return (react_1.default.createElement(react_native_1.View, { style: [styles.outer, fluid && styles.fluid, style], testID: testID },
        (!!label || !!info) && (react_1.default.createElement(react_native_1.View, { style: styles.titleBox },
            !!label && (react_1.default.createElement(RText_1.default, { type: configsBySize[1], style: styles.titleText }, label)),
            !!info && (react_1.default.createElement(react_native_1.TouchableOpacity, null,
                react_1.default.createElement(Icon_1.default, { name: "circle-info", size: 18 }))))),
        react_1.default.createElement(react_native_1.Pressable, { onPress: onOpen },
            react_1.default.createElement(react_native_1.View, { style: dropdownStyle },
                Boolean(left) && (react_1.default.createElement(react_native_1.View, { style: styles.leftElement }, left)),
                react_1.default.createElement(RText_1.default, { style: [styles.text, !value && styles.placeholder, left && styles.textWithLeft] }, value ? valueOption === null || valueOption === void 0 ? void 0 : valueOption.label : placeholder),
                react_1.default.createElement(react_native_1.View, { style: styles.rightElement },
                    react_1.default.createElement(Icon_1.default, { style: isOpen ? styles.directionIconUp : styles.directionIconDown, name: "chevron-right", size: 20 })),
                !!actionButton && (react_1.default.createElement(Button_1.default, { type: "light", disable: disabled, size: configsBySize[2], style: styles.actionButton, title: actionButton.title, onPress: actionButton.onPress })))),
        react_1.default.createElement(OptionList_1.default, __assign({ ref: optionList, onClose: onClose, onSelect: onItemSelect, value: value, options: options }, props)),
        lodash_1.default.isString(error) && (react_1.default.createElement(RText_1.default, { type: "l5", style: styles.errorText }, error))));
};
var styles = react_native_1.StyleSheet.create({
    outer: {
        minWidth: 200,
        zIndex: utils_1.isNativeApp ? undefined : "unset",
    },
    titleBox: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 6
    },
    titleText: {
        marginRight: 8
    },
    dropdown: {
        borderWidth: 1,
        borderColor: utils_1.COLORS.gray200,
        height: 40,
        backgroundColor: utils_1.COLORS.white,
        borderRadius: 4,
        outlineWidth: 2,
        flexDirection: "row",
        alignItems: "center",
        userSelect: "none",
        transition: "border-color 0.1s, outline-color 0.1s",
        outlineColor: "transparent",
    },
    focus: {
        borderColor: utils_1.COLORS.purple,
        outlineColor: utils_1.COLORS.lightPurple800,
        outlineStyle: "solid",
    },
    error: {
        borderColor: utils_1.COLORS.red500,
    },
    disabled: {
        backgroundColor: utils_1.COLORS.gray300,
        borderColor: utils_1.COLORS.gray300,
        opacity: 0.5
    },
    text: {
        flex: 1,
        fontSize: 16,
        marginHorizontal: 12
    },
    textWithLeft: {
        marginLeft: 8
    },
    actionButton: {
        marginRight: 6,
        backgroundColor: utils_1.COLORS.violet40,
        borderWidth: 0
    },
    placeholder: {
        opacity: 0.5
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
    directionIconUp: {
        transform: [{ rotate: "-90deg" }]
    },
    directionIconDown: {
        transform: [{ rotate: "90deg" }]
    },
    fluid: {
        width: "100%"
    }
});
exports.default = Dropdown;
