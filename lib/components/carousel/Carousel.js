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
var native_1 = require("@react-spring/native");
var utils_1 = require("../../utils");
var lodash_1 = require("lodash");
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Control_1 = __importStar(require("./Control"));
var Indicator_1 = __importDefault(require("./Indicator"));
var Carousel = (0, react_1.forwardRef)(function (props, ref) {
    var autoPlay = props.autoPlay, currentActiveSlide = props.currentActiveSlide, _a = props.intervalTime, intervalTime = _a === void 0 ? 4000 : _a, onChangeSlide = props.onChangeSlide, _b = props.showIndicator, showIndicator = _b === void 0 ? true : _b, _c = props.showControl, showControl = _c === void 0 ? true : _c, data = props.data, renderItem = props.renderItem;
    var pages = (0, react_1.useMemo)(function () {
        return data.map(function (item, index) {
            return function (_a) {
                var style = _a.style;
                return (react_1.default.createElement(native_1.animated.View, { style: [style, styles.slide] }, renderItem(item, index)));
            };
        });
    }, [data]);
    var panResponder = (0, react_1.useRef)(react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: function (evt, gestureState) { return true; },
        onPanResponderRelease: function (evt, gestureState) {
            var x = gestureState.dx;
            var y = gestureState.dy;
            if (Math.abs(x) > Math.abs(y)) {
                if (x >= 0) {
                    // swipe left
                    debounceSetIndex(Control_1.CardinalDirections.Previous);
                    setReverse(true);
                }
                else {
                    // swipe left
                    debounceSetIndex(Control_1.CardinalDirections.Next);
                    setReverse(false);
                }
            }
        },
    })).current;
    var _d = (0, react_1.useState)(currentActiveSlide !== null && currentActiveSlide !== void 0 ? currentActiveSlide : 0), index = _d[0], setIndex = _d[1];
    var _e = (0, react_1.useState)(false), reverse = _e[0], setReverse = _e[1];
    var transRef = (0, native_1.useSpringRef)();
    var transitions = (0, native_1.useTransition)(index, {
        ref: transRef,
        from: {
            opacity: 0,
            left: reverse ? "-100%" : "100%",
            position: "absolute",
        },
        enter: { opacity: 1, left: "0%" },
        leave: { opacity: 1, left: reverse ? "50%" : "-50%" },
    });
    var onChangeIndicator = (0, react_1.useCallback)(function (value) {
        setIndex(value);
        setReverse(value > index);
    }, [index]);
    var debounceSetIndex = (0, react_1.useCallback)((0, lodash_1.debounce)(function (value) {
        setIndex(function (state) {
            var newState = value === Control_1.CardinalDirections.Next ? state + 1 : state - 1;
            if (newState > pages.length - 1)
                return 0;
            if (newState < 0)
                return pages.length - 1;
            return newState;
        });
    }, 250), []);
    var handleControlClick = (0, react_1.useCallback)(function (value) {
        debounceSetIndex(value);
        setReverse(value === Control_1.CardinalDirections.Previous);
    }, []);
    (0, react_1.useEffect)(function () {
        transRef.start();
        onChangeSlide && onChangeSlide(index);
    }, [index]);
    (0, react_1.useEffect)(function () {
        if (!autoPlay)
            return;
        var autoPlayInterval = setInterval(function () {
            debounceSetIndex(Control_1.CardinalDirections.Next);
        }, intervalTime);
        (function () { return clearInterval(autoPlayInterval); });
    }, [autoPlay]);
    (0, react_1.useImperativeHandle)(ref, function () { return ({
        goTo: onChangeIndicator,
        next: function () { return handleControlClick(Control_1.CardinalDirections.Next); },
        prev: function () { return handleControlClick(Control_1.CardinalDirections.Previous); },
    }); });
    return (react_1.default.createElement(react_native_1.View, { style: styles.container },
        react_1.default.createElement(react_native_1.View, __assign({ style: styles.container }, panResponder.panHandlers),
            react_1.default.createElement(react_native_1.View, { style: styles.slides }, transitions(function (style, i) {
                var Page = pages[i];
                return react_1.default.createElement(Page, { style: style, key: i });
            })),
            showControl && react_1.default.createElement(Control_1.default, { handleControlClick: handleControlClick })),
        showIndicator && (react_1.default.createElement(Indicator_1.default, { indicatorQuantity: pages.length, activeIndex: index, onChangeIndicator: onChangeIndicator }))));
});
var styles = react_native_1.StyleSheet.create({
    container: {
        height: "100%",
    },
    slides: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 4,
    },
    slide: {
        backgroundColor: utils_1.COLORS.violet200,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
    },
});
Carousel.displayName = "Carousel";
exports.default = Carousel;
