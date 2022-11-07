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
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var native_1 = require("@react-spring/native");
var colors_1 = __importDefault(require("../../utils/colors"));
var Icon_1 = __importDefault(require("../basic/Icon"));
var DIMENSION = 12;
//** Line height if only have 1 line*/ 
var DEFAULT_LINE_HEIGHT = 40;
var Accordion = function (props) {
    var _a = props.title, title = _a === void 0 ? "" : _a, _b = props.renderTitle, renderTitle = _b === void 0 ? function () { return react_1.default.createElement(react_1.default.Fragment, null); } : _b, content = props.content, _c = props.renderContent, renderContent = _c === void 0 ? function () { return react_1.default.createElement(react_1.default.Fragment, null); } : _c, _d = props.isOpen, isOpen = _d === void 0 ? false : _d, _e = props.testID, testID = _e === void 0 ? 'accordion' : _e;
    var _f = (0, react_1.useState)(isOpen), open = _f[0], setOpen = _f[1];
    var _g = (0, react_1.useState)(DEFAULT_LINE_HEIGHT), height = _g[0], setHeight = _g[1];
    var iconAnimation = (0, native_1.useSpring)({
        rotate: open ? "90deg" : "-90deg",
    });
    var collapseAnimation = (0, native_1.useTransition)(open, ({
        from: { marginTop: -height },
        enter: { marginTop: 0 },
        leave: { marginTop: -height },
    }));
    var toggle = (0, react_1.useCallback)(function () {
        setOpen(function (open) { return !open; });
    }, []);
    var onLayout = (0, react_1.useCallback)(function (event) {
        setHeight(event.nativeEvent.layout.height + DIMENSION);
    }, []);
    return (react_1.default.createElement(native_1.animated.View, { style: [styles.container, { overflow: open ? "scroll" : "hidden" }] },
        react_1.default.createElement(react_native_1.Pressable, { testID: "".concat(testID, "-title"), style: styles.header, onPress: toggle },
            title
                ? react_1.default.createElement(react_native_1.Text, { style: styles.heading }, title)
                : renderTitle(),
            react_1.default.createElement(native_1.animated.View, { style: { transform: [{ rotate: iconAnimation.rotate }] } },
                react_1.default.createElement(Icon_1.default, { name: "chevron-left" }))),
        collapseAnimation(function (style, item) { return (item &&
            react_1.default.createElement(native_1.animated.View, { style: [style, styles.panel], onLayout: onLayout, testID: "".concat(testID, "-content") }, content
                ? react_1.default.createElement(react_native_1.Text, null, content)
                : renderContent())); })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: colors_1.default.white,
        borderRadius: 4,
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: colors_1.default.white,
        padding: DIMENSION,
        zIndex: 1
    },
    heading: {
        fontSize: 16,
        fontWeight: "500",
    },
    icon: {
        transform: [
            {
                rotate: "90deg",
            },
        ],
    },
    panel: {
        borderRadius: 4,
        backgroundColor: colors_1.default.lightPurple900,
        marginHorizontal: DIMENSION,
        padding: DIMENSION,
        marginBottom: DIMENSION
    }
});
exports.default = (0, react_1.memo)(Accordion);
