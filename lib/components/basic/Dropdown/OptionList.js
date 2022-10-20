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
var react_native_1 = require("react-native");
var lodash_1 = require("lodash");
var utils_1 = require("../../../utils");
var RText_1 = __importDefault(require("../RText"));
var Pressable_1 = __importDefault(require("../Pressable"));
var Input_1 = __importDefault(require("../Input"));
var Icon_1 = __importDefault(require("../Icon"));
var BottomSheet_1 = __importDefault(require("../BottomSheet"));
var Popover_1 = __importDefault(require("./Popover"));
var OptionList = function (_a) {
    var options = _a.options, showSearch = _a.showSearch, value = _a.value, onSelect = _a.onSelect, onSearchChange = _a.onSearchChange;
    var _b = (0, react_1.useState)(""), search = _b[0], setSearch = _b[1];
    var onChangeText = function (text) {
        setSearch(text);
        if (onSearchChange)
            onSearchChange(text);
    };
    var filtedOptions = (0, react_1.useMemo)(function () { return (!search || onSearchChange) ? options : (options.filter(function (option) { return (0, lodash_1.includes)((0, lodash_1.toLower)(option.label), (0, lodash_1.toLower)(search)); })); }, [search, options, onSearchChange]);
    return (react_1.default.createElement(react_native_1.View, { style: styles.optionList },
        showSearch && (react_1.default.createElement(react_1.default.Fragment, null,
            utils_1.isNativeApp && (react_1.default.createElement(react_native_1.View, { style: styles.divider })),
            react_1.default.createElement(Input_1.default, { left: react_1.default.createElement(Icon_1.default, { name: "search" }), inputStyle: styles.searchInput, onChangeText: onChangeText }),
            react_1.default.createElement(react_native_1.View, { style: styles.divider }))),
        react_1.default.createElement(react_native_1.ScrollView, { style: styles.scrollView, contentContainerStyle: styles.contentContainerStyle }, filtedOptions.map(function (option, index) { return (react_1.default.createElement(Pressable_1.default, { key: index, style: [styles.optionItem, option.value === value && styles.optionItemActive], hoverEffect: true, onPress: function () { return onSelect && onSelect(option.value); } },
            react_1.default.createElement(react_native_1.View, { style: styles.horizon },
                !!option.left && (react_1.default.createElement(react_native_1.View, { style: styles.leftElement }, option.left)),
                react_1.default.createElement(RText_1.default, { type: "l3" }, option.label)),
            option.value === value && (react_1.default.createElement(Icon_1.default, { name: "check", color: "black", size: 22 })))); }))));
};
var Wrapper = (0, react_1.forwardRef)(function (props, ref) {
    return utils_1.isNativeApp ? (react_1.default.createElement(BottomSheet_1.default, { ref: ref, onClose: props.onClose },
        react_1.default.createElement(OptionList, __assign({}, props)))) : (react_1.default.createElement(Popover_1.default, { ref: ref, onClose: props.onClose },
        react_1.default.createElement(OptionList, __assign({}, props))));
});
var styles = react_native_1.StyleSheet.create({
    optionList: {
        flex: 1
    },
    searchInput: {
        borderWidth: 0,
        outlineWidth: 0
    },
    divider: {
        height: 1,
        backgroundColor: utils_1.COLORS.gray100
    },
    scrollView: {
        flex: 1
    },
    contentContainerStyle: {
        padding: 4,
        paddingBottom: 0
    },
    optionItem: {
        height: 40,
        marginBottom: 4,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        justifyContent: "space-between"
    },
    leftElement: {
        marginRight: 8
    },
    horizon: {
        flexDirection: "row",
        alignItems: "center"
    },
    optionItemActive: {
        backgroundColor: utils_1.COLORS.gray50
    }
});
exports.default = Wrapper;
