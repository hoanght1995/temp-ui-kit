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
var utils_1 = require("../../utils");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
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
    var tabs = props.tabs, style = props.style, size = props.size, initTabIndex = props.initTabIndex, currentTab = props.currentTab, onChangeTab = props.onChangeTab, restProps = __rest(props, ["tabs", "style", "size", "initTabIndex", "currentTab", "onChangeTab"]);
    var _b = (0, react_1.useState)((_a = currentTab !== null && currentTab !== void 0 ? currentTab : initTabIndex) !== null && _a !== void 0 ? _a : 0), selectedTab = _b[0], setSelectedTab = _b[1];
    var configsBySize = CONFIGS[size || "md"];
    var _c = (0, react_1.useState)([]), tabWidths = _c[0], setTabWidths = _c[1];
    var renderTabItem = function (tab, i) {
        var _tabItemStyle = [
            styles.tabItem,
            {
                paddingHorizontal: configsBySize[1],
                paddingVertical: configsBySize[2],
            },
        ];
        var updateTabWidth = (0, react_1.useCallback)(function (event) {
            var width = event.nativeEvent.layout.width;
            setTabWidths(function (tabWidths) {
                tabWidths[i] = width;
                return __spreadArray([], tabWidths, true);
            });
        }, [i]);
        return (react_1.default.createElement(Col_1.default, { onPress: function () { return setSelectedTab(i); }, key: "".concat(tab.name).concat(i), style: _tabItemStyle, onLayout: updateTabWidth },
            react_1.default.createElement(RText_1.default, { type: configsBySize[0], title: tab.name })));
    };
    var springProps = (0, native_1.useSpring)({
        opacity: 1,
        width: calculateWidth(tabWidths, selectedTab),
        left: calculateLeftDistance(tabWidths, selectedTab),
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
        return tabWidths.length > 0 ? (react_1.default.createElement(native_1.animated.View, { style: springProps },
            react_1.default.createElement(react_native_1.View, { style: styles.innerView }))) : null;
    }, [tabWidths, springProps]);
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        changeTab: changeTab,
    }); });
    (0, react_1.useEffect)(function () {
        onChangeTab && onChangeTab(selectedTab);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedTab]);
    return (react_1.default.createElement(react_native_1.View, __assign({ style: [styles.alignContainer, style] }, restProps),
        react_1.default.createElement(Row_1.default, { style: styles.container },
            react_1.default.createElement(react_native_1.View, { style: styles.tabItemWrapper },
                tabs.map(renderTabItem),
                renderAnimatedBox))));
});
var styles = react_native_1.StyleSheet.create({
    alignContainer: {
        alignItems: "flex-start",
    },
    container: {
        borderRadius: 4,
        backgroundColor: utils_1.COLORS.violet100,
    },
    tabItem: {
        borderRadius: 4,
        margin: 4,
    },
    tabItemWrapper: {
        display: "flex",
        flexDirection: "row",
    },
    innerView: {
        width: "100%",
        height: "100%",
        backgroundColor: utils_1.COLORS.white,
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
exports.default = (SegmentTab);
