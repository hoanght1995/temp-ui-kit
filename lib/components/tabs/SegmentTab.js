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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var native_1 = require("@react-spring/native");
var Col_1 = __importDefault(require("../basic/Col"));
var Row_1 = __importDefault(require("../basic/Row"));
var RText_1 = __importDefault(require("../basic/RText"));
var colors_1 = __importDefault(require("../../utils/colors"));
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var ThemeProvider_1 = require("../provider/ThemeProvider");
var CONFIGS = {
    // [labelType, itemPaddingHorizontal, itemPaddingVertical]
    sm: ["l4", 8, 4],
    md: ["l3", 8, 4],
    lg: ["l3", 12, 8],
};
/**
 * Calculate the sum of the given number of array
 * @param arr array number
 * @param num quantity to be calculated
 * @returns sum of the given number of array
 */
var addingUpto = function (arr, num) {
    var sum = arr[num];
    if (num === 0)
        return sum;
    return (sum += addingUpto(arr, num - 1));
};
/**
 * Calculate the with of tab
 * @param tabWidths list with of each tab
 * @param selectedTab tab which selected
 * @returns with of tab in percentage
 */
var calculateWidth = function (tabWidths, selectedTab) {
    var totalWidth = tabWidths.reduce(function (a, b) { return a + b; }, 0);
    var width = (tabWidths[selectedTab] / totalWidth) * 100;
    return "".concat(isNaN(width) ? 0 : width, "%");
};
/**
 * Calculate the left distance of tab
 * @param tabWidths list with of each tab
 * @param selectedTab tab which selected
 * @returns the left distance of tab from the left in percentage
 */
var calculateLeftDistance = function (tabWidths, selectedTab) {
    if (selectedTab === 0)
        return "0%";
    var leftDistance = addingUpto(tabWidths, selectedTab - 1);
    var totalWidth = tabWidths.reduce(function (a, b) { return a + b; }, 0);
    var leftDistanceByPercent = (leftDistance / totalWidth) * 100;
    return "".concat(isNaN(leftDistanceByPercent) ? 0 : leftDistanceByPercent, "%");
};
var SegmentTab = (0, react_1.forwardRef)(function (props, ref) {
    var _a;
    var tabs = props.tabs, style = props.style, size = props.size, initTabIndex = props.initTabIndex, currentTab = props.currentTab, onChangeTab = props.onChangeTab, _b = props.fullWidth, fullWidth = _b === void 0 ? false : _b, containerBackgroundColor = props.containerBackgroundColor, innerBackgroundColor = props.innerBackgroundColor, textColor = props.textColor, restProps = __rest(props, ["tabs", "style", "size", "initTabIndex", "currentTab", "onChangeTab", "fullWidth", "containerBackgroundColor", "innerBackgroundColor", "textColor"]);
    var _c = (0, ThemeProvider_1.useThemeContext)().themeColor, themeColor = _c === void 0 ? colors_1.default.light : _c;
    var actualContainerBackgroundColor = containerBackgroundColor || themeColor.backgroundQuaternary;
    var actualInnerBackgroundColor = innerBackgroundColor || themeColor.backgroundTertiary;
    var actualTextColor = textColor || themeColor.textPrimary;
    var _d = (0, react_1.useState)((_a = currentTab !== null && currentTab !== void 0 ? currentTab : initTabIndex) !== null && _a !== void 0 ? _a : 0), selectedTab = _d[0], setSelectedTab = _d[1];
    var configsBySize = CONFIGS[size || "md"];
    var _e = (0, react_1.useState)([]), tabWidths = _e[0], setTabWidths = _e[1];
    var renderTabItem = function (tab, i) {
        var tabItemStyle = [
            styles.tabItem,
            {
                paddingHorizontal: configsBySize[1],
                paddingVertical: configsBySize[2],
                width: fullWidth ? "".concat(Math.floor(100 / tabs.length), "%") : undefined,
            },
        ];
        var updateTabWidth = (0, react_1.useCallback)(function (event) {
            if (fullWidth)
                return;
            var width = event.nativeEvent.layout.width;
            setTabWidths(function (tabWidths) {
                tabWidths[i] = width;
                return __spreadArray([], tabWidths, true);
            });
        }, [i, fullWidth]);
        return (react_1.default.createElement(Col_1.default, { onPress: function () { return setSelectedTab(i); }, key: "".concat(tab.name).concat(i), style: tabItemStyle, onLayout: updateTabWidth },
            react_1.default.createElement(RText_1.default, { type: configsBySize[0], title: tab.name, color: actualTextColor, style: { textAlign: "center", padding: 4 } })));
    };
    var springProps = (0, native_1.useSpring)({
        opacity: 1,
        width: fullWidth
            ? "".concat(Math.floor(100 / tabs.length), "%")
            : calculateWidth(tabWidths, selectedTab),
        left: fullWidth
            ? "".concat(Math.floor((selectedTab / tabs.length) * 100), "%")
            : calculateLeftDistance(tabWidths, selectedTab),
        position: "absolute",
        top: 0,
        height: "100%",
        zIndex: -1,
        padding: 4,
        from: { opacity: 0 },
    });
    var changeTab = (0, react_1.useCallback)(function (tabIndex) {
        setSelectedTab(tabIndex);
    }, []);
    var renderAnimatedBox = (0, react_1.useMemo)(function () {
        return tabWidths.length > 0 || fullWidth ? (react_1.default.createElement(native_1.animated.View, { style: springProps },
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.innerView,
                    { backgroundColor: actualInnerBackgroundColor },
                ] }))) : null;
    }, [tabWidths, springProps, fullWidth]);
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        changeTab: changeTab,
    }); });
    (0, react_1.useEffect)(function () {
        onChangeTab && onChangeTab(selectedTab);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTab]);
    return (react_1.default.createElement(react_native_1.View, __assign({ style: [styles.alignContainer, style] }, restProps),
        react_1.default.createElement(Row_1.default, { style: [
                styles.container,
                {
                    width: fullWidth ? "100%" : undefined,
                    backgroundColor: actualContainerBackgroundColor,
                },
            ] },
            react_1.default.createElement(react_native_1.View, { style: [
                    styles.tabItemWrapper,
                    { width: fullWidth ? "100%" : undefined },
                ] },
                tabs.map(renderTabItem),
                renderAnimatedBox))));
});
var styles = react_native_1.StyleSheet.create({
    alignContainer: {
        alignItems: "flex-start",
    },
    container: {
        borderRadius: 4,
    },
    tabItem: {
        borderRadius: 4,
    },
    tabItemWrapper: {
        display: "flex",
        flexDirection: "row",
    },
    innerView: {
        width: "100%",
        height: "100%",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 1,
        shadowOpacity: 0.4,
        borderRadius: 4,
    },
});
SegmentTab.displayName = "SegmentTab";
exports.default = SegmentTab;
